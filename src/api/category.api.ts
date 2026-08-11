import { categories } from "../data/data";
import type { category, CategoryFormData } from "../schemas/categorySchema";

export const getCategories = async (): Promise<category[]> => {
  return categories;
};

export const getCategory = async (id: number): Promise<category> => {
  const category = categories.find((category) => category.id === id);
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};

export const createCategory = async (
  data: CategoryFormData,
): Promise<category> => {
  const newCategory: category = {
    id: Date.now(),
    ...data,
  };
  console.log(newCategory);
  return newCategory;
};

export const deleteCategory = async (id: number): Promise<void> => {
  const index = categories.findIndex((cat) => cat.id === id);
  if (index === -1) {
    throw new Error("Category not found");
  }
  categories.splice(index, 1);
};
