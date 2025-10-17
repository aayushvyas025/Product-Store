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
      set((state) => ({products:[...state.products, data.newProduct]})); 
      return {success:true , message:  "Product Created Successfully"}
    } catch (error) {
      console.error(`Error while Creating Product ${error.message}`); 
    }
  },
}));

export default useProductStore;
