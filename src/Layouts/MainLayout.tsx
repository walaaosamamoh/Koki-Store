import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      <Header/>
      <main className="flex-1 overflow-auto px-8">
        <Outlet />
      </main>
      <footer className="shrink-0 bg-black px-8 py-6 text-center text-white">
        Koki Store
      </footer>
    </div>
  );
}

export default MainLayout;
