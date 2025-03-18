import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-gray-900 p-4 text-white flex justify-between items-center shadow-lg sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold tracking-wide">
        Perfume Haven
      </Link>
      <div className="space-x-6">
        <Link to="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/shop" className="hover:text-gray-400 transition">
          Shop
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition">
          About
        </Link>
      </div>
    </nav>
  );
}
