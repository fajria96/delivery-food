import React, { useEffect, useState } from "react";
import { ProductsPreviewCard } from "./ProductsPreviewCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";

const ProductsPreview = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/api/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  const onAddProduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="">
      <h2 className="text-3xl font-extrabold text-gray-900 text-center">
        Our Best Selling
      </h2>
      <br />
      {data.length > 0 &&
        data.map((product) => {
          return (
            <div className="w-full p-3 flex flex-row">
              <ProductsPreviewCard
                key={product}
                product={product}
                onAddProduct={onAddProduct}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ProductsPreview;
