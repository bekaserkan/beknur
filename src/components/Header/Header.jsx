import React from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FiTwitter, FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { useState } from "react";
import { Alert } from "../UI/sweetAlert/sweetAlert";
import { IoLogoNpm } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

const Header = () => {
  const [check, setCheck] = useState(false);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  function send() {
    if (value === "") {
      Alert("error", "Заполняйте правильно");
    } else {
      Alert("success", "Вы успешно подписалсь!");
    }
  }

  return (
    <div className="header">
      <div className="save">
        <div className="wrapper">
          <div onClick={() => navigate("/")} className="logo">
            <IoLogoNpm size={50} style={{ color: "#9717AC" }} />
            <h1>Beka</h1>
          </div>
          <div className="sections">
            <NavLink to="/" className="section">
              <h3> Home </h3>
            </NavLink>
            <NavLink to="ShopHome" className="section">
              <h3>Shop</h3>
            </NavLink>
            <NavLink to="g" className="section">
              <h3>Faq</h3>
            </NavLink>
            <NavLink to="r" className="section">
              <h3>Servises</h3>
            </NavLink>
            <NavLink to="sd" className="section">
              <h3>Review</h3>
            </NavLink>
          </div>
        </div>
        <div className="saved">
          <div className="subscription">
            <h1>Подписаться на рассылку</h1>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Введите Ваш E-mail"
            />
            <button onClick={send} className="send">
              Подписаться
            </button>
            <div className="block">
              <div onClick={() => setCheck(!check)} className="check">
                {check && <FaCheck style={{ color: "#a5dc86" }} size={18} />}
              </div>
              <p>Я согласен с условиями обработки персональных данных </p>
            </div>
          </div>
          <div className="a">
            <a href="#">Политика конфедециальности </a>
          </div>
        </div>
      </div>
      <div className="contacts">
        <h1>Контакты</h1>
        <h2> +7 (964) 324-41-25 </h2>
        <a href="#"> Заказать звонок </a>
        <h2> beka@gmail.com </h2>
        <a href="#"> Напишите нам </a>
        <div className="icons">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FiTwitter />
          </div>
          <div className="icon">
            <FiInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
