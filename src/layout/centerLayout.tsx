import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const CenterLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();
  if (isAuth) {
    navigate('/chat');
  } else {
    return (
      <div className="w-[100%] h-[100vh] flex justify-center items-center">
        <Outlet />
      </div>
    );
  }
};

export default CenterLayout;
