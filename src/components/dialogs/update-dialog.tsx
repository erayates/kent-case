import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Product, productSchema } from "@/types/product";
import { DialogClose, DialogDescription } from "@radix-ui/react-dialog";
import { Pencil } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../form-elements/input";
import FormSelect from "../form-elements/select";
import { useProducts } from "@/hooks/use-products";

interface UpdateDialogProps {
  product: Product;
}

export function UpdateDialog({ product }: UpdateDialogProps) {
  const { updateProduct } = useProducts();

  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: product,
  });

  const onSubmit = async (values: z.infer<typeof productSchema>) => {
    await updateProduct.mutateAsync({
      id: product.id as string,
      product: values,
    });
  };

  const onDialogToggle = (open: boolean) => {
    if (!open) {
      form.reset(product);
    }
  };

  return (
    <Dialog onOpenChange={(open) => onDialogToggle(open)}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Pencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
          <DialogDescription className="text-xs text-zinc-500">
            Fill the form below to update associated product.
          </DialogDescription>
        </DialogHeader>
        <div>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row md:space-x-2 w-full mt-4">
                <div className="flex flex-col w-full md:w-1/2">
                  <FormInput
                    name="name"
                    label="Name"
                    placeholder="Product name"
                  />
                  <FormInput
                    name="description"
                    label="Description"
                    placeholder="Product description"
                  />
                  <FormInput
                    name="brand"
                    label="Brand"
                    placeholder="Brand name"
                  />

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
            </form>
          </FormProvider>
        </div>
        <DialogFooter>
          <DialogClose className="text-sm border border-zinc-100 rounded-lg px-4 py-2">
            Close
          </DialogClose>
          <Button
            type="submit"
            variant="outline"
            className="bg-blue-500 text-white"
            onClick={form.handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
