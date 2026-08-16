import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";

export default function Header() {
  const { logout } = useAuthStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const {cart}= useCartStore()

  return (
    <header className="px-8 py-6 flex justify-between items-center border-b border-b-yellow-200 shadow-2xs">
      <div className="logo text-yellow-500 font-bold italic text-3xl">
        Koki Store
      </div>
      <div className="md:flex gap-4 font-semibold hidden">
        <Link to="/" className="hover:text-yellow-500 transition duration-300">
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-yellow-500 transition duration-300"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-yellow-500 transition duration-300"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative text-xl hover:text-blue-600 transition">
          {cart.length > 0 && (
            <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full flex justify-center items-center text-white bg-red-600 ">
            <span className="text-xs font-bold">{cart.length}</span>

            </div>
          )}
          🛒
        </Link>

        <div className="hidden md:block relative">
          <button
            onClick={() =>
              isProfileOpen ? setIsProfileOpen(false) : setIsProfileOpen(true)
            }
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5953/5953496.png"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-md shadow-md transition py-2 z-50">
              <Link
                to="/setting"
                className="block w-full px-2 py-1 hover:bg-gray-100"
              >
                Setting
              </Link>
              <span
                onClick={logout}
                className="block w-full px-2 py-1 hover:bg-gray-100"
              >
                Logout
              </span>
            </div>
          )}
        </div>

        <div className="md:hidden relative">
          <button
            className="text-gray-800 text-3xl"
            onClick={() =>
              isProfileOpen ? setIsProfileOpen(false) : setIsProfileOpen(true)
            }
          >
            ≡
          </button>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-md shadow-md transition cursor-pointer py-2 z-50">
              <Link to="/" className="block w-full px-2 py-1 hover:bg-gray-100">
                Home
              </Link>
              <Link
                to="/about"
                className="block w-full px-2 py-1 hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block w-full px-2 py-1 hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
