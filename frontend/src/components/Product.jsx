import React from "react";
import Button from "../components/Button";

function Product({ val, index, mover }) {
  const { title, description1, description2, live, color, link } = val;

  return (
    <div className={`w-full h-[23rem] flex justify-center text-white ${color}`}>
      <div
        onMouseEnter={() => mover(index)}
        className="w-full mx-auto flex items-center justify-between"
      >
        <h1 className="w-1/5 text-5xl pl-20 font-bold leading-relaxed">
          {title}
        </h1>

        <div className="w-2/5 pr-20 text-lg">
          <p className="pb-10">{description1}</p>
          <p className="pb-10">{description2}</p>
          {live && <Button title="View" href={link}/>}
        </div> 
      </div>
    </div>
  );
}
export default Product;