import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 text-black p-4 shadow-md border-b-4 border-gray-300">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Sunglasses</h1>

        {/* Contact Button */}
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
