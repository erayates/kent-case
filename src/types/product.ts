import { z } from "zod";

export const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  brand: z.string().min(1, "Brand is required"),
  price: z.number().min(0, "Price must be positive"),
  createdAt: z.string().optional(),
  imageUrl: z.string().url("Must be a valid URL"),
  stockQuantity: z.number().int().min(0, "Stock must be positive value."),
  isActive: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;
