import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductPage from "../../components/ProductPage/ProductPage";

const GamePage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const navigate = useNavigate();

  return product ? <ProductPage product={product} /> : navigate("/ShopHome");
};

export default GamePage;
