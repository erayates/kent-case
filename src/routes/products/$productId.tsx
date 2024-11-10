import ProductDetails from "@/components/products/product-details";
import { useProducts } from "@/hooks/use-products";
import { Product } from "@/types/product";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/products/$productId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();
  const navigate = useNavigate();
  const { product, deleteProduct } = useProducts();
  const productQuery = product(productId);

  if (productQuery.isLoading) return <div>Loading...</div>;
  if (productQuery.isError) return <div>Error on loading product.</div>;

  const handleDelete = async () => {
    await deleteProduct.mutateAsync(productId);
    navigate({ to: "/products" });
  };

  return (
    <div className="flex flex-1 flex-col p-4 pt-0 ">
      <ProductDetails
        product={productQuery.data as Product}
        onDelete={handleDelete}
      />
    </div>
  );
}
