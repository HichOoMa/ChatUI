import { Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import CenterLayout from './layout/center.layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CenterLayout />}>
          <Route path="/register" element={<Register />} />
          // add login route
        </Route>
      </Routes>
      {/* <Routes>
          <MainLayout>
            <Route path="/" element={<h1>Main Layout</h1>} />
          </MainLayout>
        </Routes> */}
    </>
  );
}

export default App;
