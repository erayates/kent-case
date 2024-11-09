import ProductCard from "@/components/products/product-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      <h1 className="text-3xl font-bold">Products</h1>
      <p className="text-zinc-400">Shows all products on the application.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
