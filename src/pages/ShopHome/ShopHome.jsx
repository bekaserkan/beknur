import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../Shop/Shop";
import { useState } from "react";
import { useEffect } from "react";
import NotFaundPage from "../NotFaundPage/NotFaundPage";
import OrderPage from "../OrderPage/OrderPage";
import GamePage from "../GamePage/GamePage";
import Head from "../../components/Head/Head";

const ShopHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        console.log(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Head value={value} onChange={setValue} placeholder={"Введите..."} />
      <Routes>
        <Route
          index
          element={<Shop value={value} loading={loading} data={data} />}
        />
        <Route path="/api/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage value={value} />} />
        <Route path="*" element={<NotFaundPage />} />
      </Routes>
    </div>
  );
};

export default ShopHome;
