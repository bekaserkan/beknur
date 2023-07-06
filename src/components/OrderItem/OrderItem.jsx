import React from "react";
import "./OrderItem.css";
import { useDispatch } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteItemFromCart } from "../../store/card/reducer";

const OrderItem = ({ game }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(game.id));
  };

  return (
    <div className="order_item">
      <div className="title">
        <p>{game.title}</p>
      </div>
      <div className="price">
        <p>{game.price} руб. </p>
        <TiDeleteOutline
          size={25}
          className="delete_icon"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default OrderItem;
