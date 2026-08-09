import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import { useState } from "react"

function DashboardLayout() {
  const [isSidebarOpen,setIsSidebarOpen]= useState(false)
  const [isCollapesed,setIsCollapesed]= useState(false)

  const toggleSidebar=()=>{
      if (window.innerWidth < 768) {
      // Mobile
      setIsSidebarOpen(!isSidebarOpen)
    } else {
      // Desktop
      setIsCollapesed(!isCollapesed)
    }
    }
  return (
     <div className="h-screen flex">
     <Sidebar
      isSidebarOpen={isSidebarOpen}
      isCollapesed={isCollapesed}
      onClose={()=>setIsSidebarOpen(false)}
      onToggle={setIsCollapesed}
    />

    {isSidebarOpen && (
      <div
      className="fixed inset-0 bg-black/50 z-40 md:hidden"
      onClick={()=>{setIsSidebarOpen(false)}}
    ></div>
    )}

    
    <div className="flex flex-col flex-1 overflow-y-auto">
      {/*  header  */}
      <div className="flex items-center justify-between p-5 bg-white border-b border-gray-200">
        <div className="flex items-center px-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none focus:text-gray-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="h-screen overflow-auto bg-yellow-50">
        <Outlet/>
    </div>
    </div>
    
     </div>
  )
}

export default DashboardLayout