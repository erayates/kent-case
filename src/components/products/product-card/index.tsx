import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <Card>
      <div className="h-[200px] bg-zinc-800 rounded-t-lg">
        <img
          src={imageUrl}
          alt={name + "Thumbnail"}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle className="uppercase font-bold text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="grid place-items-center py-2 px-6 bg-zinc-800 rounded-br-lg rounded-tl-lg ml-auto text-white font-bold w-fit">
        <p className="h-full text-2xl">{price}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
