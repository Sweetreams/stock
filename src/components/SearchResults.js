import React, { useContext, useState } from "react";
import ThemeContext from "../context/ThemeContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const SearchResults = ({ results }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ul
      className={`absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll ${
        darkMode
          ? "bg-gray-900 border-gray-800 custom-scrollbar custom-scrollbar-dark"
          : "bg-white border-neutral-200 custom-scrollbar"
      }`}
    >
      {results.map((item) => {
        return (
          <Link
            key={item.symbol}
            className={`cursor-pointer p-4 m-2 flex items-center justify-between rounded-md ${
              darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-200 "
            }`}
            to={"/" + item.symbol}
          >
            <span>{item.symbol}</span>
            <span>{item.description}</span>
            
          </Link>
        );
      })}
    </ul>
  );
};

export default SearchResults;