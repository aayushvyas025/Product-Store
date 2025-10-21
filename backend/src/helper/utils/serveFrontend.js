import path from "path"; 
import envVariables from "../constant/envVariables.js"; 
import express from "express"; 

const {nodeEnviornment} = envVariables; 

function serveFrontend(app){
    const __dirname = path.resolve(); 
    if(nodeEnviornment === "production") {
     app.use(express.static(path.join(__dirname, "/frontend/dist")))
    }

    
}