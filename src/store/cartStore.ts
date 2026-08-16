import { create } from "zustand";
import type { product } from "../types/products";

type cartProduct = product & {
  qty: number;
};

type CartStore = {
  cart: cartProduct[];
  addToCart: (product: product, qty: number) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product, qty) => {
    set((state) => {
      const existingProd = state.cart.find((prod) => prod.id === product.id);

      let updatedCart;

      if (existingProd) {
        const totalQty = existingProd.qty + qty;

        updatedCart = state.cart.map((prod) =>
          prod.id === product.id
            ? {
                ...prod,
                qty: Math.min(totalQty, product.stock),
              }
            : prod,
        );
      } else {
        updatedCart = [
          ...state.cart,
          {
            ...product,
            qty,
          },
        ];
      }

      console.log("Updated cart:", updatedCart);

      return {
        cart: updatedCart,
      };
    });
    console.log(product);
  },
}));
