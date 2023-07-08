import React, { useEffect, useState } from "react";
import "./ProductsItem.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentProduct } from "../../store/products/reducer";
import GameBay from "../GameBay/GameBay";
import { VscHeart, VscHeartFilled } from "react-icons/vsc";
import { TfiEye } from "react-icons/tfi";
import { Alert } from "../UI/sweetAlert/sweetAlert";
import {
  deleteItemFromProduct,
  setItemInProduct,
} from "../../store/card/reducer";

const ProductsItem = ({ items }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const products = useSelector((state) => state.cart.itemsInProduct);
  const isItemInCart = products.some((el) => el.id === items.id);

  const handleClick = () => {
    dispatch(setCurrentProduct(items));
    navigate(`/ShopHome/api/${items.title}`);
  };

  useEffect(() => {
    if (isItemInCart) {
      setClick(true);
    }
  }, []);

  const handleClickElected = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromProduct(items.id));
      setClick(false);
    } else {
      dispatch(setItemInProduct(items));
      Alert("success", "Добавлено!");
      setClick(true);
    }
  };

  return (
    <div className="products_item">
      <div className="details">
          <div className="image">
            <img src={items.image} />
          </div>
        <div className="save">
          <div className="content_item">
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
                <span>Цена:</span> {items.price} $
              </p>
            </div>
          </div>
          <div className="add">
            <div onClick={handleClick} className="eye">
              <TfiEye size={35} style={{ color: "#9717ac" }} />
              <p style={{ marginLeft: "10px" }}>Посмотреть</p>
            </div>
            <div onClick={handleClickElected} className="button">
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
              <p style={{ marginLeft: "10px" }}> Добавить к любимым </p>
            </div>
          </div>
          <GameBay product={items} key={items.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductsItem;
