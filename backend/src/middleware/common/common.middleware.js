import cors from "cors";
import { envVariables } from "../../helper/index.js";

const { nodeEnviornment, frontendUrl } = envVariables;

const commonMiddleware = {
  jsonParser: (app, express) => {
    app.use(express.json());
  },
  corsConnection: (app) => {
    if (nodeEnviornment !== "production") {
      app.use(
        cors({
          origin: frontendUrl,
        })
      );
    }
  },
};

export default commonMiddleware;
