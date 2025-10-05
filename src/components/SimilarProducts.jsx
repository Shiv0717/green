import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Leaf, Truck, Shield } from "lucide-react";

const SimilarProducts = () => {
  const navigate = useNavigate();

  // Dummy products with enhanced data
  const products = [
    {
      id: 1,
      name: "Modular Sofa",
      img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop",
      price: "$899",
      rating: 4.8,
      reviews: 124,
      ecoBadge: true,
      features: ["Sustainable", "Free Shipping"]
    },
    {
      id: 2,
      name: "Platform Bed",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop",
      price: "$1,299",
      rating: 4.9,
      reviews: 203,
      ecoBadge: true,
      features: ["Eco-Friendly", "5-Year Warranty"]
    },
    {
      id: 3,
      name: "Dining Table",
      img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=500&h=500&fit=crop",
      price: "$699",
      rating: 4.7,
      reviews: 89,
      ecoBadge: true,
      features: ["Sustainable Wood", "Free Assembly"]
    },
    {
      id: 4,
      name: "Lighting Kit",
      img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
      price: "$299",
      rating: 4.6,
      reviews: 156,
      ecoBadge: false,
      features: ["Energy Saving", "Smart Home"]
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white">
      <div className="mb-8">
        <h2 className="text-2xl font-normal text-black mb-2 tracking-tight">YOU MIGHT ALSO LIKE</h2>
        <p className="text-sm text-gray-600 tracking-wide">
          Discover more products that match your style
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white border border-gray-100 hover:border-gray-300 cursor-pointer transition-all duration-300"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            {/* Product Image */}
            <div className="relative w-full h-72 overflow-hidden bg-gray-50">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Eco Badge */}
              {product.ecoBadge && (
                <div className="absolute top-3 left-3 bg-black text-white px-2 py-1 text-xs font-normal tracking-wide flex items-center gap-1">
                  <Leaf className="w-3 h-3" />
                  ECO
                </div>
              )}
              
              {/* Rating Badge */}
              <div className="absolute top-3 right-3 bg-white bg-opacity-95 backdrop-blur-sm px-2 py-1 flex items-center gap-1 text-xs font-normal">
                <Star className="w-3 h-3 fill-black text-black" />
                {product.rating}
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 space-y-4">
              {/* Title and Price */}
              <div className="flex items-start justify-between">
                <h3 className="text-sm text-black flex-1 pr-3 tracking-wide line-clamp-2">
                  {product.name}
                </h3>
                <span className="text-sm text-black whitespace-nowrap">
                  {product.price}
                </span>
              </div>

              {/* Reviews */}
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= product.rating
                          ? 'fill-black text-black'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 text-xs font-normal tracking-wide"
                  >
                    {feature === "Sustainable" && <Leaf className="w-3 h-3 text-black" />}
                    {feature === "Free Shipping" && <Truck className="w-3 h-3 text-black" />}
                    {feature === "5-Year Warranty" && <Shield className="w-3 h-3 text-black" />}
                    {feature === "Energy Saving" && <Leaf className="w-3 h-3 text-black" />}
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;