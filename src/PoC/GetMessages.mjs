const getMessageButton = document.querySelector("#getMessagesButton");
const htmlGetMessages = document.querySelector("#getMessages");

//htmlUpdateButton.addEventListener("click", updateButtonClickHandler);
getMessagesButton.addEventListener("click", getMessagesButtonHandler);

function getMessagesButtonHandler(){
    const urlLogin="https://web-develop-react-express-chat.herokuapp.com/messages/"
    const pass = document.querySelector("#pass").value;
    const userId = document.querySelector("#userId").value;
    const token = authToken(userId, pass);
    const message = JSON.stringify({"content": document.querySelector("#message").value});
    authGet(urlLogin, token).then(data => htmlGetMessages.innerHTML = JSON.stringify(data));
    console.log("Leyendo Mensajes");
}

async function authGet(url, token) {
    const response = await fetch(
        url,
        { 
            headers: {
                Authorization: token
            }
        }
    );
    const data = await response.json();
    return data;
}

/**
 * Create authorization token
 */

 function authToken(id, secret) {
    // En autenticación Basic, usuario y contraseña se separan con ':'
    const authToken = `${id}:${secret}`;
    // Y se codifican en Base64
    const base64token = btoa(authToken);
    return `Basic ${base64token}`;
}