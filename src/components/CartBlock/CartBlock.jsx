import React, { useCallback, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import "./CartBlock.css";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils/utils";
import { useNavigate } from "react-router-dom";
import ItemsInCard from "../ItemsInCard/ItemsInCard";
import CartMenu from "../CartMenu/CartMenu";

const CartBlock = ({ isCartMenuVisible, setIsCartMenuVisible }) => {
  const items = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setIsCartMenuVisible(false);
    navigate("/ShopHome/order");
  }, [navigate]);

  return (
    <div className="card_block">
      <ItemsInCard quantity={items.length} />
      <div
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
        className="cart_btn"
      >
        <GiShoppingCart
          style={{ color: "#fff" }}
          size={35}
          className="cart_icon"
        />
        {totalPrice > 0 ? (
          <div className="price">
            {" "}
            <p>{totalPrice}</p> <p style={{ marginLeft: "5px" }}>p</p>{" "}
          </div>
        ) : null}
      </div>
      {isCartMenuVisible && (
        <CartMenu
          items={items}
          set={setIsCartMenuVisible}
          onClick={handleClick}
        />
      )}
    </div>
  );
};

export default CartBlock;
