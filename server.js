// server.js
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8001);

console.log("start server at http://localhost:8001")
