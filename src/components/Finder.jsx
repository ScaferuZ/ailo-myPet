import React, { useState } from "react";
import Dropzone from "./Dropzone";

const Finder = () => {
  return (
    <section className="bg-white dark:bg-gray-900 font-poppins">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
          <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-bold mb-2">
            Struggling to Identify Your Pet's Breed? Your Search Ends Here!
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
            we understand the curiosity and love that comes with pet ownership.
            Knowing your pet’s breed is not just about satisfying curiosity –
            it's about providing the best care tailored to their specific needs.
          </p>
          <h1 className="text-gray-900 text-1xl md:text-3xl font-bold mb-2">
            How we help
          </h1>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            - Simply upload a photo of your pet, and our advanced AI technology
            will analyze it to determine the breed.
          </p>
          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
            - Our team of pet experts double-checks the results, ensuring
            accuracy and reliability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <Dropzone />
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
              What pet suits you?
            </h2>
            {/* image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finder;
