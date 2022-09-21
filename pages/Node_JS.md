## Node Js Base
[]: # Language: markdown
[]: # Path: pages/nodejs.md

Node js is a javascript runtime environment. It is used to run javascript code outside of the browser. It is used to build server side applications. It is a single threaded event loop based runtime environment. It is used to build scalable network applications.

```js
console.log("Hello World");
```

## Node Js Modules
Node js has a module system. It is used to organize code into separate files. It is used to reuse code. It is used to share code between files. It is used to share code between different parts of the application.

```js
// module1.js
module.exports = {
    name: "John",
    age: 30
};
```

```js

// module2.js
const person = require('./module1');
console.log(person.name);
```

## Node Js NPM
Node js has a package manager called NPM. It is used to install packages. It is used to manage dependencies. It is used to manage versions of packages. It is used to manage packages in a project.

```bash
npm install lodash
```

## Node Js HTTP
Node js has a built in http module. It is used to create a web server. It is used to listen to requests. It is used to send responses. It is used to handle requests and responses.

```js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
```

## Node Js File System
Node js has a built in file system module. It is used to work with the file system. It is used to work with files. It is used to work with directories. It is used to work with paths.

```js
const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);
```

## Node Js Events
Node js has a built in events module. It is used to work with events. It is used to raise events. It is used to handle events. It is used to listen to events.


```js
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' });
```

## Node Js Express
Node js has a framework called Express. It is used to build web applications. It is used to build REST APIs. It is used to build web servers. It is used to build web applications.

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => console.log('Listening on port 3000...'));
```
