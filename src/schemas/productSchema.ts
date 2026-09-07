import z from "zod";

export const productSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters "),
  description: z.string().min(6, "Description must be at least 6 characters "),
  categoryId: z.number().int("Category ID must be an integer")
    .min(1, "Please select a category")
    .max(5, "Invalid category"),
  price: z.number().positive("Price must be greater than 0"),
  stock: z
    .number()
    .int("Stock must be an integer")
    .min(0, "Stock cannot be negative"),
  image: z.string().min(1, "Image is required"),
});

export type ProductFormData = z.infer<typeof productSchema>;

export const productType = productSchema.extend({
  id: z.number(),
});

export type product = z.infer<typeof productType>;
