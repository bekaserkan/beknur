import React from "react";
import "./Shop.css";
import ProductsItem from "../../components/ProductsItem/ProductsItem";
import Loading from "../../components/UI/loading/loading";

const Shop = ({ data, loading, value }) => {
  return (
      <div className="shop">
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
      </div>
  );
};

export default Shop;
