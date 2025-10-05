import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, Star, Leaf, Plus, Minus } from "lucide-react";
import { categories } from "../data/categoriesData";
import SimilarProducts from "../components/SimilarProducts";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Find product by id from all categories
  const product = categories
    .flatMap(c => c.products)
    .find(p => p.id === parseInt(productId));

  if (!product) return <p>Product not found</p>;

  // Mock product images
  const productImages = [
    product.img,
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=800&fit=crop"
  ];

  const features = [
    { icon: Leaf, text: "Eco-Friendly Materials", color: "text-green-600" },
    { icon: Truck, text: "Free Shipping", color: "text-gray-600" },
    { icon: Shield, text: "5-Year Warranty", color: "text-gray-600" },
    { icon: RotateCcw, text: "30-Day Returns", color: "text-gray-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-3">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                      selectedImage === index 
                        ? 'border-green-600 ring-2 ring-green-100' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                {product.ecoBadge && (
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    <Leaf className="w-4 h-4" />
                    Eco-Friendly
                  </div>
                )}
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-5 h-5 ${
                          star <= (product.rating || 4.5)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{product.rating || 4.5}</span>
                  <span className="text-gray-500">({product.reviews || 156} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-green-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-2xl text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg">
                <p className="text-gray-600 leading-relaxed">
                  Crafted with sustainable materials and designed for modern living, this {product.name.toLowerCase()} 
                  combines exceptional quality with environmental responsibility. Each piece is carefully constructed 
                  to provide lasting comfort and style while minimizing our ecological footprint.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className={`w-5 h-5 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-900">Quantity</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 text-lg font-semibold min-w-12 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">{product.stock || 15} in stock</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex-1 flex items-center justify-center gap-3 bg-green-600 text-white py-4 px-6 font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-4 px-6 font-semibold hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center gap-3 border border-gray-300 text-gray-700 py-4 px-6 font-semibold hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold">SKU:</span> GD-{product.id}
                  </div>
                  <div>
                    <span className="font-semibold">Category:</span> {categories.find(c => c.products.includes(product))?.name}
                  </div>
                  <div>
                    <span className="font-semibold">Material:</span> Sustainable Wood
                  </div>
                  <div>
                    <span className="font-semibold">Dimensions:</span> 180 × 90 × 75 cm
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SimilarProducts/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;