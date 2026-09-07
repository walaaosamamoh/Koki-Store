import { products } from "../data/data";
import type { product, ProductFormData } from "../schemas/productSchema";


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

export const createProduct = async (data: ProductFormData): Promise<product> => {
  const newProduct: product = {
    id: Date.now(),
    ...data
  }
  products.push(newProduct)
  return newProduct
}

export const deleteProduct = async (id: number): Promise<void> => {
  const index = products.findIndex((prod) => prod.id === id);
  if (index === -1) {
    throw new Error("Product not found");
  }
  products.splice(index, 1);
}