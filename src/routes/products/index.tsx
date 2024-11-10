import ProductCard from "@/components/products/product-card";
import { useProducts } from "@/hooks/use-products";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { products } = useProducts();

  if (products.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (products.error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="text-zinc-400">Shows all products on the application.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {products.data?.map((product) => (
          <Link
            key={product.id}
            to="/products/$productId"
            params={{ productId: product.id ?? "" }}
          >
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
