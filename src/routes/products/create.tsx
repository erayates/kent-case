import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { productSchema } from "@/types/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProducts } from "@/hooks/use-products";
import FormInput from "@/components/form-elements/input";
import FormSelect from "@/components/form-elements/select";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products/create")({
  component: RouteComponent,
});

function RouteComponent() {
  const { createProduct } = useProducts();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    await createProduct.mutateAsync(values);
    navigate({ to: "/products" });
  };

  return (
    <div className="flex flex-1 flex-col p-4 pt-0">
      <div>
        <h1 className="text-3xl font-bold">Create New Product</h1>
        <p className="text-zinc-400">
          Fill the form below to create a new product.
        </p>
      </div>

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row md:space-x-2 w-full mt-4">
            <div className="flex flex-col w-full md:w-1/2">
              <FormInput name="name" label="Name" placeholder="Product name" />
              <FormInput
                name="description"
                label="Description"
                placeholder="Product description"
              />
              <FormInput name="brand" label="Brand" placeholder="Brand name" />

              <FormInput
                name="price"
                label="Price"
                placeholder="999.999"
                type="number"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2">
              <FormInput
                name="imageUrl"
                label="Image URL"
                placeholder="Enter an image url."
              />

              <FormInput
                name="stockQuantity"
                type="number"
                label="Stock Quantity"
                placeholder="Enter remain stock of the product"
              />

              <FormSelect
                name="isActive"
                label="Status"
                options={[
                  { label: "Active", value: true },
                  { label: "Passive", value: false },
                ]}
              />
            </div>
          </div>
          <div className="w-full flex justify-end mt-4">
            <Button
              type="submit"
              variant="outline"
              className="w-fit bg-blue-500 text-white"
            >
              Create
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
