import React from "react";
import "./CardItem.css";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/card/reducer";

const CardItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteItemFromCart(product.id));
  };

  return (
    <div className="card_item">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="wrapper">
        <p>{product.title}</p>
        <div className="price">{product.price} руб.</div>
      </div>
      <BsTrash3 size={25} className="delete_icon" onClick={handleClick} />
    </div>
  );
};

export default CardItem;
