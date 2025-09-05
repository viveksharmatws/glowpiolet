import React from "react";

const ProductCard = ({ name, img, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 flex flex-col hover:shadow-lg transition w-full max-w-sm">
      {/* Product Image */}
      <img
        src={img}
        alt={name}
        className="h-40 w-full object-contain rounded mb-4"
      />

      {/* Product Title */}
      <h3 className="font-semibold text-lg">{name}</h3>

      {/* Product Description */}
      <p className="text-gray-400 text-sm mt-1 mb-4">
        {description ||
          "This where the product description goes. This description comes from the user's website."}
      </p>

      {/* CTA Button */}
      <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg mt-auto self-start">
        + Create Ad
      </button>
    </div>
  );
};

export default ProductCard;
