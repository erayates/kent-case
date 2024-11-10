import { DeleteDialog } from "@/components/dialogs/delete-dialog";
import { Product } from "@/types/product";
import React from "react";

interface ProductDetailsProps {
  product: Product;
  onDelete: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  onDelete,
}) => {
  return (
    <React.Fragment>
      <div className="w-full flex justify-end max-w-screen-md mx-auto mb-8">
        <DeleteDialog onDelete={onDelete} />
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-md mx-auto gap-8">
        <div className="space-y-4">
          <div className="relative w-full">
            <img
              src={product.imageUrl}
              alt="Product Image"
              className="object-cover rounded-lg w-full"
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
          </div>
          <p className="text-xl font-bold">₺ {product.price}</p>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
