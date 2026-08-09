import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const userType = loginSchema.extend({
  id: z.number(),
  name: z.string(),
  avatar: z.string(),
  role: z.string(),
});

export type User = z.infer<typeof userType>;
