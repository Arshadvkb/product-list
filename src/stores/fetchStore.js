import axios from "axios";
import { create } from "zustand";

export const fetchStore = create((set) => ({
  isFetching: false,
  result: [],
  singleItem:{},

  fetchData: async () => {
    set({ isFetching: true });
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      set({ result: res.data });
    
      
      
    } catch (error) {
      console.log("error in fetching ", error.message);
    } finally {
      set({ isFetching: false });
    }
  },
  fetchSingleItem:async(id)=>{
        set({ isFetching: true });
          try {
            const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
            set({ singleItem: res.data });
          } catch (error) {
            console.log("error in fetching ", error.message);
          } finally {
            set({ isFetching: false });
          }
  }

  
}));
