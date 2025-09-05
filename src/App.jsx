import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderBody from "./components/HeaderBody";
import DashboardHome from "./components/DashboardHome";
import BrandAssests from "./components/BrandAssests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard" element={<HeaderBody />}>
          <Route index element={<DashboardHome />} />      
          <Route path="brandassests" element={<BrandAssests />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
