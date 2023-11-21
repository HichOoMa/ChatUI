import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { useEffect } from 'react';

const ProtectedLayout = () => {
  const isAuthorized = useAuthStore((state) => state.isAuthentificated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/');
    }
  });
  return <Outlet />;
};
export default ProtectedLayout;
