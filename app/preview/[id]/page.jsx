'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ProductOverview = ({ menu = [] }) => {
  const [quantity, setQuantity] = useState(1);

  // Destructuring the menu prop to extract title, img, and price
  // Assuming menu is an array of products
  const filteredProducts = menu.filter(product => product.price > 1000);

  const handleBuyNow = (title) => {
    // Handle the buy now logic here, such as adding to cart or proceeding to checkout
    alert(`Buying ${quantity} item(s) of ${title}`);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // Ensure quantity is at least 1
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div key={product.id} className="md:flex mb-6">
        {filteredProducts.map(product => (
          {/* Product Image */ }
          < div className = "md:flex-shrink-0" >
          <Image
            className="h-64 w-full object-cover md:w-64 md:h-full rounded-lg"
            src={product.img}
            alt={product.title}
            width={256}
            height={256}
          />
          </div>

      {/* Product Details */}
      <div className="mt-4 md:mt-0 md:ml-6">
        <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
        <p className="text-xl font-semibold text-gray-800 mt-2">Rs. {product.price}</p>

        {/* Quantity Input */}
        <div className="mt-6">
          <label htmlFor={`quantity-${product.id}`} className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            id={`quantity-${product.id}`}
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="mt-1 block w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            min="1"
          />
        </div>

        {/* Buy Now Button */}
        <button
          onClick={() => handleBuyNow(product.title)}
          className="mt-8 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Buy Now
        </button>
      </div>
      ))}
    </div>
    </div >
  );
};

export default ProductOverview;
