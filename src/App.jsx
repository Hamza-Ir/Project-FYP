import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import Camera01 from "./pages/Camera01";
import Camera02 from "./pages/Camera02";
import Training from "./pages/Training";
import AllCameras from "./pages/AllCameras";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="all-cameras" element={<AllCameras />} />
            <Route path="camera-1" element={<Camera01 />} />
            <Route path="camera-2" element={<Camera02 />} />
            <Route path="training" element={<Training />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
