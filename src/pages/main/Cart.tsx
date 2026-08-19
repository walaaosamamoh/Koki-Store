import { Link } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const total = cart
    .reduce((total, item) => total + item.price * item.qty, 0)
    .toFixed(2);

  return (
    <div>
      <div className="min-h-screen bg-gray-50 py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>

          {cart.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-600 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="border-b border-gray-200 p-6 flex gap-6 items-start hover:bg-gray-50 transition"
                    >
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-600 text-sm mb-1">Price</p>
                            <p className="text-xl font-bold text-yellow-600">
                              ${item.price}
                            </p>
                          </div>

                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-semibold"
                                disabled={item.qty === 1}
                              >
                                -
                              </button>
                              <span className="font-semibold text-gray-900 min-w-8 text-center">
                                {item.qty}
                              </span>
                              <button
                                onClick={() => increaseQuantity(item.id)}
                                disabled={item.qty >= item.stock}
                                className="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                +
                              </button>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="red"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-trash2-icon lucide-trash-2 cursor-pointer"
                              >
                                <path d="M10 11v6" />
                                <path d="M14 11v6" />
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                <path d="M3 6h18" />
                                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to="/"
                  className="inline-block mt-6 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
                >
                  ← Continue Shopping
                </Link>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Total
                  </h2>

                  <div className="flex justify-between items-center mb-6">
                    <p className="text-2xl font-bold text-yellow-600">
                      ${total}
                    </p>
                  </div>

                  <Link  to={'/checkout'}
                  className="block w-full px-6 py-3 text-center bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold text-lg">
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
