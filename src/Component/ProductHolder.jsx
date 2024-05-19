import React from "react";
import { Link } from "react-router-dom";

const ProductHolder = ({ productAll }) => {
  return (
    <div>
      <div className="produtWrapper">
        {productAll?.map((product) => (
          <Link to={`singleProduct/${product.id}`}>
            <div className="productItem1" key={product.id}>
              <h1 className="pname">{product.title}</h1>
              <img src={product.images[0]} alt="" />
              <div className="productInfo">
                <p className="price">${product.price}</p>
                <button className="addtoCart">add to cart</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductHolder;
