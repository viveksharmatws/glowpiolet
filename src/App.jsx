import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HeaderBody from "./components/HeaderBody";
import DashboardHome from "./components/DashboardHome";
import BrandAssests from "./components/BrandAssests";
import Templates from "./components/Templates";
import Downloads from "./components/Downloads";
import VoiceCloning from "./components/VoiceCloning";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard" element={<HeaderBody />}>
          <Route index element={<DashboardHome />} />      
          <Route path="brandassests" element={<BrandAssests />} /> 
          <Route path="templates" element={<Templates />} /> 
          <Route path="downloads" element={<Downloads />} /> 
          <Route path="voicecloning" element={<VoiceCloning />} /> 

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
