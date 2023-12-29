import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/register";
import CenterLayout from "./layout/centerLayout";
import MainLayout from "./layout/mainLayout";
import Messages from "./pages/messages";
import Login from "./pages/login";
import ProtectedLayout from "./layout/protectedLayout";
import PublicLayout from "./layout/publicLayout";
import { useEffect } from "react";
import { useProfileStore } from "./store/profile";
import { useAuthStore } from "./store/auth";

function App() {
  const navigate = useNavigate();
  const { friends, fetchFriendList } = useProfileStore();
  const { isAuth, checkToken } = useAuthStore();
  useEffect(() => {
    checkToken();
    if (isAuth) {
      if (!friends) {
        fetchFriendList();
      } else if (friends.length > 0) {
        navigate(`/chat/${friends[0]._id}`);
      }
    }
  }, []);
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route element={<CenterLayout />}>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/chat/:id" element={<Messages />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
