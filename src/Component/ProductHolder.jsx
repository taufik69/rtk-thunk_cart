import React from "react";
import { addToCart } from "./Features/CartSlice/cartSlice";
import { useDispatch } from "react-redux";
const ProductHolder = ({ productAll }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (productDetails) => {
    dispatch(addToCart(productDetails));
  };

  return (
    <div>
      <div className="produtWrapper">
        {productAll?.map((product) => (
          <div className="productItem1" key={product.id}>
            <h1 className="pname">{product.title}</h1>
            <img src={product.images[0]} alt="" />
            <div className="productInfo">
              <p className="price">${product.price}</p>
              <button
                className="addtoCart"
                onClick={() => handleAddToCart(product)}
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHolder;
