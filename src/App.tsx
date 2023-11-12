import { Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import CenterLayout from './layout/center.layout';
import MainLayout from './layout/main.layout';
import Messages from './pages/messages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<CenterLayout />}>
          <Route path="/register" element={<Register />} />
          // add login route
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route path="/chat" element={<Messages />} />
        </Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
