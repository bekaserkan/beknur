import React from "react";
import "./Category.css";

const Category = ({
  cate1,
  cate2,
  cate3,
  cate4,
  setCate1,
  setCate2,
  setCate3,
  setCate4,
}) => {
  return (
    <div className="category">
      <div
        style={{ background: cate1 ? "#9717ac" : "#fff" }}
        onClick={() =>
          setCate1(!cate1) ||
          setCate2(false) ||
          setCate3(false) ||
          setCate4(false)
        }
        className="box"
      >
        <p style={{ color: cate1 ? "#fff" : "#9717ac", fontWeight: "bold" }}>
          men's clothing
        </p>
      </div>
      <div
        style={{ background: cate2 ? "#9717ac" : "#fff" }}
        onClick={() =>
          setCate2(!cate2) ||
          setCate1(false) ||
          setCate3(false) ||
          setCate4(false)
        }
        className="box"
      >
        <p style={{ color: cate2 ? "#fff" : "#9717ac", fontWeight: "bold" }}>
          jewelery
        </p>
      </div>
      <div
        style={{ background: cate3 ? "#9717ac" : "#fff" }}
        onClick={() =>
          setCate3(!cate3) ||
          setCate2(false) ||
          setCate1(false) ||
          setCate4(false)
        }
        className="box"
      >
        <p style={{ color: cate3 ? "#fff" : "#9717ac", fontWeight: "bold" }}>
          electronics
        </p>
      </div>
      <div
        style={{ background: cate4 ? "#9717ac" : "#fff" }}
        onClick={() =>
          setCate4(!cate4) ||
          setCate2(false) ||
          setCate3(false) ||
          setCate1(false)
        }
        className="box"
      >
        <p style={{ color: cate4 ? "#fff" : "#9717ac", fontWeight: "bold" }}>
          women's clothing
        </p>
      </div>
    </div>
  );
};

export default Category;
