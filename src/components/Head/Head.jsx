import React from "react";
import "./Head.css";
import CartBlock from "../CartBlock/CartBlock";
import { useState } from "react";
import { FaShopify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Head = ({ value, onChange, placeholder }) => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="head">
      <div className="div">
        <div className="icon">
          <FaShopify
            size={35}
            style={{ color: "#fff" }}
            onClick={() => navigate("/ShopHome")}
          />
        </div>
        <input
          className="search"
          value={value}
          type="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      <CartBlock
        isCartMenuVisible={isCartMenuVisible}
        setIsCartMenuVisible={setIsCartMenuVisible}
      />
    </div>
  );
};

export default Head;
