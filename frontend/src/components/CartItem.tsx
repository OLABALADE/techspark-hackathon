import React from "react";
import { cancel } from "../assets/icons";
import PriceTag from "./PriceTag";

const CartItem = () => {
  return (
    <div className=" flex justify-between  h-42 w-46 md:h-58 md:w-62 lg:h-64 lg:md:w-68">
      {/* Image and Tag */}
      <div className=" flex flex-col justify-between">
        <div className="bg-[var(--tertiary-color)] rounded-2xl flex flex-col justify-end items-end h-32 w-36 md:h-44 md:w-48 lg:h-52 lg:w-56 ">
          <PriceTag />
        </div>

        {/* Product name */}
        <div className="  flex justify-between items-center text-sm md:text-lg">
          <p>{"Product name"}</p>
          <p>x {"1"}</p>
        </div>
      </div>

      {/* Cancel Button */}

      <div className=" w-max ml-4">
        <button>
          <img
            className="  bg-[var(--tertiary-color)] rounded-full size-6 md:size-7"
            src={cancel}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
