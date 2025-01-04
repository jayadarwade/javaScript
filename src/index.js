const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config()
const helpers = require("./helpers/helper");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
global.__baseuri=__dirname;
global.locals = helpers.getLocalMessage();

app.get("/",(res,req)=>{
    res.json({message:"WELCOME"})
})
app.listen(3000,async ()=>{
    console.log(`Server is running on ${await helpers.getLocalIp()}`);  
})