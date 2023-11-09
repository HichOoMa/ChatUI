import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div className="fixed top-0 min-w-full">
        <Navbar />
      </div>
      <div className="mt-16">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
