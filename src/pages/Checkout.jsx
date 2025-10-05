import React, { useState } from 'react';
import { Lock, Shield, Truck, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const [checkoutStep, setCheckoutStep] = useState('shipping');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const navigate = useNavigate();

  const [shippingInfo, setShippingInfo] = useState({
    email: 'john.doe@example.com',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street',
    apartment: 'Apt 4B',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'United States',
    phone: '+1 (555) 123-4567'
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: 'JOHN DOE'
  });

  const cartItems = [
    {
      id: 1,
      name: 'MODULAR SOFA',
      description: 'Sustainable fabric, 3-seater',
      price: 899,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'COFFEE TABLE',
      description: 'Solid oak wood, natural finish',
      price: 299,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop'
    }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping over $199
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (section, field, value) => {
    if (section === 'shipping') {
      setShippingInfo(prev => ({ ...prev, [field]: value }));
    } else if (section === 'payment') {
      setPaymentInfo(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkoutStep === 'shipping') {
      setCheckoutStep('payment');
    } else if (checkoutStep === 'payment') {
      setCheckoutStep('confirmation');
    }
  };

  const handleClick = () => {
    if (checkoutStep === "shipping") {
      // Continue to payment logic
      console.log("Continue to Payment");
    } else {
      // Navigate to success page
      navigate("/success");
    }
  };

  if (checkoutStep === 'confirmation') {
    return (
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-normal tracking-tight mb-4">ORDER CONFIRMED</h1>
          <p className="text-sm text-gray-600 tracking-wide mb-8">
            Thank you for your purchase. Your order has been confirmed and will be shipped within 3-5 business days.
          </p>
          <div className="bg-gray-50 p-6 border border-gray-100 mb-6">
            <p className="text-sm tracking-wide mb-2">ORDER #GD-2024-789</p>
            <p className="text-xs text-gray-600 tracking-wide">Expected delivery: Jan 25-27, 2024</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors">
              VIEW ORDER DETAILS
            </button>
            <button className="px-6 py-3 border border-gray-300 text-gray-600 text-sm font-normal tracking-wide hover:bg-gray-50 transition-colors">
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
          <button className="flex items-center text-sm tracking-wide text-gray-600 hover:text-black transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO CART
          </button>
          <h1 className="text-2xl font-normal tracking-tight mb-2">CHECKOUT</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center max-w-md mx-auto mb-8">
            <div className={`flex items-center ${checkoutStep === 'shipping' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${
                checkoutStep === 'shipping' ? 'border-black bg-black text-white' : 'border-gray-300'
              }`}>
                1
              </div>
              <span className="ml-2 text-sm tracking-wide">SHIPPING</span>
            </div>
            <div className="w-16 h-px bg-gray-300 mx-4"></div>
            <div className={`flex items-center ${checkoutStep === 'payment' ? 'text-black' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${
                checkoutStep === 'payment' ? 'border-black bg-black text-white' : 'border-gray-300'
              }`}>
                2
              </div>
              <span className="ml-2 text-sm tracking-wide">PAYMENT</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              {checkoutStep === 'shipping' ? (
                /* Shipping Information */
                <div className="space-y-6">
                  <div className="bg-white border border-gray-100 p-6">
                    <h2 className="text-lg font-normal tracking-wide mb-6">SHIPPING INFORMATION</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={shippingInfo.email}
                          onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={shippingInfo.phone}
                          onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.firstName}
                          onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.lastName}
                          onChange={(e) => handleInputChange('shipping', 'lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="md:col-span-2 space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Street Address
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.address}
                          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Apartment, Suite, etc.
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.apartment}
                          onChange={(e) => handleInputChange('shipping', 'apartment', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          City
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.city}
                          onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          State
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.state}
                          onChange={(e) => handleInputChange('shipping', 'state', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          value={shippingInfo.zipCode}
                          onChange={(e) => handleInputChange('shipping', 'zipCode', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Method */}
                  <div className="bg-white border border-gray-100 p-6">
                    <h2 className="text-lg font-normal tracking-wide mb-6">SHIPPING METHOD</h2>
                    <div className="space-y-4">
                      <label className="flex items-center justify-between p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="standard"
                            checked={shippingMethod === 'standard'}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="w-4 h-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3">
                            <span className="text-sm font-normal tracking-wide">Standard Shipping</span>
                            <p className="text-xs text-gray-600 tracking-wide">3-5 business days</p>
                          </div>
                        </div>
                        <span className="text-sm tracking-wide">FREE</span>
                      </label>

                      <label className="flex items-center justify-between p-4 border border-gray-300 cursor-pointer hover:border-black transition-colors">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shipping"
                            value="express"
                            checked={shippingMethod === 'express'}
                            onChange={(e) => setShippingMethod(e.target.value)}
                            className="w-4 h-4 text-black focus:ring-black border-gray-300"
                          />
                          <div className="ml-3">
                            <span className="text-sm font-normal tracking-wide">Express Shipping</span>
                            <p className="text-xs text-gray-600 tracking-wide">1-2 business days</p>
                          </div>
                        </div>
                        <span className="text-sm tracking-wide">$24.99</span>
                      </label>
                    </div>
                  </div>
                </div>
              ) : (
                /* Payment Information */
                <div className="space-y-6">
                  <div className="bg-white border border-gray-100 p-6">
                    <h2 className="text-lg font-normal tracking-wide mb-6">PAYMENT METHOD</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={paymentInfo.cardNumber}
                          onChange={(e) => handleInputChange('payment', 'cardNumber', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={paymentInfo.expiryDate}
                            onChange={(e) => handleInputChange('payment', 'expiryDate', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            value={paymentInfo.cvv}
                            onChange={(e) => handleInputChange('payment', 'cvv', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          value={paymentInfo.nameOnCard}
                          onChange={(e) => handleInputChange('payment', 'nameOnCard', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Billing Address */}
                  <div className="bg-white border border-gray-100 p-6">
                    <h2 className="text-lg font-normal tracking-wide mb-4">BILLING ADDRESS</h2>
                    <label className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <span className="text-sm tracking-wide">Same as shipping address</span>
                    </label>
                  </div>
                </div>
              )}

              {/* Continue Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  onClick={handleClick}
                  className="w-full bg-black text-white py-4 text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center"
                >
                  {checkoutStep === 'shipping' ? 'CONTINUE TO PAYMENT' : 'PLACE ORDER'}
                  <Lock className="w-4 h-4 ml-2" />
                </button>
                <p className="text-xs text-gray-600 tracking-wide text-center mt-4 flex items-center justify-center">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure SSL encryption
                </p>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white border border-gray-100 sticky top-24">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER SUMMARY</h2>
              </div>
              
              <div className="p-6">
                {/* Cart Items */}
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gray-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-normal tracking-wide truncate">{item.name}</h3>
                        <p className="text-xs text-gray-600 tracking-wide">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm tracking-wide flex-shrink-0">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Pricing */}
                <div className="space-y-3 border-t border-gray-100 pt-4">
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
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between text-base font-normal tracking-wide">
                      <span>TOTAL</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 p-4 bg-gray-50 border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <Truck className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-xs font-normal tracking-wide">Free Shipping</p>
                      <p className="text-xs text-gray-600 tracking-wide">Delivery in 3-5 days</p>
                    </div>
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

export default Checkout;