import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 min-w-full z-10">
        <Navbar />
      </div>
      <div className="flex mt-16">
        <Sidebar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
