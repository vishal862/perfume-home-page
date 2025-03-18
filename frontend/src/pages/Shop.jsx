import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({ category: '', priceRange: '', sortBy: '' });
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3000/api/product/getProducts')
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (err) {
          setError(err.message);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    const handleFilterChange = (e) => {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    };
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredProducts = products.filter((product) => {
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatch = filters.category ? product.category === filters.category : true; // Assuming category is a property of product
      
      return searchMatch && categoryMatch;
    }).sort((a, b) => {
      if (filters.sortBy === 'priceLowToHigh') {
        return a.price - b.price;
      } else if (filters.sortBy === 'priceHighToLow') {
        return b.price - a.price;
      }
      return 0;
    });
  
    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  
    return (
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Shop</h1>
  
          <div className="flex flex-col md:flex-row mb-6">
            <div className="md:w-1/4 mb-4 md:mb-0 md:mr-4">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="md:w-3/4 flex flex-wrap gap-2">
              <select name="priceRange" onChange={handleFilterChange} className="p-2 border rounded">
                <option value="">Price Range</option>
                <option value="0-50">₹0 - ₹50</option>
                <option value="50-100">₹50 - ₹100</option>
                <option value="100-200">₹100 - ₹200</option>
              </select>
              <select name="sortBy" onChange={handleFilterChange} className="p-2 border rounded">
                <option value="">Sort By</option>
                <option value="priceLowToHigh">Price (Low to High)</option>
                <option value="priceHighToLow">Price (High to Low)</option>
              </select>
            </div>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md p-4">
                <Link to={`/product/${product._id}`}>
                  <img src={product.images[0]} alt={product.name} className="w-full h-48 object-cover rounded-md mb-2" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">₹{product.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}