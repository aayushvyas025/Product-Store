import { API } from "../../helper/index.js";
import { productRoutes } from "../../routes/index.js";

const {Product} = API; 

const routesMiddleware = {
  product:(app) => app.use(Product.BASE, productRoutes)
}

export default routesMiddleware; 