import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import CartSvg from "./icons/CartSvg";
import { useGetProducts } from "../hooks/products/useGetProducts";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import type { product } from "../types/products";

export default function SimilarProducts(currentProduct:product) {
  const { data: products, isLoading, isError } = useGetProducts();
  const navigate = useNavigate();

  const addToCart = useCartStore((state) => state.addToCart);

  const [addedProductId, setAddedProductId] = useState<number | null>(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load products</div>;
  }

  const similarProducts = products?.filter(
    (product)=> product.categoryId === currentProduct.categoryId && product.id !== currentProduct.id
  )

  const handleAddToCart = (prod: product) => {
    addToCart(prod, 1);
    setAddedProductId(prod.id);

    setTimeout(() => {
      setAddedProductId(null);
    }, 1000);
  };

  return (
    <div>
      <h2 className="font-semibold text-lg p-4 md:text-2xl md:py-8">
        Similar Products
      </h2>
      <Swiper
        slidesPerView={1.5}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={20}
        className="mySwiper"
      >
        {similarProducts?.map((product) => (
          <SwiperSlide key={product.id} className="p-1">
            <div
              onClick={() => navigate(`/product-details/${product.id}`)}
              className="h-85 w-full bg-white overflow-hidden shadow-md rounded-lg"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[75%] object-cover"
              />
              {/* info  */}
              <div className="p-2">
                <h3>{product.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-primary text-xl font-semibold">
                    ${product.price}
                  </p>
                  {product.stock > 0 ? (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                      }}
                    >
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
                        <button className="flex items-center justify-center bg-yellow-500 shadow-md rounded-full p-2">
                          <CartSvg />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="text-red-500 text-sm font-semibold">
                      Sold out
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
