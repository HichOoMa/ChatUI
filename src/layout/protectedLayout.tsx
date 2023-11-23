import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { useEffect } from 'react';

const ProtectedLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('isAuthentificated', isAuth);
    if (!isAuth) {
      navigate('/');
    }
  });

  return <Outlet />;
};
export default ProtectedLayout;
