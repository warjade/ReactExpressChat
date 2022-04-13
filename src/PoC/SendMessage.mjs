const sendMessageButton = document.querySelector("#sendMessageButton");
sendMessageButton.addEventListener("click", sendMessageButtonHandler);

function sendMessageButtonHandler(){
    const urlLogin="https://web-develop-react-express-chat.herokuapp.com/message/"
    const userId = document.querySelector("#userId").value;
    const pass = document.querySelector("#pass").value;
    const message = JSON.stringify({"content": document.querySelector("#message").value});
    const token = authToken(userId, pass);
    console.log(urlLogin);
    console.log(userId);
    console.log(pass);
    console.log(message);
    console.log(token);
    authPost(urlLogin, token, message);
    console.log("Enviando Mensaje....");
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
/**
 *  JSON POST
 */

 async function authPost(url, token, data) {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            }
        }
    );
    const responseData = await response.json();
    return responseData;
}