"use client";

import { useCart } from "./CartContext"; // Importing the CartContext
import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

const products = [
  { id: 1, name: "Product 1", price: "$29.99", image: "/Images/1.jpg" },
  { id: 2, name: "Product 2", price: "$49.99", image: "/Images/b1.jpg" },
  { id: 3, name: "Product 3", price: "$19.99", image: "/Images/d1.jpg" },
  { id: 4, name: "Product 4", price: "$99.99", image: "/Images/5.jpg" },
];

export default function HomePage() {
  const { addToCart } = useCart(); // Access addToCart function from context

  const handleAddToCart = (product: Product) => {
    addToCart(product); // Add the product to the cart
  };

  return (
    <div className="bg-[#f3f3f3] min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#131921] text-white p-10 text-center">
        <h1 className="text-4xl font-bold">Welcome to ClicknPICK</h1>
        <p className="mt-4 text-xl">
          Find the best deals on products you love!
        </p>
      </div>

      {/* Product Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src={product.image} // Use the correct product image
              alt={product.name}
              width={200}
              height={200}
              className="mx-auto"
            />
            <h2 className="mt-4 text-lg font-medium">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-yellow-400 text-black p-2 rounded-full mt-4 block w-full text-center"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
