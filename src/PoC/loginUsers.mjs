const setUserButton = document.querySelector("#setUserButton");

setUserButton.addEventListener("click", setUserDataButtonHandler);

function setUserDataButtonHandler(){
    const urlLogin="https://web-develop-react-express-chat.herokuapp.com/login/"
    const user = document.querySelector("#user").value;
    const pass = document.querySelector("#pass").value;
    let userData=JSON.stringify({userName: user, password: pass});
    console.log("Enviando datos alta usuario...")
    console.log(user + " , " +  pass);
    setUserPost(urlLogin, userData);
    return pass;
}
async function setUserPost(urlLogin, userData) {
    const response = await fetch(
        urlLogin,
        {
            method: 'POST',
            body: userData,
            headers: {
                "Content-Type": "application/json",
            }
        }
    );
    const responseData = await response.json();
    console.log(responseData);
    const id = responseData;
    return responseData;
}