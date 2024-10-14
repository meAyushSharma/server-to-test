const express = require('express');

const app = express();

app.use(express.json());

app.get("/notifications", (req, res) => {
    const data ={
        notifications: Math.floor(Math.random()*140),
        jobs: Math.floor(Math.random()*50),
        messages: Math.floor(Math.random()*70),
        network: Math.floor(Math.random()*80)
    }
    res.json(data);
});

app.listen(3000, ()=>{
    console.log("server listening on : http://localhost:3000/notifications");
});