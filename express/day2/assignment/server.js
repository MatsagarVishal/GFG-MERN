const express = require("express");
const bodyparser = require("body-parser");
const _ = require("underscore");
const app = express();

const port = 4000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

let uid=1;

let projectsData=[];

app.post("/addpreject",(req,res)=>{
    let getData=req.body;
    getData.id=uid++;
    projectsData.push(getData);

    res.json(projectsData);
})
app.get("/",(req,res)=>{
res.json(projectsData);
})
app.listen(port, (err) => {
    if (err) {
        console.log("Something went wrong!!");
        throw err;
    }
    console.log(`server is reunning on http://localhost:${port}/loadusers`);
})