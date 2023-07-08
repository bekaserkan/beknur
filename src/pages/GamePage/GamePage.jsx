import React from "react";
import { useSelector } from "react-redux";
import ProductPage from "../../components/ProductPage/ProductPage";

const GamePage = () => {
  const product = useSelector((state) => state.product.currentProduct);

  return <ProductPage product={product} />;
};

export default GamePage;
