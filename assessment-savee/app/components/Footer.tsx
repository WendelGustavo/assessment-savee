"use client";
import React from "react";

export const Footer = () => {

    /**
   * Scrolls the window to the specified position.
   * @param x The horizontal position to scroll to.
   * @param y The vertical position to scroll to.
   */
  const scrollToPosition = (x: number, y: number) => {
    window.scrollTo({
      top: y,
      left: x,
      behavior: "smooth",
    });
  };

  return (
    <footer className="postion absolute bottom-0 w-full">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between ">
        <span className="text-sm sm:text-center">
          © 2024{" "}
          <a
            href="https://www.linkedin.com/in/wendeldev"
            className="hover:underline"
          >
            Wendel
          </a>
          . All Rights Reserved.
        </span>
        <div>
          <button
            type="button"
            className="text-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            onClick={() => scrollToPosition(0, 0)}
          >
            <svg
              className="w-4 h-4 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 0 1 1 1v11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L9 15.586V4a1 1 0 0 1 1-1z"
                clipRule="evenodd"
                className="text-black dark:text-white"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};
 