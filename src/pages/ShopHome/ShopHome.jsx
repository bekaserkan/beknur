import React from "react";
import { Route, Routes } from "react-router-dom";
import Shop from "../Shop/Shop";
import { useState } from "react";
import { useEffect } from "react";
import NotFaundPage from "../NotFaundPage/NotFaundPage";
import OrderPage from "../OrderPage/OrderPage";
import GamePage from "../GamePage/GamePage";
import Head from "../../components/Head/Head";
import { Alert2 } from "../../components/UI/sweetAlert/sweetAlert";
import ElectedPage from "../ElectedPage/ElectedPage";
import Category from "../../components/Category/Category";
import Advertising from "../../components/Advertising/Advertising";

const ShopHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cate1, setCate1] = useState(false);
  const [cate2, setCate2] = useState(false);
  const [cate3, setCate3] = useState(false);
  const [cate4, setCate4] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch(() => {
        Alert2("error", "Отсутствует интернет соединение");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Head value={value} setValue={setValue} placeholder={"Введите..."} />
      <Routes>
        <Route
          index
          element={
            <>
              <Category
                cate1={cate1}
                cate2={cate2}
                cate3={cate3}
                cate4={cate4}
                setCate1={setCate1}
                setCate2={setCate2}
                setCate3={setCate3}
                setCate4={setCate4}
              />
              <Advertising />
              <Shop
                value={value}
                loading={loading}
                data={data}
                cate1={cate1}
                cate2={cate2}
                cate3={cate3}
                cate4={cate4}
              />
            </>
          }
        />
        <Route
          path="/ElectedPage"
          element={<ElectedPage value={value} loading={loading} />}
        />
        <Route path="/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage value={value} />} />
        <Route path="*" element={<NotFaundPage />} />
      </Routes>
    </div>
  );
};

export default ShopHome;
