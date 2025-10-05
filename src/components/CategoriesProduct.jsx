import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Leaf, Truck, Shield } from "lucide-react";
import { categories } from "../data/categoriesData";

const CategoriesProduct = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const category = categories.find(c => c.id === parseInt(categoryId));

  if (!category) return <p>Category not found</p>;

  return (
    <div className="min-h-screen">
    
      {/* Products Grid */}
      <div className=" px-4 sm:px-6 lg:px-8">
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {category.products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-xl cursor-pointer overflow-hidden transition-all duration-300"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              {/* Product Image */}
              <div className="relative w-full h-60 overflow-hidden bg-gray-100">
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
                  {product.rating || 4.5}
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
                          star <= (product.rating || 4.5)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    ({product.reviews || 156} reviews)
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {product.description || `Beautifully crafted ${product.name.toLowerCase()} made from sustainable materials.`}
                </p>

                {/* Features */}
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1">
                    <Truck className="w-3 h-3" />
                    <span>Free Shipping</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>5-Year Warranty</span>
                  </div>
                </div>

                {/* Quick View Button */}
                
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105">
            Load More Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoriesProduct;