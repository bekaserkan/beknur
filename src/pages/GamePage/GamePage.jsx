import React from "react";
import "./GamePage.css";
import { useSelector } from "react-redux";
import GameBay from "../../components/GameBay/GameBay";
import { useNavigate } from "react-router-dom";
import { MdPriceChange } from "react-icons/md";

const GamePage = () => {
  const product = useSelector((state) => state.product.currentProduct);
  const navigate = useNavigate();

  return product ? (
    <div className="game_page">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="details">
        <div className="price">
          <MdPriceChange color="#9717ac" size={35} />
          <p>{product.price} p</p>
        </div>
        <div className="rate">{product.rating.rate}</div>
      </div>
      <div className="title">
        <h1>{product.title}</h1>
      </div>
      <div className="about">
        <p>{product.description}</p>
      </div>
      <div className="category">
        <p>{product.category}</p>
      </div>
      <div className="count">
        <p>{product.rating.count} шт в наличии </p>
      </div>
      <div className="btn">
        <GameBay product={product} />
      </div>
    </div>
  ) : (
    navigate("/ShopHome")
  );
};

export default GamePage;
