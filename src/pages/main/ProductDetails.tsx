import { useParams } from "react-router-dom"
import { useGetProduct } from "../../hooks/products/useGetProduct"
import CartSvg from "../../components/icons/CartSvg"
import { useEffect, useState } from "react"
import PlusSvg from "../../components/icons/PlusSvg"
import MinusSvg from "../../components/icons/MinusSvg"
import { useCartStore } from "../../store/cartStore"
import SimilarProducts from "../../components/SimilarProducts"

export default function ProductDetails() {
    const {id} = useParams()
    const {data:product, isLoading, isError} = useGetProduct(Number(id))

    const addToCart = useCartStore((state)=>state.addToCart)

    const [added, setAdded]= useState(false)
    const [onStock, setOnStock] = useState(0)
    const [count, setCount] = useState(1)

    useEffect(() => {
    if (product) {
      setOnStock(product.stock);
    }
  }, [product]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to load product</div>;
  }

    if(!product){
      return null
    }

    const totalPrice = product.price * count;

    const decreaseQty=() =>{
      if (count > 1) {
       setCount((prev)=> prev - 1)
       setOnStock((prev)=> prev + 1)
      }
    }

    const increaseQty=()=> {
      if (count < product?.stock) {
        setCount((prev)=> prev + 1)
        setOnStock((prev)=> prev - 1)
      }
    }

    const handleAdded=() =>{
      setAdded(true)
      
      setTimeout(() => {
        setAdded(false)
      }, 1000)
    }

    const handleAddToCart=() =>{
      addToCart(product, count)
      setCount(1)
      if (onStock > 0) {
      setOnStock((prev) => prev - 1);
    }
      handleAdded()
    }

  return (
    <div className="p-4 md:p-8">
    <div
      className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mb-12 mx-auto pb-4 md:pb-0 gap-2 md:gap-12 md:h-125 bg-white rounded-2xl overflow-hidden"
    >
      <div className="w-full h-full overflow-hidden">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover block" />
      </div>

      <div className="flex flex-col justify-center gap-2 md:gap-6 h-full px-4 md:px-6">
        <div>
          <h1 className="font-bold text-xl md:text-3xl text-gray-900 mb-2">{ product.title }</h1>
          <p className="text-gray-600 text-sm md:text-base">{ product.description }</p>
        </div>

        <span className="font-semibold text-gray-800 text-sm md:text-base">
          In Stock: 
          {onStock > 0 ? (<span className="text-lg text-emerald-600 font-bold">{ onStock }</span>) : (<span className="text-red-500">sold out</span>)}
        </span>

        <div className="flex items-center justify-between border-t border-b border-gray-100 py-4 my-2">
          <div>
            <span className="text-xs text-gray-400 block mb-0.5">Price</span>
            <span className="text-xl md:text-3xl text-primary font-bold">${ totalPrice }</span>
          </div>

          <div
            className="flex justify-center items-center p-2 bg-gray-50 w-fit rounded-xl border border-gray-200"
          >
            <button
              onClick={decreaseQty}
              className="p-1.5 hover:bg-white rounded-lg active:scale-90 transition shadow-sm"
              disabled={count === 1}
            >
              <MinusSvg />
            </button>
            <span className="mx-4 text-base font-semibold text-gray-800">{ count }</span>
            <button
              onClick={increaseQty}
              className="p-1.5 hover:bg-white rounded-lg active:scale-90 transition shadow-sm"
              disabled={count >= product.stock}
            >
              <PlusSvg />
            </button>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          className={`
            w-full text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3.5 transition-all duration-300 active:scale-[0.99] font-semibold cursor-pointer shadow-md rounded-xl
            ${added ? 'bg-green-700 hover:bg-green-900' : 'bg-yellow-500 hover:bg-yellow-600'}
            ${product.stock===0? 'opacity-50 ' : ''}
          `}
          disabled={product.stock === 0}
        >
          {!added ? (
            <div className="flex items-center justify-center gap-2">
            <CartSvg />
            Add To Cart
          </div>
          ) : (<div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>

            Added
          </div>)}
        </button>
      </div>
    </div>
    <hr className="border-gray-200" />

    <SimilarProducts />
  </div>
  )
}
