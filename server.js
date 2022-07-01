const express = require("express")
const server  = express()

server.use(express.json());
server.use(middleware.Authenticate)

module.exports = server
