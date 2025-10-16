import dotenv from "dotenv"; 

dotenv.config(); 

const envVariables = {
  backendPort:process.env.BACKEND_PORT,
  databaseUri:process.env.MONGODB_URI,
  envEnviornment:process.env.NODE_ENV, 
  frontendUrl:process.env.FRONTEND_URL

}

export default envVariables; 