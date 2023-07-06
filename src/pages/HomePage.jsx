import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "./Home/Home";
import NotFaundPage from "./NotFaundPage/NotFaundPage";
import ShopHome from "./ShopHome/ShopHome";

const HomePage = () => {
  const navigate = useNavigate();

  const isFunctionExecuted = localStorage.getItem("data_");

  if (!isFunctionExecuted) {
    navigate("/login");
    localStorage.setItem("data_", true);
  }

  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="ShopHome/*" element={<ShopHome />} />
          <Route path="*" element={<NotFaundPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
