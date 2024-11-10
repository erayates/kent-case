import { DeleteDialog } from "@/components/dialogs/delete-dialog";
import { UpdateDialog } from "@/components/dialogs/update-dialog";
import { cn } from "@/lib/utils";
import { Product } from "@/types/product";
import { create } from "domain";
import React from "react";

interface ProductDetailsProps {
  product: Product;
  onDelete: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onDelete,
}) => {
  const createdDate = new Date(product.createdAt as string);

  return (
    <React.Fragment>
      <div className="w-full flex justify-end max-w-screen-md mx-auto mb-8 space-x-2">
        <UpdateDialog product={product} />
        <DeleteDialog onDelete={onDelete} />
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-md mx-auto gap-8">
        <div className="space-y-4">
          <div className="relative min-w-[320px] w-full lg:w-[400px] lg:max-w-[400px]">
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="relative">
                <img
                  src={`https://placehold.co/150x150/EEE/31343C`}
                  alt={`Product thumbnail ${i + 1}`}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-zinc-500 font-semibold">{product.brand}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs">
                {createdDate.getDay() +
                  "/" +
                  createdDate.getMonth() +
                  "/" +
                  createdDate.getFullYear()}
              </p>
              <p
                className={cn(
                  "border border-gray-400 rounded-xl text-white font-semibold px-2 text-xs",
                  product.isActive ? "bg-green-500" : "bg-red-500"
                )}
              >
                {product.isActive ? "Active" : "Passive"}
              </p>
            </div>
          </div>
          <p className="text-xl font-bold">₺ {product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          <p className="font-semibold">Stock: {product.stockQuantity}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
