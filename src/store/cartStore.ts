import { create } from "zustand";
import type { product } from "../types/products";

type cartProduct = product & {
  qty: number;
};

type CartStore = {
  cart: cartProduct[];
  addToCart: (product: product, qty: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],

  addToCart: (product, qty) => {
    set((state) => {
      const existingProd = state.cart.find(
        (prod) => prod.id === product.id
      );

      if (existingProd) {
        const totalQty = existingProd.qty + qty;

        return {
          cart: state.cart.map((prod) =>
            prod.id === product.id
              ? {
                  ...prod,
                  qty: Math.min(totalQty, product.stock),
                }
              : prod,
          ),
        };
      }

      return {
        cart: [
          ...state.cart,
          {
            ...product,
            qty: Math.min(qty, product.stock),
          },
        ],
      };
    });
  },

  increaseQuantity: (productId: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.qty < item.stock
          ? { ...item, qty: item.qty + 1 }
          : item,
      ),
    }));
  },

  decreaseQuantity: (productId: number) => {
    set((state) => ({
      cart: state.cart.map((item) =>
        item.id === productId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item,
      ),
    }));
  },

  removeFromCart: (productId: number) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    }));
  },

  clearCart: () => {
    set({ cart: [] });
  },
}));