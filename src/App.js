import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import NotFaundPage from "./pages/NotFaundPage/NotFaundPage";

function App() {
  return (
    <div className="app_comp">
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFaundPage />} />
      </Routes>
    </div>
  );
}

export default App;
