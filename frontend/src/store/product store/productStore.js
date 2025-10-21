import { create } from "zustand";
import { API } from "../../helper";

const { Product } = API;

const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProducts: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "All Fields are Required" };
    }

    try {
      const response = await fetch(Product.CREATE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await response.json();
      set((state) => ({ products: [...state.products, data.newProduct] }));
      return { success: true, message: "Product Created Successfully" };
    } catch (error) {
      console.error(`Error while Creating Product ${error.message}`);
    }
  },
  fetchProducts: async () => {
    try {
      const response = await fetch(Product.GET);
      const data = await response.json();
      set({ products: data.products });
      return { success: true, message: "Product Fetch Successfully" };
    } catch (error) {
      console.error(`Error While Fetching Product ${error.message}`);
    }
  },
  updateProduct: async (pid, product) => {},
  deleteProduct: async (pid) => {
    try {
      const response = await fetch(Product.DELETE(pid), {
        method: "DELETE",
      });
      const data = await response.json();
      if (!data.success) {
        return { success: false, message: data.message };
      }
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      })); 
      return {success: true, message:"Product Deleted Successfully"}
    } catch (error) {
      console.error(`Error While Deleting Product ${error.message}`); 
    }
  },
}));

export default useProductStore;
