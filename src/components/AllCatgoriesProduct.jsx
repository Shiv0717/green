import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Star, Leaf, Truck, Shield, Clock } from "lucide-react";

const AllCategoriesProduct = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Living Room",
      description: "Sustainable furniture for your living space",
      products: [
        { 
          id: 1, 
          name: "Eco Sofa", 
          img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop", 
          price: "$899",
          rating: 4.8,
          reviews: 124,
          ecoBadge: true
        },
        { 
          id: 2, 
          name: "Coffee Table", 
          img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop", 
          price: "$299",
          rating: 4.6,
          reviews: 89,
          ecoBadge: true
        },
        { 
          id: 3, 
          name: "Bookshelf", 
          img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=500&h=500&fit=crop", 
          price: "$459",
          rating: 4.9,
          reviews: 67,
          ecoBadge: true
        },
        { 
          id: 4, 
          name: "Accent Chair", 
          img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop", 
          price: "$349",
          rating: 4.7,
          reviews: 156,
          ecoBadge: false
        },
      ],
    },
    {
      id: 2,
      name: "Bedroom",
      description: "Organic and comfortable bedroom essentials",
      products: [
        { 
          id: 1, 
          name: "Organic Bed", 
          img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&h=500&fit=crop", 
          price: "$1299",
          rating: 4.9,
          reviews: 203,
          ecoBadge: true
        },
        { 
          id: 2, 
          name: "Nightstand", 
          img: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&h=500&fit=crop", 
          price: "$199",
          rating: 4.5,
          reviews: 78,
          ecoBadge: true
        },
        { 
          id: 3, 
          name: "Wardrobe", 
          img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&h=500&fit=crop", 
          price: "$799",
          rating: 4.7,
          reviews: 134,
          ecoBadge: true
        },
        { 
          id: 4, 
          name: "Dresser", 
          img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&h=500&fit=crop", 
          price: "$599",
          rating: 4.8,
          reviews: 92,
          ecoBadge: true
        },
      ],
    },
    {
      id: 3,
      name: "Dining",
      description: "Sustainable dining sets and accessories",
      products: [
        { 
          id: 1, 
          name: "Dining Table", 
          img: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?w=500&h=500&fit=crop", 
          price: "$699",
          rating: 4.8,
          reviews: 167,
          ecoBadge: true
        },
        { 
          id: 2, 
          name: "Dining Chairs", 
          img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop", 
          price: "$149",
          rating: 4.6,
          reviews: 89,
          ecoBadge: true
        },
        { 
          id: 3, 
          name: "Buffet Cabinet", 
          img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=500&h=500&fit=crop", 
          price: "$899",
          rating: 4.9,
          reviews: 56,
          ecoBadge: true
        },
        { 
          id: 4, 
          name: "Bar Stools", 
          img: "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&h=500&fit=crop", 
          price: "$199",
          rating: 4.4,
          reviews: 112,
          ecoBadge: false
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      {categories.map((category) => (
        <section key={category.id} className="relative">
          {/* Category Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-black">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 mt-2">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={() => navigate(`/category/${category.id}`)}
              className="group flex items-center gap-2 text-black hover:text-green-600 font-semibold text-lg border-b-2 border-black hover:border-green-600 transition-all duration-300 pb-1 w-fit"
            >
              View All Collection
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
            {category.products.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer bg-white border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {/* Product Image */}
                <div className="relative overflow-hidden bg-gray-50">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  
                  {/* Eco Badge */}
                  {product.ecoBadge && (
                    <div className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-xs font-semibold flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      Eco-Friendly
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-black group-hover:text-green-700 transition-colors flex-1 pr-4">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-green-600 whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-black">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  
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
                </div>
              </div>
            ))}
          </div>
          
          {/* Section Divider */}
          {category.id !== categories.length && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mt-16" />
          )}
        </section>
      ))}
    </div>
  );
};

export default AllCategoriesProduct;