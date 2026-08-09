import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <header className="px-8 py-6 flex justify-between items-center border-b border-b-yellow-200 shadow-2xs">
        <div className="logo text-yellow-500 font-bold italic text-3xl">
          Koki Store
        </div>
        <div className="flex gap-4 text-xl font-semibold">
          <Link to="/" className="hover:text-yellow-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-500 transition duration-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
        </div>
      </header>
      <main className="flex-1 px-8">
        <Outlet />
      </main>
      <footer className="bg-black px-8 py-6 text-center text-white">
        Website Footer
      </footer>
    </div>
  );
}

export default MainLayout;
