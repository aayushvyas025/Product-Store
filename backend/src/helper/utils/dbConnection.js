import { connectToDB } from "../../config/index.js";
import envVariables from "../constant/envVariables.js";

const { backendPort } = envVariables;

function dbConnection(app) {
  connectToDB()
    .then(() => {
      app.listen(backendPort, () => {
        console.log(
          `Your Server was successfully run on http://localhost:${backendPort}`
        );
      });
    })
    .catch((error) => {
      console.error(`Error From Database: ${error.message}`);
    }).finally(() => {
        console.error(`Database Connected Successfully`)
    });
}

export default dbConnection;
