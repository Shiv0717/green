import React from 'react';
import { ArrowLeft, Truck, Package, CheckCircle, Download, Printer } from 'lucide-react';

const OrderDetails = () => {
  const order = {
    id: 'GD-2024-789',
    date: '2024-01-15',
    status: 'Delivered',
    statusSteps: [
      { name: 'Order Placed', date: 'Jan 15, 2024', completed: true },
      { name: 'Processing', date: 'Jan 16, 2024', completed: true },
      { name: 'Shipped', date: 'Jan 17, 2024', completed: true },
      { name: 'Delivered', date: 'Jan 19, 2024', completed: true }
    ],
    shippingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567'
    },
    billingAddress: {
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethod: {
      type: 'Credit Card',
      lastFour: '4242',
      brand: 'Visa'
    },
    items: [
      {
        id: 1,
        name: 'MODULAR SOFA',
        description: 'Sustainable fabric, 3-seater, Charcoal',
        price: 899,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
        sku: 'GD-SF-001'
      },
      {
        id: 2,
        name: 'COFFEE TABLE',
        description: 'Solid oak wood, natural finish',
        price: 299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop',
        sku: 'GD-CT-002'
      },
      {
        id: 3,
        name: 'THROW PILLOWS',
        description: 'Set of 2, organic cotton',
        price: 89,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
        sku: 'GD-TP-003'
      }
    ],
    shipping: {
      method: 'Standard Shipping',
      cost: 0,
      tracking: 'TRK789456123',
      carrier: 'FedEx',
      estimatedDelivery: 'Jan 19, 2024',
      actualDelivery: 'Jan 19, 2024'
    },
    subtotal: 1377,
    shippingCost: 0,
    tax: 110.16,
    total: 1487.16
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-gray-100 text-gray-800';
      case 'Shipped':
        return 'bg-black text-white';
      case 'Processing':
        return 'bg-gray-800 text-white';
      case 'Cancelled':
        return 'bg-gray-300 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white ">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center text-sm tracking-wide text-gray-600 hover:text-black transition-colors mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            BACK TO ORDERS
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl font-normal tracking-tight mb-2">ORDER {order.id}</h1>
              <p className="text-sm text-gray-600 tracking-wide">
                Placed on {new Date(order.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <span className={`px-3 py-1 text-xs font-normal tracking-wide ${getStatusColor(order.status)}`}>
                {order.status}
              </span>
              <div className="flex space-x-2">
                <button className="p-2 border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Order Status Timeline */}
            <div className="bg-white border border-gray-100 p-6">
              <h2 className="text-lg font-normal tracking-wide mb-6">ORDER STATUS</h2>
              
              <div className="space-y-4">
                {order.statusSteps.map((step, index) => (
                  <div key={step.name} className="flex items-start space-x-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                      step.completed ? 'bg-black' : 'bg-gray-200'
                    }`}>
                      {step.completed && (
                        <CheckCircle className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-normal tracking-wide ${
                          step.completed ? 'text-black' : 'text-gray-400'
                        }`}>
                          {step.name}
                        </span>
                        <span className="text-xs text-gray-500 tracking-wide">
                          {step.date}
                        </span>
                      </div>
                      {index < order.statusSteps.length - 1 && (
                        <div className={`w-px h-6 ml-3 mt-2 ${
                          step.completed ? 'bg-black' : 'bg-gray-200'
                        }`}></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tracking Info */}
              {order.shipping.tracking && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-normal tracking-wide mb-1">
                        {order.shipping.carrier} • {order.shipping.tracking}
                      </p>
                      <p className="text-xs text-gray-600 tracking-wide">
                        Delivered on {order.shipping.actualDelivery}
                      </p>
                    </div>
                    <Truck className="w-5 h-5 text-gray-600" />
                  </div>
                </div>
              )}
            </div>

            {/* Order Items */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER ITEMS</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-6">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row gap-6 pb-6 border-b border-gray-100 last:border-b-0 last:pb-0">
                      {/* Product Image */}
                      <div className="w-full sm:w-24 h-24 bg-gray-50 flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                          <div className="flex-1">
                            <h3 className="text-sm font-normal tracking-wide mb-1">{item.name}</h3>
                            <p className="text-xs text-gray-600 tracking-wide mb-2">{item.description}</p>
                            <p className="text-xs text-gray-500 tracking-wide">SKU: {item.sku}</p>
                          </div>
                          <div className="mt-2 sm:mt-0 text-right">
                            <p className="text-sm font-normal tracking-wide">${(item.price * item.quantity).toFixed(2)}</p>
                            <p className="text-xs text-gray-600 tracking-wide">Qty: {item.quantity}</p>
                            {item.quantity > 1 && (
                              <p className="text-xs text-gray-500 tracking-wide">${item.price} each</p>
                            )}
                          </div>
                        </div>

                        {/* Item Actions */}
                        <div className="flex space-x-4 mt-4">
                          <button className="text-xs tracking-wide text-gray-600 hover:text-black transition-colors">
                            BUY AGAIN
                          </button>
                          <button className="text-xs tracking-wide text-gray-600 hover:text-black transition-colors">
                            WRITE REVIEW
                          </button>
                          <button className="text-xs tracking-wide text-gray-600 hover:text-black transition-colors">
                            RETURN ITEM
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Order Summary */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">ORDER SUMMARY</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Shipping</span>
                    <span>{order.shippingCost === 0 ? 'FREE' : `$${order.shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm tracking-wide">
                    <span>Tax</span>
                    <span>${order.tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between text-base font-normal tracking-wide">
                      <span>TOTAL</span>
                      <span>${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-xs tracking-wide">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Method</span>
                    <span>{order.paymentMethod.brand} •••• {order.paymentMethod.lastFour}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Method</span>
                    <span>{order.shipping.method}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">SHIPPING ADDRESS</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-1 text-sm tracking-wide">
                  <p className="font-normal">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  {order.shippingAddress.apartment && <p>{order.shippingAddress.apartment}</p>}
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                  <p className="text-gray-600 mt-2">{order.shippingAddress.phone}</p>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">BILLING ADDRESS</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-1 text-sm tracking-wide">
                  <p className="font-normal">{order.billingAddress.name}</p>
                  <p>{order.billingAddress.street}</p>
                  {order.billingAddress.apartment && <p>{order.billingAddress.apartment}</p>}
                  <p>
                    {order.billingAddress.city}, {order.billingAddress.state} {order.billingAddress.zipCode}
                  </p>
                  <p>{order.billingAddress.country}</p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="bg-white border border-gray-100">
              <div className="border-b border-gray-100 px-6 py-4">
                <h2 className="text-lg font-normal tracking-wide">NEED HELP?</h2>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 text-sm tracking-wide">
                  <button className="w-full text-left py-2 border-b border-gray-100 hover:text-black transition-colors">
                    Contact Customer Support
                  </button>
                  <button className="w-full text-left py-2 border-b border-gray-100 hover:text-black transition-colors">
                    Return Policy
                  </button>
                  <button className="w-full text-left py-2 hover:text-black transition-colors">
                    Shipping Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;