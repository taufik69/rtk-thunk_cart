import React from "react";

const Loading = () => {
  const totalAnimation = [...new Array(20)];

  return (
    <div>
      <div className="produtWrapper2">
        {totalAnimation.map((_, index) => (
          <div className="productItem2" key={index}>
            <h1 className="pname2">{""}</h1>
            <div className="imglayout"></div>
            <div className="productInfo">
              <p className="price2">{""}</p>
              <button className="addtoCart2"></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
