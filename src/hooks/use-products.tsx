import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "./use-toast";
import { productService } from "@/services/products";
import type { Product } from "@/types/product";

export const useProducts = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const products = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await productService.getAll();
      return data;
    },
  });

  const product = (id: string) =>
    useQuery({
      queryKey: ["products", id],
      queryFn: async () => {
        const { data } = await productService.getById(id);
        return data;
      },
    });

  const createProduct = useMutation({
    mutationFn: (newProduct: Omit<Product, "id">) =>
      productService.create(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "SUCCESSFULL!",
        description: "Product created successfully.",
        variant: "success",
      });
    },
    onError: () => {
      toast({
        title: "ERROR!",
        description: "Failed to create product.",
        variant: "destructive",
      });
    },
  });

  const updateProduct = useMutation({
    mutationFn: ({ id, product }: { id: string; product: Partial<Product> }) =>
      productService.update(id, product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "SUCCESSFULL!",
        description: "Product updated successfully.",
        variant: "success",
      });
    },
    onError: () => {
      toast({
        title: "ERROR!",
        description: "Failed to update product.",
        variant: "destructive",
      });
    },
  });

  const deleteProduct = useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast({
        title: "SUCCESSFULL!",
        description: "Product deleted successfully.",
        variant: "success",
      });
    },
    onError: () => {
      toast({
        title: "ERROR!",
        description: "Failed to delete product.",
        variant: "destructive",
      });
    },
  });

  return {
    products,
    product,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};
