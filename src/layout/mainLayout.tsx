import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

const MainLayout = () => {
  
  return (
    <>
      <div className="fixed top-0 min-w-full z-10">
        <Navbar />
      </div>
      <div className="flex mt-16">
        <Sidebar />
        <div className="ml-60 h-[calc(100vh-4rem)] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
