import { Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/auth";
import { useEffect } from "react";
import { useWsStore } from "../store/websocket";

const ProtectedLayout = () => {
  const { isAuth } = useAuthStore();
  const navigate = useNavigate();
  const { connectWebsocket, ws } = useWsStore();

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    } else if (!ws) {
      connectWebsocket();
    }
  }, [connectWebsocket, isAuth, navigate, ws]);

  return <Outlet />;
};
export default ProtectedLayout;
