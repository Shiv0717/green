import React from 'react';
import { CheckCircle, Truck, Download, Printer, ArrowRight, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();

  const orderDetails = {
    id: 'GD-2024-789',
    date: '2024-01-15',
    status: 'Confirmed',
    estimatedDelivery: 'Jan 19-22, 2024',
    email: 'john.doe@example.com',
    items: [
      {
        id: 1,
        name: 'MODULAR SOFA',
        description: 'Sustainable fabric, 3-seater, Charcoal',
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
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001'
    },
    total: 1287.92
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-normal tracking-tight mb-4">ORDER CONFIRMED</h1>
          <p className="text-sm text-gray-600 tracking-wide mb-2">
            Thank you for your purchase. Your order has been confirmed and is being processed.
          </p>
          <p className="text-sm text-gray-600 tracking-wide">
            Order #<span className="font-normal">{orderDetails.id}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER SUMMARY</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gray-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-normal tracking-wide mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-600 tracking-wide mb-2">{item.description}</p>
                        <p className="text-xs text-gray-500 tracking-wide">Qty: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-normal tracking-wide">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 mt-6 pt-6">
                  <div className="flex justify-between text-base font-normal tracking-wide">
                    <span>TOTAL</span>
                    <span>${orderDetails.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery & Actions */}
          <div className="space-y-6">
            {/* Delivery Info */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">DELIVERY</h2>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="text-sm font-normal tracking-wide">Standard Shipping</p>
                    <p className="text-xs text-gray-600 tracking-wide">
                      Est. {orderDetails.estimatedDelivery}
                    </p>
                  </div>
                </div>
                
                <div className="text-sm tracking-wide space-y-1">
                  <p className="font-normal">{orderDetails.shippingAddress.name}</p>
                  <p>{orderDetails.shippingAddress.street}</p>
                  {orderDetails.shippingAddress.apartment && (
                    <p>{orderDetails.shippingAddress.apartment}</p>
                  )}
                  <p>
                    {orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.zipCode}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Actions */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER ACTIONS</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 border border-gray-300 hover:bg-gray-50 transition-colors text-sm tracking-wide">
                    <span>VIEW ORDER DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-300 hover:bg-gray-50 transition-colors text-sm tracking-wide">
                    <span>DOWNLOAD INVOICE</span>
                    <Download className="w-4 h-4" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-300 hover:bg-gray-50 transition-colors text-sm tracking-wide">
                    <span>PRINT RECEIPT</span>
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-gray-50 border border-gray-100 p-8 text-center">
          <h3 className="text-lg font-normal tracking-wide mb-4">WHAT'S NEXT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm tracking-wide mb-1">Order Processing</p>
              <p className="text-xs text-gray-600 tracking-wide">Within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <p className="text-sm tracking-wide mb-1">Shipping</p>
              <p className="text-xs text-gray-600 tracking-wide">3-5 business days</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
              <p className="text-sm tracking-wide mb-1">Delivery</p>
              <p className="text-xs text-gray-600 tracking-wide">At your doorstep</p>
            </div>
          </div>
        </div>

        {/* Confirmation Email */}
        <div className="text-center mt-8 p-6 border border-gray-100">
          <p className="text-sm tracking-wide mb-2">
            A confirmation email has been sent to{' '}
            <span className="font-normal">{orderDetails.email}</span>
          </p>
          <p className="text-xs text-gray-600 tracking-wide">
            Check your inbox for order details and tracking information
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <Home className="w-4 h-4 mr-2" />
            CONTINUE SHOPPING
          </button>
          
          <button
            onClick={() => navigate('/profile/orders')}
            className="px-8 py-3 border border-gray-300 text-gray-600 text-sm font-normal tracking-wide hover:bg-gray-50 transition-colors"
          >
            VIEW ALL ORDERS
          </button>
        </div>

        {/* Support Info */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-600 tracking-wide">
            Need help? <button className="underline hover:text-black transition-colors">Contact Support</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;