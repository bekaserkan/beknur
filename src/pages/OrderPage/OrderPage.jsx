import React from "react";
import "./OrderPage.css";
import { useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import { calcTotalPrice } from "../../components/utils/utils";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    setTimeout(() => {
      navigate("/ShopHome");
    }, 1000);
    return <p>Ваша корзина пуста</p>;
  }

  return (
    <div className="order_page">
      <div className="left">
        {items.map((game) => (
          <OrderItem key={game.id} game={game} />
        ))}
      </div>
      <div className="right">
        <div className="price">
          <p>
            {items.length === 1 ? " товар на сумму " : " товаров на сумму "}
            {calcTotalPrice(items)} руб.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
