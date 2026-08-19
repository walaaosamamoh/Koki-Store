import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

export default function Checkout() {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const total = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();

    console.log({
      name,
      phone,
      address,
      items: cart,
      total,
    });

    clearCart()

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">
          Your cart is empty
        </h1>

        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-lg"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-8">
          Checkout
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* CUSTOMER INFORMATION */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-semibold mb-6">
              Customer Information
            </h2>

            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-medium">
                Phone
              </label>

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Your phone number"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium">
                Address
              </label>

              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-yellow-500"
                placeholder="Your address"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
            >
              Place Order
            </button>
          </form>

          {/* ORDER SUMMARY */}
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-medium">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {item.qty} × ${item.price}
                    </p>
                  </div>

                  <span className="font-semibold">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-6 pt-4 border-t">
              <span className="text-lg font-semibold">
                Total
              </span>

              <span className="text-xl font-bold text-yellow-600">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}