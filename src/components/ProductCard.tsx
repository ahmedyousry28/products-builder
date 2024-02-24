import Image from "./Image";
import Button from "./Button";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utiles/functions";

interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {
  const { title, imageUrl, description, price, category } = product;
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-md p-2 flex flex-col space-y-3">
      <Image
        imageUrl={imageUrl}
        alt="fsgfdsg"
        className="rounded-md w-full h-52 lg:object-contain"
      ></Image>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-500 break-words">
        {textSlicer(description, 70)}
      </p>
      <div className="flex items-center my-5 space-x-2">
        <span className="w-5 h-5 bg-blue-700 rounded-full"></span>
        <span className="w-5 h-5 bg-red-700 rounded-full"></span>
        <span className="w-5 h-5 bg-yellow-700  rounded-full"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
        <Image
          imageUrl={category.imageUrl}
          alt="fsgfdsg"
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between space-x-3  mt-5">
        <Button>EDIT</Button>
        <Button
          className="bg-red-500"
          width="w-full"
          onClick={() => alert("hello")}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
