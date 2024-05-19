import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FetcherProduct } from "./Features/AllSlice/ProductSlice/ProductSlice";
import ProductHolder from "./ProductHolder";
import Loading from "./Loading";
import Error from "./Error";
const Prouduct = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetcherProduct("https://dummyjson.com/products"));
  }, [dispatch]);
  const { product, status, SerializedError } = useSelector(
    (state) => state.product
  );

  let content = null;
  if (status == "pending") {
    content = <Loading />;
  } else if (SerializedError) {
    content = <Error errorObject={SerializedError} />;
  } else {
    content = <ProductHolder productAll={product.products} />;
  }
  return <div>{content}</div>;
};

export default Prouduct;
