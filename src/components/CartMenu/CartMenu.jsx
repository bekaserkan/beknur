import React from "react";
import "./CartMenu.css";
import { calcTotalPrice } from "../utils/utils";
import CardItem from "../CardItem/CardItem";
import Button from "../Button/Button";
import { CgClose } from "react-icons/cg";
import { BsTrash3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteItemFrom } from "../../store/card/reducer";

const CartMenu = ({ items, onClick, set }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    setTimeout(() => {
      set(false);
    }, 1000);
  };

  const handleDelete = () => {
    dispatch(deleteItemFrom([]));
  };

  return (
    <div className="menu">
      <div className="card_manu">
        <div className="game_list">
          {items.length > 0 ? (
            <div className="block">
              <div className="thpun">
                <div onClick={handleDelete} className="th">
                  <BsTrash3 color="red" size={30} />
                  <p style={{ color: "red", marginLeft: "10px" }}>Очистить</p>
                </div>
                <div className="kesh">
                  <CgClose onClick={() => set(false)} color="gray" size={25} />
                </div>
              </div>
              <p className="name">Корзина</p>
              <div className="item">
                {items.map((el) => (
                  <CardItem key={el.id} product={el} />
                ))}
              </div>
            </div>
          ) : (
            <div className="not">
              <h1>Корзина пуста {handleClick()}</h1>
            </div>
          )}
        </div>
        {items.length > 0 ? (
          <div className="arrenge">
            <div className="total_price">
              <p>Итого:</p>
              <p>{calcTotalPrice(items)} $</p>
            </div>
            <div className="save">
              <Button type="primary" size="m" onClick={onClick}>
                Оформить заказ
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartMenu;
