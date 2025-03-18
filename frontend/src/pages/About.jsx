import React from 'react'

export default function About() {
    return (
        <div className="min-h-screen bg-gray-100 py-16">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
    
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to our online perfume boutique! We started with a passion for exquisite fragrances and a desire to share that passion with others. Our journey began with a simple idea: to curate a collection of unique and high-quality perfumes that cater to diverse tastes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Over the years, we've built strong relationships with renowned perfume houses and independent artisans, allowing us to offer a wide range of scents that are both timeless and innovative. We believe that a great fragrance has the power to evoke emotions, create memories, and express individuality.
              </p>
            </div>
    
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide an exceptional online shopping experience for perfume enthusiasts. We are committed to offering:
              </p>
              <ul className="list-disc list-inside mt-4">
                <li className="text-gray-700 leading-relaxed">A curated selection of premium perfumes.</li>
                <li className="text-gray-700 leading-relaxed">Detailed product descriptions and customer reviews to help you make informed choices.</li>
                <li className="text-gray-700 leading-relaxed">Secure and convenient online shopping.</li>
                <li className="text-gray-700 leading-relaxed">Excellent customer service and support.</li>
              </ul>
            </div>
    
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-700 leading-relaxed">
                We are dedicated to ensuring that every customer finds their perfect fragrance. Whether you're looking for a signature scent or a unique gift, we're here to help you discover the world of fine perfumes.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Thank you for choosing us as your destination for premium fragrances. We look forward to serving you!
              </p>
            </div>
    
            <div className="text-center mt-8">
              <p className="text-gray-600">Connect with us on social media:</p>
              <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      );
}
