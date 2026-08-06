import { Link, Outlet } from "react-router-dom"

function DashboardLayout() {
  return (
    <div className="h-screen bg-yellow-50 flex">
      <aside className="w-50 bg-gray-200 py-4 px-2">
        <h3 className="text-xl font-semibold">Dashboard</h3>

        <Link to="/dashboard">Home</Link>
        <br />

        <Link to="/dashboard/categories">Categories</Link>
        <br />

        <Link to="/dashboard/products">Products</Link>
      </aside>

      <main className="p-5">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout