import React, { useState } from 'react';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'MODULAR SOFA',
      description: 'Sustainable fabric, 3-seater',
      price: 899,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      color: 'Charcoal',
      delivery: 'Free Shipping'
    },
    {
      id: 2,
      name: 'COFFEE TABLE',
      description: 'Solid oak wood, natural finish',
      price: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
      color: 'Natural Oak',
      delivery: 'Free Shipping'
    },
    {
      id: 3,
      name: 'DINING CHAIR',
      description: 'Eco-friendly materials, set of 2',
      price: 298,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
      color: 'Black',
      delivery: 'Free Shipping'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };


  const handleCheckout = () => {
    navigate("/checkout");
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 199 ? 0 : 49;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h1 className="text-2xl font-normal tracking-tight mb-4">YOUR CART IS EMPTY</h1>
            <p className="text-sm text-gray-600 tracking-wide mb-8 max-w-md mx-auto">
              Continue shopping to add sustainable products to your cart
            </p>
            <button className="px-8 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors">
              CONTINUE SHOPPING
            </button>
          </div>
        </div>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-normal tracking-tight mb-2">SHOPPING CART</h1>
          <p className="text-sm text-gray-600 tracking-wide">
            {cartItems.length} ITEM{cartItems.length !== 1 ? 'S' : ''}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 p-6">
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 h-32 bg-gray-50 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-sm font-normal tracking-wide mb-1">{item.name}</h3>
                          <p className="text-xs text-gray-600 tracking-wide mb-2">{item.description}</p>
                          <div className="flex items-center space-x-4 text-xs text-gray-600 tracking-wide">
                            <span>Color: {item.color}</span>
                            <span>•</span>
                            <span>{item.delivery}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-gray-100 transition-colors flex-shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity and Price */}
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-xs tracking-wide text-gray-600">QTY:</span>
                          <div className="flex items-center border border-gray-300">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 py-1 text-sm tracking-wide min-w-12 text-center border-l border-r border-gray-300">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-normal tracking-wide">${(item.price * item.quantity).toFixed(2)}</p>
                          {item.quantity > 1 && (
                            <p className="text-xs text-gray-600 tracking-wide">${item.price} each</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6 flex justify-between items-center">
              <button className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors flex items-center">
                ← CONTINUE SHOPPING
              </button>
              <button 
                onClick={() => setCartItems([])}
                className="text-sm tracking-wide text-gray-600 hover:text-black transition-colors"
              >
                CLEAR CART
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white border border-gray-100 sticky top-24">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER SUMMARY</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 mt-3">
                    <div className="flex justify-between text-base font-normal tracking-wide">
                      <span>TOTAL</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Free Shipping Progress */}
                {subtotal < 199 && (
                  <div className="mb-6 p-4 bg-gray-50 border border-gray-100">
                    <p className="text-xs tracking-wide mb-2">
                      ADD ${(199 - subtotal).toFixed(2)} MORE FOR FREE SHIPPING
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-black h-1 rounded-full transition-all duration-300"
                        style={{ width: `${(subtotal / 199) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Checkout Button */}
                <button
      onClick={handleCheckout}
      className="w-full bg-black text-white py-4 text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center"
    >
      PROCEED TO CHECKOUT
      <ArrowRight className="w-4 h-4 ml-2" />
    </button>

                {/* Security Note */}
                <p className="text-xs text-gray-600 tracking-wide text-center mt-4">
                  Secure checkout · SSL encrypted
                </p>

                {/* Additional Benefits */}
                <div className="mt-6 space-y-2 text-xs text-gray-600 tracking-wide">
                  <div className="flex items-center justify-between">
                    <span>Free Returns</span>
                    <span>30 Days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Warranty</span>
                    <span>5 Years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Delivery</span>
                    <span>3-5 Days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;