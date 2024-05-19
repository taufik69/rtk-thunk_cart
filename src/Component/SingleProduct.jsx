import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./Features/ProductApi/ProductApi";
const SingleProduct = () => {
  let { id } = useParams();
  const { data, error, isLoading } = useGetProductQuery();
  console.log(data);

  return <div>SingleProduct</div>;
};

export default SingleProduct;
