import React, { useState } from "react";
import "./ProductsItem.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../store/products/reducer";
import GameBay from "../GameBay/GameBay";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { TfiEye } from "react-icons/tfi";
import { Alert } from "../UI/sweetAlert/sweetAlert";

const ProductsItem = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    dispatch(setCurrentProduct(items));
    navigate(`/ShopHome/api/${items.title}`);
  };

  return (
    <div className="products_item">
      <div className="details">
        <div className="image">
          <img src={items.image} />
        </div>
        <div className="save">
          <div className="content">
            <div className="title">
              <p>
                <span>Название:</span> {items.title}
              </p>
            </div>
            <div className="category">
              <p className="cate">
                <span>Категория:</span> {items.category}
              </p>
            </div>
            <div className="price">
              <p>
                <span>Цена:</span> {items.price} p
              </p>
            </div>
          </div>
          <div className="add">
            <div onClick={handleClick} className="eye">
              <TfiEye size={35} style={{ color: "#9717ac" }} />
              <p style={{ marginLeft: "10px" }}>Посмотреть</p>
            </div>
            <div
              onClick={() =>
                setClick(!click) || click ? "" : Alert("success", "Добавлено!")
              }
              className="button"
            >
              <VscHeart
                style={{
                  color: "#9717AC",
                  display: `${click ? "none" : "block"}`,
                  cursor: "pointer",
                }}
                size={35}
              />
              <VscHeartFilled
                style={{
                  color: "#9717AC",
                  display: `${click ? "block" : "none"}`,
                  cursor: "pointer",
                }}
                size={35}
              />
              <p style={{ marginLeft: "10px" }}>Добавить в избраные </p>
            </div>
          </div>
          <GameBay product={items} key={items.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
