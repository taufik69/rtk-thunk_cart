import React, { useEffect } from "react";
import {
  useGetProductQuery,
  useGetEachProductQuery,
} from "./Features/ProductApi/ProductApi.js";
import ProductHolder from "./ProductHolder";
import Loading from "./Loading";
import Error from "./Error";
const Prouduct = () => {
  const { data, error, isLoading } = useGetProductQuery();

  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (error) {
    content = <Error errorObject={error} />;
  } else {
    content = <ProductHolder productAll={data.products} />;
  }
  return <div>{content}</div>;
};

export default Prouduct;
