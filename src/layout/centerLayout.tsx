import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useEffect } from "react";

const CenterLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/chat");
    }
  }, []);

  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default CenterLayout;
