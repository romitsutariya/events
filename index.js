const express = require('express');
const axios = require("axios")
const bp = require("body-parser")
var cors = require('cors')

const PORT = 7000;
const app = express();

app.use(cors())
app.use(bp.json());

app.post("/events", (req, res) => {
    const event = req.body;  
    axios.post("http://localhost:4000/events", event).catch(err=>console.log(err.message));
    axios.post("http://localhost:5000/events", event).catch(err=>console.log(err.message));
    axios.post("http://localhost:8000/events", event).catch(err=>console.log(err.message));
    axios.post("http://localhost:6000/events", event).catch(err=>console.log(err.message));
    res.status(200).send({ status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});