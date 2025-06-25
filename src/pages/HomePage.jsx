import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { items } = useSelector((state) => state.products);
  return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen p-8">
          <h1 className="font-bold text-3xl mt-4 mb-8">Products</h1>
      <div className="md:w-xl lg:w-4xl space-y-4 md:grid md:grid-cols-3 gap-8 gap-y-10 justify-items-center">
        {items?.map((item) => (
          <div
            key={item.id}
            className="md:w-full flex flex-col justify-evenly items-center rounded-xl p-4 border border-gray-200 shadow-xl text-center"
          >
            <img src={item.image} alt="product_image" className="max-w-20" />
            <p className="mt-4">{item.title}</p>
            <p className="font-bold my-2">Price: Rs.{item.price}</p>
            <button className="py-1 px-2 bg-blue-500 rounded-lg text-white mt-auto mb-2 cursor-pointer hover:text-amber-300">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
