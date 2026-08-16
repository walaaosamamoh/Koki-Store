import { products } from "../data/data";
import type { product } from "../types/products";

export const getProducts = async (): Promise<product[]> => {
  return products;
};

export const getProduct = async (id: number): Promise<product> => {
  const product = products.find((product) => product.id === id);
  if (!product) {
    throw new Error("product not found");
  }
  return product;
};
