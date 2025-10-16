import express from "express"; 
import { dbConnection } from "./src/helper/index.js";
import { commonMiddleware, routesMiddleware } from "./src/middleware/index.js";

const {jsonParser, corsConnection} = commonMiddleware; 
const {product} = routesMiddleware; 

const app = express(); 
jsonParser(app, express); 
corsConnection(app);
product(app); 


dbConnection(app); 