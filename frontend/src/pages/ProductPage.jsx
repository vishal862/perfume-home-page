import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaShare } from "react-icons/fa";
export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/product/getProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSelectedImage(data.images[0]);
      });
  }, [id]);

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    const newReview = { productId: id, user, rating, comment };

    const response = await fetch("http://localhost:3000/api/review/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    if (response.ok) {
      const updatedProduct = await response.json();
      setProduct(updatedProduct);
      setUser("");
      setRating(5);
      setComment("");
    }
  };
  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    alert("Product link copied to clipboard!");
  };

  if (!product)
    return <h1 className="text-center text-2xl py-8">Loading...</h1>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      {/* Call to Action Banner */}
      <div className="bg-blue-600 text-white text-center p-4 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold">
          🌟 Discover Our Latest Collection! 🌟
        </h2>
        <p className="mt-2">
          Shop now and get exclusive discounts on premium perfumes.
        </p>
        <Link to={"/"}>
          <button className="mt-3 px-4 py-2 bg-white text-blue-600 font-semibold rounded-md cursor-pointer hover:bg-gray-200 transition">
            Explore Now
          </button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          {product.name}
        </h1>
        <div className="fixed sm:top-72 top-80 right-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
          <FaShare className="text-slate-500" onClick={handleShare} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <img
              className="w-80 h-80 object-cover rounded-lg shadow-md border mb-4"
              src={selectedImage}
              alt={product.name}
            />
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border ${
                    selectedImage === img
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  src={img}
                  alt={product.name}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className="text-gray-600 mb-4 text-lg">{product.description}</p>
            <p className="text-3xl font-semibold text-blue-600 mb-4">
              ₹{product.price}
            </p>
            {product.sizes && product.sizes.length > 0 && (
              <div className="my-3">
                <p className="text-gray-700 font-semibold">Available Sizes:</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
                  {product.sizes.map((size, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gray-200 rounded-full text-gray-700 font-medium"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Add a Review
          </h2>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <input
              type="number"
              min="1"
              max="5"
              placeholder="Rating (1-5)"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            <textarea
              placeholder="Your Review"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 cursor-pointer text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>

        <div className="mt-6 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Customer Reviews
          </h2>
          {product.reviews.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {product.reviews.map((review, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md border"
                >
                  <p className="font-semibold text-lg text-gray-800">
                    {review.user}
                  </p>
                  <div className="flex items-center mt-1">
                    <p className="text-yellow-500 text-sm mr-2">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-sm">
              No reviews yet. Be the first to review!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
