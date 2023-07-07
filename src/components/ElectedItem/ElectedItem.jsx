import React from "react";
import "./ElectedItem.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../store/products/reducer";
import GameBay from "../GameBay/GameBay";
import { VscHeartFilled } from "react-icons/vsc";
import { TfiEye } from "react-icons/tfi";
import { Alert } from "../UI/sweetAlert/sweetAlert";
import {
  deleteItemFromProduct,
  setItemInProduct,
} from "../../store/card/reducer";

const ElectedItem = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.cart.itemsInProduct);
  const isItemInCart = products.some((item) => item.id === product.id);

  const handleClick = () => {
    dispatch(setCurrentProduct(product));
    navigate(`/ShopHome/api/${product.title}`);
  };

  const handleClickElected = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromProduct(product.id));
    } else {
      dispatch(setItemInProduct(product));
      Alert("success", "Добавлено!");
    }
  };
  
  return (
    <div className="elected_item">
      <div className="details">
        <div className="image">
          <img src={product.image} />
        </div>
        <div className="save">
          <div className="content">
            <div className="title">
              <p>
                <span>Название:</span> {product.title}
              </p>
            </div>
            <div className="category">
              <p className="cate">
                <span>Категория:</span> {product.category}
              </p>
            </div>
            <div className="price">
              <p>
                <span>Цена:</span> {product.price} $
              </p>
            </div>
          </div>
          <div className="add">
            <div onClick={handleClick} className="eye">
              <TfiEye size={35} style={{ color: "#9717ac" }} />
              <p style={{ marginLeft: "10px" }}>Посмотреть</p>
            </div>
            <div onClick={handleClickElected} className="button">
              <VscHeartFilled
                style={{
                  color: "#9717AC",
                  cursor: "pointer",
                }}
                size={35}
              />
              <p style={{ marginLeft: "10px" }}> Удалить из любимых </p>
            </div>
          </div>
          <GameBay product={product} key={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ElectedItem;
