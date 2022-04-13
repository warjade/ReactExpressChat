const host = "https://web-develop-react-express-chat.herokuapp.com"
const htmlGetUsers = document.querySelector("#getUsers");
const htmlUpdateButton = document.querySelector("#getUsersButton");

//const getMessageButton = document.querySelector("#getMessageButton");
const htmlGetMessages = document.querySelector("#htmlGetMessages");

htmlUpdateButton.addEventListener("click", getUsers);
//getMessageButton.addEventListener("click", getMessageButtonHandler);

async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function getUsers () {
    const users = await get(host+"/users/");
    htmlGetUsers.innerText = JSON.stringify(users);
};


/**
 * JSON GET
 */
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


htmlUpdateButton.addEventListener("click", getUsers)