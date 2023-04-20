import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-400 font-light text-sm mx-4">
          Made with <span className="text-red-500">&hearts;</span> by Fajri
        </div>
        <div className="text-gray-400 font-light text-sm mx-4">
          &copy; 2023 Yukari Sushi House. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
