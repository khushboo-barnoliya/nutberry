'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductOverviewProps {
  img: string;
  title: string;
  price: number;
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ img, title, price }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleBuyNow = () => {
    // Handle the buy now logic here, such as adding to cart or proceeding to checkout
    alert(`Buying ${quantity} item(s) of ${title}`);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1); // Ensure quantity is at least 1
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:flex-shrink-0">
          <Image
            className="h-64 w-full object-cover md:w-64 md:h-full rounded-lg"
            src={img}
            alt={title}
            width={256}
            height={256}
          />
        </div>

        {/* Product Details */}
        <div className="mt-4 md:mt-0 md:ml-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="text-xl font-semibold text-gray-800 mt-2">Rs. {price}</p>

          {/* Quantity Input */}
          <div className="mt-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="mt-1 block w-24 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              min="1"
            />
          </div>

          {/* Buy Now Button */}
          <button
            onClick={handleBuyNow}
            className="mt-8 w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
