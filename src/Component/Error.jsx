import React from "react";

const Error = ({ errorObject }) => {
  console.log(errorObject);
  const { data, status } = errorObject;
  return (
    <div>
      <div className="errorBody">
        {errorObject && (
          <h1>
            {data} {status}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Error;
