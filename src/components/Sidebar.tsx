import { NavLink } from "react-router-dom"
import DashboardIcon from "./icons/DashboardIcon"
import CategoriesIcon from "./icons/CategoriesIcon"
import ProductsIcon from "./icons/ProductsIcon"

type sidebarProps = {
    isCollapesed: boolean,
    isSidebarOpen: boolean,
    onClose: ()=>void,
    onToggle: (value:boolean)=>void
}

export default function Sidebar({isCollapesed,isSidebarOpen,onClose,onToggle}:sidebarProps) {
    const navItems= [
        {
          name: 'Dashboard',
          to: '/dashboard',
          icon: DashboardIcon,
        },
        {
          name: 'Categories',
          to:  '/categories',
          icon: CategoriesIcon,
        },
        {
          name: 'Products',
          to: '/products',
          icon: ProductsIcon,
        },
      ]
  return (
     <div
    className={`md:flex flex-col bg-gray-800 transition-all duration-500 fixed md:static top-0 left-0 h-full z-50
        ${isCollapesed ? 'md:w-20' : 'md:w-64'}
      ${isSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'}
       md:translate-x-0`}
  >
    <div className="flex items-center justify-center h-16 bg-gray-900">
      <span className="text-white font-bold uppercase">Koki</span>
    </div>
    <div
      className="flex flex-col flex-1 overflow-y-auto"
      onMouseEnter={()=>onToggle(false)}
      onMouseLeave={()=>onToggle(true)}
    >
      <nav className="flex-1 px-2 py-4 bg-gray-800">
        {navItems.map((item)=>(
        <NavLink
          key={item.name}
          to={item.to}
          className={`flex items-center py-4 px-4 text-gray-100 hover:bg-gray-700 ${isCollapesed ? 'md:justify-center' : 'px-4'}`}
          active-classname="bg-gray-700"
          onClick={onClose}
        >
          <item.icon/>
          <span className={`ml-2 ${isCollapesed ? 'md:hidden' : ''}`}>{ item.name }</span>
        </NavLink>
        ))}
        
      </nav>
    </div>
  </div>
  )
}
