import { create } from "zustand";
import type { User } from "../schemas/loginSchema";
import { categories, orders, products, users } from "../data/data";
import type { order } from "../types/orders";
import type { category } from "../types/categories";
import type { product } from "../types/products";

type DashboardStore = {
  users: User[];
  orders: order[];
  categories: category[];
  products: product[];
  deleteCategory: (value: number) => void;
};
export const useDashboardStore = create<DashboardStore>((set) => ({
  users: users,
  orders: orders,
  categories: categories,
  products: products,

  deleteCategory: (id: number) => {
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    }));
  },
}));
