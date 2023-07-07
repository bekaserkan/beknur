import React from "react";
import "./ProductPage.css";
import GameBay from "../../components/GameBay/GameBay";
import { GiTwoCoins } from "react-icons/gi";
import { LuSubtitles } from "react-icons/lu";
import { ImFileText } from "react-icons/im";
import { BiCategory } from "react-icons/bi";
import { MdProductionQuantityLimits } from "react-icons/md";

const ProductPage = ({ product }) => {
  return (
    <div className="game_page">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="details">
        <div className="case">
          <GiTwoCoins color="#9717ac" size={35} />
          <p>Цена:</p>
          <p>{product.price} p</p>
        </div>
        <div className="rate">{product.rating.rate}</div>
      </div>
      <div className="title">
        <div className="case">
          <LuSubtitles color="#9717ac" size={35} />
          <p>Название</p>
        </div>
        <h1 className="m">{product.title}</h1>
      </div>
      <div className="about">
        <div className="case">
          <ImFileText color="#9717ac" size={35} />
          <p>О продукте</p>
        </div>
        <p className="m">{product.description}</p>
      </div>
      <div className="category">
        <div className="case">
          <BiCategory color="#9717ac" size={35} />
          <p>Категории</p>
        </div>
        <p className="m">{product.category}</p>
      </div>
      <div className="count">
        <div className="case">
          <MdProductionQuantityLimits color="#9717ac" size={35} />
          <p>В наличии </p>
        </div>
        <p className="m">{product.rating.count} шт </p>
      </div>
      <div className="btn">
        <GameBay product={product} />
      </div>
    </div>
  );
};

export default ProductPage;
