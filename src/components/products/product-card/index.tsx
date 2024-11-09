import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ProductCard() {
  return (
    <Card>
      <div className="h-[200px] bg-zinc-800 rounded-t-lg">
        <img
          src="https://placehold.co/600x400/EEE/31343C"
          alt="Product Image"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardHeader className="p-6">
        <CardTitle className="uppercase font-bold text-xl">
          NIKE AIR DUNK
        </CardTitle>
        <CardDescription>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
          aliquid architecto neque ab velit reprehenderit soluta fuga. Impedit
          nihil, error libero maxime corrupti totam aspernatur placeat quas
          asperiores eos obcaecati?
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="grid place-items-center py-2 px-6 bg-zinc-800 rounded-br-lg rounded-tl-lg ml-auto text-white font-bold w-fit">
        <p className="h-full text-2xl">₺7500</p>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
