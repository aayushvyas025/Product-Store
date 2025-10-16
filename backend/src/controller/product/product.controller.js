import mongoose from "mongoose";
import { Product } from "../../model/index.js";

const productControllers = {
  getAllProducts: async (_, response) => {
    try {
      const products = await Product.find({});
      response.status(200).json({
        success: true,
        message:
          products.length > 0
            ? "Fetch Products Successfully"
            : "No Products Found",
        products,
      });
    } catch (error) {
      console.error(
        `Error While Fetching Products from Database ${error.message}`
      );
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  createProducts: async (request, response) => {
    const product = request.body;

    if (!product.name || !product.price || !product.image) {
      return response
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }

    const newProduct = new Product(product);
    try {
      await newProduct.save();
      response
        .status(201)
        .json({ success: true, message: "Product Created Successfully" });
    } catch (error) {
      console.error(`Error While Creating Product: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  updateProduct: async (request, response) => {
    const { id } = request.params;
    const product = request.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid Product Id" });
    }

    if (!product.name || !product.price || !product.image) {
      return response
        .status(400)
        .json({ success: false, message: "All Fields are Required" });
    }

    try {
      const updatedProduct = await Product.findByIdAndUpdate(id, product, {
        new: true,
      });

      if (!updatedProduct) {
        return response
          .status(404)
          .json({ success: false, message: "Product Not Found" });
      }

      response
        .status(200)
        .json({ success: true, message: "Product Updated Successfully" });
    } catch (error) {
      console.error(`Error While Updating Product: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
  deleteProduct: async (request, response) => {
    const { id } = request.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return response
        .status(400)
        .json({ success: false, message: "Invalid Product Id" });
    }

    try {
      await Product.findByIdAndDelete(id);
      response
        .status(200)
        .json({ success: true, message: "Product Deleted Successfully" });
    } catch (error) {
      console.error(`Error While Deleting Product: ${error.message}`);
      response
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
  },
};

export default productControllers;
