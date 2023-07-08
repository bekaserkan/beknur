import React, { useEffect, useState } from "react";
import "./ElectedPage.css";
import { useSelector } from "react-redux";
import ElectedItem from "../../components/ElectedItem/ElectedItem";
import Loading from "../../components/UI/loading/loading";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

const ElectedPage = ({ value, loading }) => {
  const product = useSelector((state) => state.cart.itemsInProduct);
  const navigate = useNavigate();

  return (
    <div className="elected_page">
      <h1> Любимое </h1>
      {loading ? (
        <div className="loading_div">
          <Loading />
        </div>
      ) : (
        product
          .filter((obj) => {
            const fullName = obj.title.toLowerCase();
            return fullName.includes(value.toLowerCase());
          })
          .map((items) => <ElectedItem key={items.id} product={items} />)
      )}
      {product.length < 1 && (
        <div className="like">
          <p> Ставь лайк любимым продуктам </p>
            <Button type={"primary"} onClick={() => navigate("/ShopHome")}>
              Перейти в магазин
            </Button>
        </div>
      )}
    </div>
  );
};

export default ElectedPage;
