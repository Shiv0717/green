import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Leaf, Truck, Shield } from "lucide-react";

const SimilarProducts = () => {
  const navigate = useNavigate();

  // Dummy products with enhanced data
  const products = [
    {
      id: 1,
      name: "Modern Eco Sofa",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      price: "$899",
      rating: 4.8,
      reviews: 124,
      ecoBadge: true,
      features: ["Sustainable", "Free Shipping"]
    },
    {
      id: 2,
      name: "Organic Bed Frame",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop",
      price: "$1,299",
      rating: 4.9,
      reviews: 203,
      ecoBadge: true,
      features: ["Eco-Friendly", "5-Year Warranty"]
    },
    {
      id: 3,
      name: "Dining Table Set",
      img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=500&h=500&fit=crop",
      price: "$699",
      rating: 4.7,
      reviews: 89,
      ecoBadge: true,
      features: ["Sustainable Wood", "Free Assembly"]
    },
    {
      id: 4,
      name: "Smart Lighting Kit",
      img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
      price: "$299",
      rating: 4.6,
      reviews: 156,
      ecoBadge: false,
      features: ["Energy Saving", "Smart Home"]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-black mb-4">You Might Also Like</h2>
        <p className="text-lg text-gray-600 ">
          Discover more sustainable products that match your style and values
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white  border border-gray-200 hover:border-green-300 hover:shadow-xl cursor-pointer overflow-hidden transition-all duration-300"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Product Image */}
            <div className="relative w-full h-80 overflow-hidden bg-gray-100">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Eco Badge */}
              {product.ecoBadge && (
                <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1">
                  <Leaf className="w-3 h-3" />
                  Eco-Friendly
                </div>
              )}
              
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white bg-opacity-95 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-xs font-semibold">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                {product.rating}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-6 space-y-4">
              {/* Title and Price */}
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold text-black group-hover:text-green-700 transition-colors flex-1 pr-4 line-clamp-2">
                  {product.name}
                </h3>
                <span className="text-2xl font-bold text-green-600 whitespace-nowrap">
                  {product.price}
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= product.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    {feature === "Sustainable" && <Leaf className="w-3 h-3 text-green-600" />}
                    {feature === "Free Shipping" && <Truck className="w-3 h-3 text-green-600" />}
                    {feature === "5-Year Warranty" && <Shield className="w-3 h-3 text-green-600" />}
                    {feature === "Energy Saving" && <Leaf className="w-3 h-3 text-green-600" />}
                    {feature}
                  </span>
                ))}
              </div>

              {/* Quick View Button */}
             
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
    
    </div>
  );
};

export default SimilarProducts;