import { products } from "../data/data";
import type { product } from "../types/products";

export const getProducts = async (): Promise<product[]> => {
  return products;
};
