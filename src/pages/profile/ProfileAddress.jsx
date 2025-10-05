import React, { useState } from 'react';

const ProfileAddress = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'John Doe',
      street: '123 Main Street',
      apartment: 'Apt 4B',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: 2,
      name: 'John Doe',
      street: '456 Park Avenue',
      apartment: '',
      city: 'Brooklyn',
      state: 'NY',
      zipCode: '11201',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [newAddress, setNewAddress] = useState({
    name: '',
    street: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    phone: '',
    isDefault: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewAddress(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddAddress = () => {
    if (newAddress.isDefault) {
      // Remove default from other addresses
      setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: false })));
    }

    const addressToAdd = {
      ...newAddress,
      id: Date.now()
    };

    setAddresses(prev => [...prev, addressToAdd]);
    setIsAdding(false);
    resetForm();
  };

  const handleEditAddress = (address) => {
    setEditingId(address.id);
    setNewAddress(address);
  };

  const handleUpdateAddress = () => {
    if (newAddress.isDefault) {
      setAddresses(prev => prev.map(addr => ({ ...addr, isDefault: false })));
    }

    setAddresses(prev => prev.map(addr => 
      addr.id === editingId ? newAddress : addr
    ));
    setEditingId(null);
    resetForm();
  };

  const handleDeleteAddress = (id) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
  };

  const handleSetDefault = (id) => {
    setAddresses(prev => prev.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const resetForm = () => {
    setNewAddress({
      name: '',
      street: '',
      apartment: '',
      city: '',
      state: '',
      zipCode: '',
      country: 'United States',
      phone: '',
      isDefault: false
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setIsAdding(false);
    resetForm();
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-normal tracking-tight mb-2">SAVED ADDRESSES</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Manage your shipping addresses for faster checkout
        </p>
      </div>

      {/* Add New Address Button */}
      {!isAdding && !editingId && (
        <div className="mb-6">
          <button
            onClick={() => setIsAdding(true)}
            className="px-6 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors"
          >
            + ADD NEW ADDRESS
          </button>
        </div>
      )}

      {/* Add/Edit Address Form */}
      {(isAdding || editingId) && (
        <div className="bg-white border border-gray-100 mb-6">
          <div className="border-b border-gray-100 px-6 py-4">
            <h2 className="text-lg font-normal tracking-wide">
              {editingId ? 'EDIT ADDRESS' : 'ADD NEW ADDRESS'}
            </h2>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newAddress.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="JOHN DOE"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={newAddress.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Street Address */}
              <div className="md:col-span-2 space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  Street Address
                </label>
                <input
                  type="text"
                  name="street"
                  value={newAddress.street}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="123 MAIN STREET"
                />
              </div>

              {/* Apartment/Suite */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  Apartment, Suite, etc. (Optional)
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={newAddress.apartment}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="APT 4B"
                />
              </div>

              {/* City */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="NEW YORK"
                />
              </div>

              {/* State */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={newAddress.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="NY"
                />
              </div>

              {/* ZIP Code */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={newAddress.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="10001"
                />
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                  Country
                </label>
                <select
                  name="country"
                  value={newAddress.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                >
                  <option value="United States">UNITED STATES</option>
                  <option value="Canada">CANADA</option>
                  <option value="United Kingdom">UNITED KINGDOM</option>
                </select>
              </div>

              {/* Default Address Checkbox */}
              <div className="md:col-span-2 flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={newAddress.isDefault}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <label className="text-sm font-normal tracking-wide">
                  Set as default shipping address
                </label>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex space-x-3 mt-6 pt-6 border-t border-gray-100">
              <button
                onClick={editingId ? handleUpdateAddress : handleAddAddress}
                className="px-6 py-2 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors"
              >
                {editingId ? 'UPDATE ADDRESS' : 'SAVE ADDRESS'}
              </button>
              <button
                onClick={cancelEdit}
                className="px-6 py-2 border border-gray-300 text-gray-600 text-sm font-normal tracking-wide hover:bg-gray-50 transition-colors"
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Addresses List */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div key={address.id} className="bg-white border border-gray-100">
            {/* Address Header */}
            <div className="border-b border-gray-100 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <h3 className="text-sm font-normal tracking-wide">
                    {address.name}
                  </h3>
                  {address.isDefault && (
                    <span className="px-2 py-1 bg-black text-white text-xs font-normal tracking-wide">
                      DEFAULT
                    </span>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="text-xs text-gray-600 hover:text-black transition-colors tracking-wide"
                    >
                      SET DEFAULT
                    </button>
                  )}
                  <button
                    onClick={() => handleEditAddress(address)}
                    className="text-xs text-gray-600 hover:text-black transition-colors tracking-wide"
                  >
                    EDIT
                  </button>
                  <button
                    onClick={() => handleDeleteAddress(address.id)}
                    className="text-xs text-gray-600 hover:text-red-600 transition-colors tracking-wide"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>

            {/* Address Details */}
            <div className="p-6">
              <div className="space-y-1 text-sm tracking-wide">
                <p>{address.street}</p>
                {address.apartment && <p>{address.apartment}</p>}
                <p>
                  {address.city}, {address.state} {address.zipCode}
                </p>
                <p>{address.country}</p>
                <p className="text-gray-600 mt-2">{address.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {addresses.length === 0 && !isAdding && (
        <div className="text-center py-12 border border-gray-100">
          <h3 className="text-lg font-normal tracking-wide mb-2">NO SAVED ADDRESSES</h3>
          <p className="text-sm text-gray-600 tracking-wide mb-6">
            Add your first address to get started
          </p>
          <button
            onClick={() => setIsAdding(true)}
            className="px-6 py-3 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors"
          >
            ADD YOUR FIRST ADDRESS
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileAddress;