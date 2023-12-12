import React, { useState } from "react";
import Menu from "../constant/Menu";
import Boxer1 from "../assets/pets/boxer_1.jpg";

const Gallery = () => {
  const [items, setItems] = useState(Menu);
  const [active, SetActive] = useState(false);
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    SetActive(true);
  };

  return (
    <>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap font-poppins">
        <button
          type="button"
          className="text-[#124C5F] hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
          onClick={() => setItems(Menu)}
        >
          All categories
        </button>
        <button
          type="button"
          className={
            active
              ? "nav-link text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              : "nav-link active text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          }
          onClick={() => filterItem("Boxer")}
        >
          Boxer
        </button>
        <button
          type="button"
          className={
            active
              ? "nav-link text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              : "nav-link active text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          }
          onClick={() => filterItem("Husky")}
        >
          Husky
        </button>
        <button
          type="button"
          className={
            active
              ? "nav-link text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
              : "nav-link active text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800"
          }
          onClick={() => filterItem("Ragdoll")}
        >
          Ragdoll
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((elem) => {
          const { id, image } = elem;

          return (
            <div id={id}>
              <img
                src={image}
                alt="Pet picture"
                className="h-auto max-w-full rounded-lg"
              />
              <h1></h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
