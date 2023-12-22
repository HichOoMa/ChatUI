import { Route, Routes } from "react-router-dom";
import Register from "./pages/register";
import CenterLayout from "./layout/centerLayout";
import MainLayout from "./layout/mainLayout";
import Messages from "./pages/messages";
import Login from "./pages/login";
import ProtectedLayout from "./layout/protectedLayout";
import PublicLayout from "./layout/protectedLayout";

function App() {
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
            <Route path="/chat" element={<Messages />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
