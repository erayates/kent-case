import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <Card className="h-full relative">
      <div className="h-[200px] bg-zinc-800 rounded-t-lg">
        <img
          src={imageUrl}
          alt={name + "Thumbnail"}
          className="w-full h-full object-cover object-center rounded-t-lg"
        />
      </div>

      <CardContent className="p-6 mb-12">
        <CardTitle className="uppercase font-bold text-xl">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="grid absolute bg-slate-700 bottom-0 right-0 place-items-center py-2 px-6 rounded-br-lg rounded-tl-lg ml-auto text-white font-bold w-fit">
        <p className="h-full text-2xl ">₺ {price}</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
