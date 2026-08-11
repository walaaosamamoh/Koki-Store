import z from "zod";

export const categorySchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters "),
  description: z.string().min(6, "Description must be at least 6 characters "),
  image: z.string().min(1, "Image is required"),
});

export type CategoryFormData = z.infer<typeof categorySchema>;

export const categoryType = categorySchema.extend({
  id: z.number(),
});

export type category = z.infer<typeof categoryType>;
