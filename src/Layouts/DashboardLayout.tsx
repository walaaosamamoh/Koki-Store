import { Link, Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useEffect, useRef, useState } from "react"
import { useAuthStore } from "../store/authStore"

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isCollapesed, setIsCollapesed] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const { logout } = useAuthStore()
  const profileRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      setIsCollapesed(!isCollapesed)
    }
  }

  return (
    <div className="h-screen flex">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isCollapesed={isCollapesed}
        onClose={() => setIsSidebarOpen(false)}
        onToggle={setIsCollapesed}
      />

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/*  header  */}
        <div className="flex items-center justify-between p-5 bg-white border-b border-gray-200">
          <div className="flex items-center px-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 focus:outline-none focus:text-gray-700 cursor-pointer"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen((prev) => !prev)}
              type="button"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/5953/5953496.png"
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded-md shadow-md transition py-2 z-50">
                <Link
                  to=""
                  className="block w-full px-2 py-1 hover:bg-gray-100"
                >
                  Visit Website
                </Link>
                <span
                  onClick={logout}
                  className="block w-full px-2 py-1 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="h-screen overflow-auto bg-yellow-50">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout