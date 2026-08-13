import { create } from "zustand";
import type { product } from "../types/products";

type CartStore = {
  cart: product[];
  addToCart: (product: product) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product) => {
    set((state) => ({
      cart: [...state.cart, product],
    }));
    console.log("added");
  },
}));
