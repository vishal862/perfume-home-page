import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/product/getProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight mb-2">
            Discover Your Signature Scent
          </h1>
          <p className="text-lg text-gray-600">
            Explore our curated collection of exquisite perfumes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product._id}
              to={`/product/${product._id}`}
              className="block bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300"
            >
              <div className="relative">
                <img
                  className="w-full h-72 object-cover"
                  src={product.images[0]}
                  alt={product.name}
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {product.name}
                </h2>
                <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-semibold text-indigo-600">
                    ₹{product.price}
                  </p>
                  <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}