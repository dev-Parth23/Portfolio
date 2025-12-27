import React from "react";
import Button from "../components/Button";

function Product({ val, index, mover }) {
  const { title, description, live, color } = val;

  return (
    
    <div className={`w-full h-[23rem] py-20 pr-6 text-white ${color}`}>
      <div
        onMouseEnter={() => mover(index)}
        className="w-full mx-auto flex items-center justify-between"
      >
        <h1 className="w-1/5 text-4xl pl-20 font-semibold capitalize ">
          {title}
        </h1>

        <div className="w-2/5">
          <p className="pb-10">{description}</p>
          {live && <Button title="View GitHub" />}
        </div>
      </div>
    </div>
      
  );
}

export default Product;
