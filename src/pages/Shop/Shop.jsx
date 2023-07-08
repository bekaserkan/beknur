import React from "react";
import "./Shop.css";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import Loading from "../../components/UI/loading/loading";

const Shop = ({ data, loading, value, cate1, cate2, cate3, cate4 }) => {
  const data_cate1 = "men's clothing";
  const data_cate2 = "jewelery";
  const data_cate3 = "electronics";
  const data_cate4 = "women's clothing";

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
            const categoryObj = obj.category;
            return cate1 ? categoryObj === data_cate1 : obj;
          })
          .filter((obj) => {
            const categoryObj = obj.category;
            return cate2 ? categoryObj === data_cate2 : obj;
          })
          .filter((obj) => {
            const categoryObj = obj.category;
            return cate3 ? categoryObj === data_cate3 : obj;
          })
          .filter((obj) => {
            const categoryObj = obj.category;
            return cate4 ? categoryObj === data_cate4 : obj;
          })
          .filter((obj) => {
            const fullName = obj.title.toLowerCase();
            return fullName.includes(value.toLowerCase());
          })
          .map((items) => <ProductsItem key={items.id} items={items} />)
      )}
      {loading ? (
        data === false ? (
          <div className="NotFound">
            <p>Пожалуйста проверьте интернет соединение и попробуйте заново</p>
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Shop;
