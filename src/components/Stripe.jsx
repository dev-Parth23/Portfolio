import React from "react";

function Stripe({ val }) {
  return (
    <div
      className="
        w-1/2
        sm:w-1/3
        md:w-1/4
        lg:w-1/5
        flex
        justify-center
        py-6
        border-t border-b
        border-r
        border-zinc-600
      "
    >
      <a href={val.ID} target="_blank" rel="noopener noreferrer">
        <img
          className="h-8 sm:h-10 md:h-12 object-contain"
          src={val.URL}
          alt="Profile link"
        />
      </a>
    </div>
  );
}

export default Stripe;