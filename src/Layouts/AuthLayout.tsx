import { Outlet } from "react-router-dom"

function AuthLayout() {
  return (
    <div className="h-screen bg-yellow-50">
        <Outlet/>
    </div>
  )
}

export default AuthLayout