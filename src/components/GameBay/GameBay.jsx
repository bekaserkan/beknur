import React from "react";
import "./GameBay.css";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, setItemInCart } from "../../store/card/reducer";
import { Alert } from "../UI/sweetAlert/sweetAlert";

const GameBay = ({ product }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const isItemInCart = items.some((item) => item.id === product.id);

  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemFromCart(product.id));
    } else {
      dispatch(setItemInCart(product));
      Alert("success", "Карзина пополнилась !");
    }
  };
  
  return (
    <div className="game_bay">
      <Button
        type={isItemInCart ? "secondary" : "primary"}
        onClick={handleClick}
      >
        {isItemInCart ? "Убрать из карзины" : "В карзину"}
      </Button>
    </div>
  );
};

export default GameBay;
