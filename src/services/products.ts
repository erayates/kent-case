import { api } from "./api";
import { Product } from "@/types/product";

export const productService = {
  getAll: () => api.get<Product[]>("/products"),
  getById: (id: string) => api.get<Product>(`/products/${id}`),
  create: (product: Omit<Product, "id">) =>
    api.post<Product>("products", product),

  update: (id: string, product: Partial<Product>) =>
    api.put<Product>(`/products/${id}`, product),
  delete: (id: string) => api.delete<Product>(`/products/${id}`),
}; 
