import express from "express";
import { API } from "../../helper/index.js";
import { productControllers } from "../../controller/index.js";

const router = express.Router();
const { Product } = API;
const { getAllProducts, createProducts, updateProduct, deleteProduct } =
  productControllers;

router.get(Product.GET, getAllProducts);
router.post(Product.CREATE, createProducts);
router.put(Product.UPDATE, updateProduct);
router.delete(Product.DELETE, deleteProduct);

export default router;
