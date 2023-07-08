import React from "react";
import "./Head.css";
import CartBlock from "../CartBlock/CartBlock";
import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { BsFillBagHeartFill } from "react-icons/bs";
import { AiOutlineClear } from "react-icons/ai";

const Head = ({ value, setValue, placeholder }) => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const [icon, setIcon] = useState(false);

  return (
    <div className="head">
      <div className="div">
        <div onClick={() => navigate("/ShopHome")} className="icon">
          <FaShopify size={35} style={{ color: "#fff" }} />
        </div>
        <RiSearchLine
          onClick={() => setSearch(!search) || setIcon(true)}
          className="icon_search"
          style={{
            background: search ? "#9717ac" : "",
            color: search ? "#fff" : "#9717ac",
            animation: search
              ? "rotation 0.3s ease"
              : icon
              ? "rotationIn 0.3s ease"
              : "",
          }}
          size={50}
        />
        {search && (
          <div className="search_wrapper">
            <div className="search_div">
              <input
                className="search"
                value={value}
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
              />
              <AiOutlineClear
                onClick={() => setValue("")}
                className="clear_search"
                size={30}
              />
            </div>
          </div>
        )}
      </div>
      <div className="div">
        <BsFillBagHeartFill
          className="elec"
          onClick={() => navigate("ElectedPage")}
          color="#9717ac"
          size={50}
        />
        <CartBlock
          isCartMenuVisible={isCartMenuVisible}
          setIsCartMenuVisible={setIsCartMenuVisible}
        />
      </div>
    </div>
  );
};

export default Head;
