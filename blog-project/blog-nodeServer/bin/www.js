const http = require("http");
const serverHandle = require("../index");

const PORT = 5168;

const server = http.createServer(serverHandle);

server.listen(PORT, "0.0.0.0")

console.log('服务启动')
