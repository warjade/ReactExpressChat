import express from 'express';
// const express = require("express");

const app = express();
app.use(express.json());

// Nuestra nodelo de datos.
class User {
    constructor (name, password) {
        this.name = name;
        this.password = password;
        this.id = Date.now();
    }
}
class Message {
    constructor (source, content) {
        this.source = source;
        this.content = content;
        this.time = Date.now();
    }
}
const users = [];
const messages = [];

function authMiddleware (request, response, next) {
    const { source, password } = request.body;
    const userExists = users.findIndex(
        user => user.id === source && user.password === password
    )
    if ( userExists > -1 ) {
        next();
    } else {
        response.status(401);
        response.json('Unauthorized');
    }
}

function lastMessages () {
    return messages.filter(
        message => message.time > (Date.now() - 60000)
    )
}

app.post('/login/', (request, response) => {
    const { userName, password } = request.body;
    const userExists = users.findIndex(
        user => user.name === userName && user.password === password
    );
    if ( userExists >= 0 ) {
        response.status(401);
        response.send("Usuario ya registrado");
        return;
    }
    const newUser = new User(userName, password);
    users.push(newUser);
    const json = JSON.stringify(newUser.id)
    response.send(json);
});

app.get('/users/', (request, response)=>{
    const publicUsersData = users.map(
        user => ({ name: user.name, id: user.id })
    )
    const json = JSON.stringify(publicUsersData)
    response.send(json);
});

app.post('/message/', authMiddleware, (request, response) => {
    const { source, content } = request.body;
    const newMessage = new Message(source, content);
    messages.push(newMessage);
    response.json(lastMessages());
    response.send();
});

app.get('/messages/', authMiddleware, (request, response) => {
    response.json(lastMessages());
    response.send();
});

app.listen(5000, () => {
    console.log(`Example app listening on http://127.0.0.1:5000`)
})