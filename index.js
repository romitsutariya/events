const express = require('express');
const axios = require("axios")
const bp = require("body-parser")
var cors = require('cors')
require('dotenv').config()

const PORT = 7000;
const app = express();

app.use(cors())
app.use(bp.json());

//Env Configuration
const POST=process.env.POST_HOST || '127.0.0.1:4000';  // please add IP + post name
const COMMENT=process.env.COMMENT_HOST || '127.0.0.1:5000';  // please add IP + post name
const QUERY=process.env.POST_HOST || '127.0.0.1:8000';  // please add IP + post name
const MODERATE=process.env.POST_HOST || '127.0.0.1:6000';  // please add IP + post name

app.post("/events", (req, res) => {
    const event = req.body;  
    axios.post(`http://${POST}/events`, event).catch(err=>console.log(err.message));
    axios.post(`http://${COMMENT}/events`, event).catch(err=>console.log(err.message));
    axios.post(`http://${QUERY}/events`, event).catch(err=>console.log(err.message));
    axios.post(`http://${MODERATE}/events`, event).catch(err=>console.log(err.message));
    res.status(200).send({ status: "OK" });
});

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    console.log(`POST ip address is ${POST}`)
    console.log(`COMMENT ip address is ${COMMENT}`)
    console.log(`QUERY ip address is ${QUERY}`)
    console.log(`MODERATE ip address is ${MODERATE}`)
});