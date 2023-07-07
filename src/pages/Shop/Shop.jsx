import React from "react";
import "./Shop.css";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import Loading from "../../components/UI/loading/loading";
import { Alert } from "../../components/UI/sweetAlert/sweetAlert";

const Shop = ({ data, loading, value }) => {
  return (
    <div className="shop">
      <h1> Интернет-магазин </h1>
      {loading ? (
        <div className="loading_div">
          <Loading />
        </div>
      ) : (
        data
          .filter((obj) => {
            const fullName = obj.title.toLowerCase();
            return fullName.includes(value.toLowerCase());
          })
          .map((items) => <ProductsItem key={items.id} items={items} />)
      )}
      {data == false ? (
        <div className="NotFound">
          <p>Пожалуйста проверьте интернет соединение и попробуйте заново</p>
        </div>
      ) : null}
    </div>
  );
};

export default Shop;
