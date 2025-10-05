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
    { icon: Leaf, text: "Sustainable Materials", color: "text-black" },
    { icon: Truck, text: "Free Shipping", color: "text-gray-600" },
    { icon: Shield, text: "5-Year Warranty", color: "text-gray-600" },
    { icon: RotateCcw, text: "30-Day Returns", color: "text-gray-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 ">
        {/* Breadcrumbs */}
<div className="py-4 text-xs text-gray-500 tracking-wide flex items-center gap-1">
  <button 
    className="hover:underline"
    onClick={() => navigate("/")}
  >
    Home
  </button>
  <span>/</span>
  <button 
    className="hover:underline"
    onClick={() => navigate(`/category/${categories.find(c => c.products.includes(product))?.id}`)}
  >
    {categories.find(c => c.products.includes(product))?.name}
  </button>
  <span>/</span>
  <span className="text-gray-900">{product.name}</span>
</div>


        <div className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square overflow-hidden bg-gray-50">
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
                    className={`aspect-square overflow-hidden border transition-all ${
                      selectedImage === index 
                        ? 'border-black' 
                        : 'border-gray-200 hover:border-gray-400'
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
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                {product.ecoBadge && (
                  <div className="inline-flex items-center gap-2 bg-black text-white px-3 py-1 text-xs font-normal tracking-wide">
                    <Leaf className="w-3 h-3" />
                    ECO-FRIENDLY
                  </div>
                )}
                <h1 className="text-2xl lg:text-3xl font-normal text-black tracking-tight">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= (product.rating || 4.5)
                            ? 'fill-black text-black'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-normal text-black">{product.rating || 4.5}</span>
                  <span className="text-sm text-gray-500">({product.reviews || 156})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-normal text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-sm text-gray-600 leading-relaxed tracking-wide">
                  Crafted with sustainable materials and designed for modern living, this {product.name.toLowerCase()} 
                  combines exceptional quality with environmental responsibility. Each piece is carefully constructed 
                  to provide lasting comfort and style while minimizing our ecological footprint.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <feature.icon className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-xs font-normal text-gray-700 tracking-wide">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <label className="block text-sm font-normal text-black tracking-wide">QUANTITY</label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-gray-300">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-4 py-2 text-sm font-normal min-w-12 text-center border-l border-r border-gray-300">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-gray-50 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <span className="text-xs text-gray-500 tracking-wide">{product.stock || 15} IN STOCK</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button className="flex-1 flex items-center justify-center gap-3 bg-black text-white py-4 px-6 font-normal text-sm tracking-wide hover:bg-gray-800 transition-all duration-300">
                  <ShoppingCart className="w-4 h-4" />
                  ADD TO CART
                </button>
                <button className="flex items-center justify-center border border-gray-300 text-black py-4 px-4 hover:bg-gray-50 transition-colors">
                  <Heart className="w-4 h-4" />
                </button>
                <button className="flex items-center justify-center border border-gray-300 text-black py-4 px-4 hover:bg-gray-50 transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-4 text-xs text-gray-600 tracking-wide">
                  <div>
                    <span className="font-normal">SKU:</span> GD-{product.id}
                  </div>
                  <div>
                    <span className="font-normal">CATEGORY:</span> {categories.find(c => c.products.includes(product))?.name}
                  </div>
                  <div>
                    <span className="font-normal">MATERIAL:</span> SUSTAINABLE WOOD
                  </div>
                  <div>
                    <span className="font-normal">DIMENSIONS:</span> 180 × 90 × 75 CM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <SimilarProducts/>
      </div>
    </div>
  );
};

export default ProductDetailsPage;