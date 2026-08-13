import { useNavigate } from "react-router-dom";
import type { product } from "../types/products";
import CartSvg from "./icons/CartSvg";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

type CardProps = {
  product: product;
};

export default function Card({ product }: CardProps) {
  const navigate = useNavigate();

  const addToCart = useCartStore((state)=> state.addToCart)

  const [addedProductId, setAddedProductId] = useState<number | null>( null);

  const handleAddToCart = (prod:product) => {
    addToCart(prod)
    setAddedProductId(prod.id);
    setTimeout(() => {
      setAddedProductId(null);
    }, 1000);
  };

  return (
    <div>
      <div
        onClick={() => navigate(`/product-details/${product.id}`)}
        className="h-95 w-full bg-white shadow-md rounded-lg overflow-hidden hover:scale-102 transition-transform duration-500 transform-gpu will-change-transform"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[80%] object-cover"
        />
        {/*  info  */}
        <div className="p-2">
          <h3>{product.title}</h3>
          <div className="flex justify-between items-center">
            <p className="text-primary text-xl font-semibold">
              ${product.price}
            </p>
            {product.stock > 0 ? (
              <div onClick={(e) => {e.stopPropagation(); handleAddToCart(product)}}>
                {addedProductId === product.id ? (
                  <button
                    className="flex items-center justify-center bg-green-400 shadow-md rounded-full p-2"
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-5 text-green-800"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </button>
                ) : (
                  <button
                    className="flex items-center justify-center bg-yellow-500 shadow-md rounded-full p-2"
                  >
                    <CartSvg />
                  </button>
                )}
              </div>
            ) : <div className="text-red-500 text-sm font-semibold">
              sold out
            </div>}
            
          </div>
        </div>
      </div>
    </div>
  );
}
