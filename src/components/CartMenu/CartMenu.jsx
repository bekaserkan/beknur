import React from "react";
import "./CartMenu.css";
import { calcTotalPrice } from "../utils/utils";
import CardItem from "../CardItem/CardItem";
import Button from "../Button/Button";
import { CgClose } from "react-icons/cg";

const CartMenu = ({ items, onClick, set }) => {
  const handleClick = () => {
    setTimeout(() => {
      set(false);
    }, 1000);
  };

  return (
    <div className="card_manu">
      <div className="game_list">
        {items.length > 0 ? (
          items.map((game) => (
            <CardItem
              key={game.title}
              price={game.price}
              title={game.title}
              id={game.id}
            />
          ))
        ) : (
          <p>Корзина пуста {handleClick()}</p>
        )}
      </div>
      {items.length > 0 ? (
        <div className="arrenge">
          <div className="total_price">
            <p>Итого:</p>
            <p>{calcTotalPrice(items)} руб.</p>
          </div>
          <div className="save">
            <Button type="primary" size="m" onClick={onClick}>
              Оформить заказ
            </Button>
            <CgClose onClick={() => set(false)} size={25} className="iks" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
