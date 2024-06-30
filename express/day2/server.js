const express = require("express");
const bodyparser = require("body-parser");
const _ = require("underscore");
const app = express();

const port = 4000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var uid = 1;
let users = [];

app.get("/loadusers", (req, res) => {
    res.json(users);
});
app.get("/loaduser/:id", (req, res) => {
    let uid = parseInt(req.params.id);
    let foundData = _.findWhere(users, { id: uid });
    if (foundData) {
        res.json(foundData);
    }
});
app.post("/saveuser", (req, res) => {
    var uData = req.body;
    uData.id = uid++;
    users.push(uData);
    res.json(users);
});
app.delete('/deleteuser/:id', (req, res) => {

    var uid = parseInt(req.params.id)
    var foundData = _.findWhere(users, { id: uid })
    if (foundData) {
      users=_.without(users,foundData)
      res.json(users);

    } else {
        res.send('user not found')
    }
})
app.listen(port, (err) => {
    if (err) {
        console.log("Something went wrong!!");
        throw err;
    }
    console.log(`server is reunning on http://localhost:${port}/loadusers`);
})