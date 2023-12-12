import React from "react";
import Dog from "../assets/hero.png";

const Hero = () => {
  return (
    <section class="bg-white dark:bg-gray-900 font-poppins">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16 lg:justify-items-stretch">
        <div class="flex flex-col justify-center">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Discover Your Perfect Pet Companion!
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            We understand that every pet is unique, just like you. That's why
            we're dedicated to helping you find the perfect breed that matches
            your lifestyle, personality, and home.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#124C5F] hover:bg-emerald-900 focus:ring-4 focus:ring-blue-300 "
            >
              Explore more
              <svg
                class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <img src={Dog} className="lg:justify-self-end" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
