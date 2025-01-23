const express = require('express');
const cors = require('cors');
const { currData } = require('./currency-data');
const app = express();

app.use(express.json());
app.use(cors());
app.get("/notifications", (req, res) => {
    const data ={
        jobs: Math.floor(Math.random()*50),
        notifications: Math.floor(Math.random()*140),
        messages: Math.floor(Math.random()*70),
        network: Math.floor(Math.random()*80)
    }
    res.json(data);
});

app.get("/currency-converter", (req, res)=> {
    const curr = req.query.currency;
    console.log("this is curr: ", curr)
    console.log(currData["usd"])
    return res.status(200).json(currData[curr]);
})

app.listen(3000,"0.0.0.0",()=>{
    console.log("server listening on : http://localhost:3000/notifications and http://localhost:3000/currency-converter");
});