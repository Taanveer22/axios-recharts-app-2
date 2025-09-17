import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-400 p-5 rounded-sm space-y-2 flex flex-col">
      <h2 className="text-5xl font-bold">
        <span>{price}</span>
        <span>/mon</span>
      </h2>
      <h1 className="text-3xl font-medium">{name}</h1>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <FaCheckCircle className="text-red-800" />
            <p>{feature}</p>
          </div>
        ))}
      </div>
      <button className="btn btn-error w-full hover:btn-success">
        Buy Now
      </button>
    </div>
  );
};

export default PriceOption;
