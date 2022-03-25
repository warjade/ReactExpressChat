# ReactExpressChat

Tendrás que escribir tu propio frontend para participar en el chat.

* El archivo `./Insomnia.json` te permitirá comprobar el funcionamiento del backend sando el software [Insomnia](https://insomnia.rest/). Como podrás comprobar, todas las peticiones y respuestas usan JSON para codificar los datos.
* Una vez que te hayas hecho con el funcionamiento del backend a base de prueba y error, escribe algunas funciones en JavaScript que te permitan "hablar" al backend y manejar sus respuestas. Algunos ejemplos con los que empezar:

```js
/**
 * JSON GET
 */ 

async function get(url, data) {
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    });
    return response;
}
```

```js
/**
 *  JSON POST
 */ 
async function post(url, data) {
    const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
    });
    return response;
}
```