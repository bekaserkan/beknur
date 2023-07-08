import React from "react";
import "./OrderPage.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import OrderDecor from "../../components/OrderDecor/OrderDecor";
import Button from "../../components/Button/Button";

const OrderPage = ({ value }) => {
  const navigate = useNavigate(); 
  const items = useSelector((state) => state.cart.itemsInCart);

  return items.length < 1 ? (
    <div className="decor">
      <p> Нет продуктов для оформления </p>
      <Button type={"primary"} onClick={() => navigate("/ShopHome")}>
        Перейти в магазин
      </Button>
    </div>
  ) : (
    <OrderDecor items={items} value={value} />
  );
};

export default OrderPage;
