import React from "react";
import "./CardItem.css";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/card/reducer";

const CardItem = ({ title, price, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="card_item">
      <div className="title">
        <span>{title}</span>
        <TiDeleteOutline
          size={25}
          className="delete_icon"
          onClick={handleClick}
        />
      </div>
      <div className="price">{price} руб.</div>
    </div>
  );
};

export default CardItem;
