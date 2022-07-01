const server = require("./server")
const database = require("./database")

server.post("/users", function(req, res) {
    database("users").
        insert(req.body).
        then(function(data) {
            res.status(201)
            res.json(data)
        }).
        catch(function(error) {
            res.status(500)
            res.json(error)
        })
})


server.get("/users", function(req, res) {
    database("users").
        then(function(data) {
            res.json(data)
        }).
        catch(function(error) {
            res.status(500)
            res.json(error)
        })
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
