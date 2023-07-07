import React from "react";
import "./OrderPage.css";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "../../components/OrderItem/OrderItem";
import { calcTotalPrice } from "../../components/utils/utils";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { Alert, Alert2 } from "../../components/UI/sweetAlert/sweetAlert";
import { useState } from "react";
import { deleteItemFrom } from "../../store/card/reducer";
import { BiSolidUser, BiSolidMap, BiSolidPhoneCall } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const OrderPage = ({ value }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.itemsInCart);
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [modal, setModal] = useState(false);

  if (items.length < 1) {
    setTimeout(() => {
      navigate("/ShopHome");
    }, 1000);
    return <p>Ваша корзина пуста</p>;
  }

  return (
    <div className="order_page">
      <div className="orders">
        <div className="wrapper">
          <h1>Оформление заказа</h1>
          <div className="input_box">
            <label>
              <BiSolidUser
                style={{ marginRight: "10px", color: "#9717ac" }}
                size={30}
              />
              Ф. И. О.
            </label>
            <input
              value={one}
              onChange={(e) => setOne(e.target.value)}
              type="text"
              placeholder="Имя"
            />
          </div>
          <div className="input_box">
            <div className="label_box">
              <label>
                <FaAddressBook
                  style={{ marginRight: "10px", color: "#9717ac" }}
                  size={30}
                />
                Адрес
              </label>
              <p onClick={() => setModal(true)} className="cu">
                Указать на карте
                <BiSolidMap
                  style={{ marginLeft: "10px", color: "#9717ac" }}
                  size={30}
                />
              </p>
              {modal && (
                <div className="modal">
                  <div className="modal_animate">
                    <div className="name">
                      <h1>Укажите адрес на карте</h1>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93561.74256919164!2d74.50945945341887!3d42.876971306780156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7dc91b3c881%3A0x492ebaf57cdee27d!2z0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1688746742461!5m2!1sru!2skg"
                      width="400"
                      height="280"
                      style={{ border: "none" }}
                      loading="lazy"
                    ></iframe>
                    <div className="buttons">
                      <Button
                        onClick={() => setModal(false)}
                        type={"secondary"}
                      >
                        Отмена
                      </Button>
                      <Button
                        onClick={() =>
                          Alert("error", "Эта кнопка пока не работает!")
                        }
                        type={"primary"}
                      >
                        Сохранить
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="add">
              <input
                className="address"
                value={two}
                onChange={(e) => setTwo(e.target.value)}
                type="text"
                placeholder="Адрес доставки"
              />
              <CgClose className="clear" onClick={() => setTwo("")} size={25} />
            </div>
          </div>
          <div className="input_box">
            <label>
              <BiSolidPhoneCall
                style={{ marginRight: "10px", color: "#9717ac" }}
                size={30}
              />
              Телефон
            </label>
            <input
              value={three}
              onChange={(e) => setThree(e.target.value)}
              type="text"
              placeholder="0 XXX YYYYYY"
            />
          </div>
          <div className="input_box">
            <label>
              <BsFillInfoCircleFill
                style={{ marginRight: "10px", color: "#9717ac" }}
                size={30}
              />
              Дополнительная информация
            </label>
            <input
              style={{ height: "120px", paddingBottom: "65px" }}
              value={four}
              onChange={(e) => setFour(e.target.value)}
              type="text"
              placeholder="Квартира/Этаж/Доп.инфо"
            />
          </div>
        </div>
        <div className="list">
          <h1>Список вещей</h1>
          <div className="list_data">
            {items
              .filter((obj) => {
                const fullName = obj.title.toLowerCase();
                return fullName.includes(value.toLowerCase());
              })
              .map((el) => (
                <OrderItem key={el.id} data={el} />
              ))}
          </div>
        </div>
      </div>
      <div className="finish">
        <p>
          {items.length === 1 ? " товар на сумму " : " товаров на сумму "}
          {calcTotalPrice(items)} $
        </p>
        <Button
          type={"primary"}
          onClick={() =>
            one == "" || two == "" || three == "" || four == ""
              ? Alert("error", "Заполните поля ")
              : Alert2("success", "Вы успешно оформили заказ", "Отлично") ||
                dispatch(deleteItemFrom([])) ||
                setOne("") ||
                setTwo("") ||
                setThree("") ||
                setFour("") ||
                navigate("/ShopHome")
          }
        >
          Оформление заказа
        </Button>
      </div>
    </div>
  );
};

export default OrderPage;
