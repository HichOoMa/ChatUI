import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useEffect } from "react";
import { useWsStore } from "../store/websocket";

const PublicLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();
  const { connectWebsocket } = useWsStore();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    } else {
      connectWebsocket();
    }
  }, []);

  return <Outlet />;
};
export default PublicLayout;
