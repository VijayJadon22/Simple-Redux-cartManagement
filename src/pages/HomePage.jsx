import React, { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay * 1000);
  };
};

const HomePage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedInputChange = debounce((e) => {
    setSearchTerm(e.target.value.trim());
  }, 2);

  const filteredItems = useMemo(() => {
    if (!searchTerm) {
      return items;
    } else {
      return items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }, [items, searchTerm]);

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-8">
      <h1 className="font-bold text-3xl mt-4 mb-8">Products</h1>
      <input
        onChange={debouncedInputChange}
        type="text"
        placeholder="Search"
        className="border py-2 px-8 rounded-lg bg-white text-gray-500 outline-none font-semibold mb-8"
      />
      <div className="md:w-xl lg:w-4xl space-y-4 md:grid md:grid-cols-3 gap-8 gap-y-10 justify-items-center">
        {filteredItems?.map((item) => (
          <div
            key={item.id}
            className="md:w-full flex flex-col justify-evenly items-center rounded-xl p-4 border border-gray-200 shadow-xl text-center"
          >
            <img src={item.image} alt="product_image" className="max-w-20" />
            <p className="mt-4">{item.title}</p>
            <p className="font-bold my-2">Price: Rs.{item.price}</p>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="py-1 px-2 bg-blue-500 rounded-lg text-white mt-auto mb-2 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

