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
  getCategory: (value: number) => category;
  deleteCategory: (value: number) => void;
  getProductsByCategoryId: (Value: number) => product[];
};
export const useDashboardStore = create<DashboardStore>((set) => ({
  users: users,
  orders: orders,
  categories: categories,
  products: products,

  getCategory: (id: number) => {
    const category = categories.find((category) => category.id === id);
    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  },

  getProductsByCategoryId: (id: number) => {
    return products.filter((prod) => prod.categoryId === id);
  },

  deleteCategory: (id: number) => {
    set((state) => ({
      categories: state.categories.filter((category) => category.id !== id),
    }));
  },
}));
