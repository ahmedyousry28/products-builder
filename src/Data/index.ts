import { v4 as uuidv4 } from "uuid";
import { IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuidv4(),
    title: "Sleek Sports Car",
    description:
      "Experience the thrill of speed with this sleek sports car. Its aerodynamic design and powerful engine make it perfect for racing enthusiasts.Experience the thrill of speed with this sleek sports car. Its aerodynamic design and powerful engine make it perfect for racing enthusiasts",
    imageUrl:
      "https://www.carscoops.com/wp-content/uploads/2022/11/Buick-Sketch-a.jpg",
    price: "$5000000",
    colors: ["Red", "Black", "White"],
    category: {
      name: "cars",
      imageUrl:
        "https://th-thumbnailer.cdn-si-edu.com/jGiKwJRW8GJW3ewhxgtL02abk3U=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/47/ba/47ba2e0e-daad-417f-a217-65b02e0a4518/chameleon_mclaren_p1_15449273710.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Casual T-Shirt",
    description:
      "Stay comfortable and stylish with this casual t-shirt. Made from soft and breathable fabric, it's perfect for everyday wear.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaru1eZKnDSKdDxOFeyRS6-5PozbEsRJSAQ&usqp=CAU",
    price: "$20",
    colors: ["Blue", "Gray", "Black"],
    category: {
      name: "Clothes",
      imageUrl:
        "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Casual T-Shirt",
    description:
      "Stay comfortable and stylish with this casual t-shirt. Made from soft and breathable fabric, it's perfect for everyday wear.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSStTioXHjuGRSQ4TgbHF99ECsJ2baYv8j08Q&usqp=CAU",
    price: "$20",
    colors: ["Blue", "Gray", "Black"],
    category: {
      name: "Clothes",
      imageUrl:
        "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Family SUV",
    description:
      "Take your family on unforgettable journeys with this spacious SUV. It offers comfort, safety, and ample storage space for all your adventures.",
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/large-56035-2024palisade-651da160143e1.jpg?crop=0.670xw:0.707xh;0.165xw,0.293xh&resize=980:*",
    price: "$35,000",
    colors: ["Silver", "White", "Black"],
    category: {
      name: "Cars",
      imageUrl:
        "https://th-thumbnailer.cdn-si-edu.com/jGiKwJRW8GJW3ewhxgtL02abk3U=/fit-in/1072x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/47/ba/47ba2e0e-daad-417f-a217-65b02e0a4518/chameleon_mclaren_p1_15449273710.jpg",
    },
  },
  {
    id: uuidv4(),
    title: "Epic Fantasy Adventure",
    description:
      "Embark on an epic quest in this fantasy adventure game. Explore a vast and immersive world, battle fearsome creatures, and uncover ancient secrets.",
    imageUrl:
      "https://m.media-amazon.com/images/I/71AcT1snSwL._AC_UF1000,1000_QL80_.jpg",
    price: "$60",
    colors: [],
    category: {
      name: "Games",
      imageUrl:
        "https://store-images.microsoft.com/image/apps.2470.9007199266251536.3e975113-070f-4e76-af66-34fcd440399d.23c1b1a4-bfe3-44dc-83f0-3692e2e5a8f8?mode=scale&q=90&h=200&w=200&background=%23000000",
    },
  },
];
