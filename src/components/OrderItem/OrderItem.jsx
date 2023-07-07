import React from "react";
import "./OrderItem.css";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/card/reducer";

const OrderItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(data.id));
  };

  return (
    <div className="order_item">
      <div className="img">
        <img src={data.image} />
      </div>
      <div className="wrapp">
        <p>{data.title}</p>
        <div className="price">{data.price} $ </div>
      </div>
      <BsTrash3 size={25} className="delete_icon" onClick={handleClick} />
    </div>
  );
};

export default OrderItem;
