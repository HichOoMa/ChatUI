import { Outlet } from 'react-router-dom';

const CenterLayout = () => {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default CenterLayout;
