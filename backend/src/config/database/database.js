import mongoose from "mongoose"; 
import { envVariables } from "../../helper/index.js";

const {databaseUri} = envVariables; 
console.log(databaseUri)

const connectToDB = async() => {
    try {
        const connectingToDB = await mongoose.connect(databaseUri); 
        console.log(`Database host: ${connectingToDB.connection.host}`)
    } catch (error) {
        console.error(`Error While Creating Connection With Database: ${error.message}`); 
        process.exit(1); 
        
    }
}

export default connectToDB; 