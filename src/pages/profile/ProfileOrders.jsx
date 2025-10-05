import React from 'react';
import { useNavigate } from "react-router-dom";
const ProfileOrders = () => {

  const navigate = useNavigate();


  const orders = [
    {
      id: 'GD-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      items: [
        { name: 'Modular Sofa', quantity: 1, price: '$899' },
        { name: 'Coffee Table', quantity: 1, price: '$299' }
      ],
      total: '$1,198',
      tracking: 'TRK123456789'
    },
    {
      id: 'GD-2024-002',
      date: '2024-01-08',
      status: 'Processing',
      items: [
        { name: 'Platform Bed', quantity: 1, price: '$1,299' },
        { name: 'Nightstand', quantity: 2, price: '$199' }
      ],
      total: '$1,697',
      tracking: 'TRK987654321'
    },
    {
      id: 'GD-2023-156',
      date: '2023-12-20',
      status: 'Delivered',
      items: [
        { name: 'Dining Table', quantity: 1, price: '$699' },
        { name: 'Dining Chairs', quantity: 4, price: '$149' }
      ],
      total: '$1,295',
      tracking: 'TRK456789123'
    },
    {
      id: 'GD-2023-142',
      date: '2023-11-30',
      status: 'Cancelled',
      items: [
        { name: 'Bookshelf', quantity: 1, price: '$459' }
      ],
      total: '$459',
      tracking: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-gray-100 text-gray-800';
      case 'Processing':
        return 'bg-black text-white';
      case 'Shipped':
        return 'bg-gray-800 text-white';
      case 'Cancelled':
        return 'bg-gray-300 text-gray-600';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

 

  const handleDetails = () => {
    navigate("/profile/details");
  };

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-normal tracking-tight mb-2">ORDER HISTORY</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Review your past orders and track current shipments
        </p>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white border border-gray-100">
            {/* Order Header */}
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="space-y-2 sm:space-y-0">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-normal tracking-wide">ORDER {order.id}</span>
                    <span className={`px-3 py-1 text-xs font-normal tracking-wide ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600 tracking-wide block sm:inline sm:ml-4">
                    PLACED ON {new Date(order.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    }).toUpperCase()}
                  </span>
                </div>
                <div className="mt-2 sm:mt-0">
                  <span className="text-lg font-normal tracking-wide">{order.total}</span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="p-6">
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-b-0">
                    <div className="flex-1">
                      <h3 className="text-sm font-normal tracking-wide">{item.name}</h3>
                      <p className="text-xs text-gray-600 tracking-wide mt-1">QTY: {item.quantity}</p>
                    </div>
                    <span className="text-sm tracking-wide">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Order Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 pt-6 border-t border-gray-100">
                <div className="space-y-2 sm:space-y-0 sm:space-x-4">
                  <button  onClick={handleDetails} className="px-4 py-2 border border-black text-black text-xs font-normal tracking-wide hover:bg-black hover:text-white transition-colors">
                    VIEW ORDER DETAILS
                  </button>
                  {order.status === 'Delivered' && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 text-xs font-normal tracking-wide hover:bg-gray-50 transition-colors ml-0 sm:ml-2">
                      REORDER
                    </button>
                  )}
                  {order.tracking && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-600 text-xs font-normal tracking-wide hover:bg-gray-50 transition-colors ml-0 sm:ml-2">
                      TRACK PACKAGE
                    </button>
                  )}
                </div>
                {order.tracking && (
                  <div className="mt-4 sm:mt-0">
                    <span className="text-xs text-gray-600 tracking-wide">
                      TRACKING: {order.tracking}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (commented out for demo) */}
      {/* 
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <ShoppingBag size={48} className="mx-auto" />
        </div>
        <h3 className="text-lg font-normal tracking-wide mb-2">NO ORDERS YET</h3>
        <p className="text-sm text-gray-600 tracking-wide mb-6">
          Start shopping to see your orders here
        </p>
        <button className="px-6 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors">
          START SHOPPING
        </button>
      </div>
      */}

      {/* Order Stats */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-50 p-6 border border-gray-100">
          <h3 className="text-sm font-normal tracking-wide mb-2">TOTAL ORDERS</h3>
          <p className="text-2xl font-normal tracking-tight">4</p>
        </div>
        <div className="bg-gray-50 p-6 border border-gray-100">
          <h3 className="text-sm font-normal tracking-wide mb-2">TOTAL SPENT</h3>
          <p className="text-2xl font-normal tracking-tight">$4,649</p>
        </div>
        <div className="bg-gray-50 p-6 border border-gray-100">
          <h3 className="text-sm font-normal tracking-wide mb-2">MEMBER SINCE</h3>
          <p className="text-2xl font-normal tracking-tight">2023</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileOrders;