import express from "express"; 
import { dbConnection } from "./src/helper/index.js";

const app = express(); 

dbConnection(app); 