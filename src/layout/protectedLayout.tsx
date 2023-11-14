import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../store/init';
import { useEffect } from 'react';

const ProtectedLayout = () => {
  const isAuthorized = useAuth((state) => state.isAuthentificated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/');
    }
  });
  return <Outlet />;
};
export default ProtectedLayout;
