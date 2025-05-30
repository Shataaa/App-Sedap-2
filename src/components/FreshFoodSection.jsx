import React from "react";

const FreshFoodSection = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md my-12">
      <h2 className="text-3xl font-bold text-center mb-4">Everyday Fresh Food</h2>
      <p className="text-center text-gray-600 mb-6">
        Duis aute irure dolor in reprehenderit in derit. Voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Refreshing to get such a touch
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Duis aute irure dolor in
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Reprehenderit in voluptate
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Velit esse cillum dolore eu
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Fugiat nulla pariatur
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Order Now
          </button>
        </div>
        <div>
          <img
            src="https://www.greenqueen.com.hk/wp-content/uploads/2016/01/oh-she-glows-veggie-bowl.jpg"
            alt="Fresh Food"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FreshFoodSection;