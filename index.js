const express = require("express")
const server  = express()


server.post("/users", function(req, res) {
    res.status(404)
    res.send("NOT FOUND")
})


server.get("/users", function(req, res) {
    res.status(404)
    res.send("NOT FOUND")
})

server.get("/users/:id", function(req, res) {
    res.status(404)
    res.send("NOT FOUND")
})

server.patch("/users/:id", function(req, res) {
    res.status(404)
    res.send("NOT FOUND")
})

server.delete("/users/:id", function(req, res) {
    res.status(404)
    res.send("NOT FOUND")
})

server.listen(3000)
