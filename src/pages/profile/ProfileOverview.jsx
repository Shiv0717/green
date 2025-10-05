import React, { useState } from 'react';

const ProfileOverview = () => {
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 2024'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically make an API call to save the data
  };

  return (
    <div className="max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-normal tracking-tight mb-2">PROFILE OVERVIEW</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Manage your personal information and account settings
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-gray-100">
        {/* Card Header */}
        <div className="border-b border-gray-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-normal tracking-wide">PERSONAL INFORMATION</h2>
            <button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="px-4 py-2 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors"
            >
              {isEditing ? 'SAVE CHANGES' : 'EDIT PROFILE'}
            </button>
          </div>
        </div>

        {/* Profile Form */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                First Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                />
              ) : (
                <p className="text-sm tracking-wide py-2">{profile.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Last Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                />
              ) : (
                <p className="text-sm tracking-wide py-2">{profile.lastName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                />
              ) : (
                <p className="text-sm tracking-wide py-2">{profile.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                />
              ) : (
                <p className="text-sm tracking-wide py-2">{profile.phone}</p>
              )}
            </div>

            {/* Read-only Fields */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Member Since
              </label>
              <p className="text-sm tracking-wide py-2 text-gray-600">{profile.joinDate}</p>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Account Status
              </label>
              <p className="text-sm tracking-wide py-2 text-gray-600">Active</p>
            </div>
          </div>

          {/* Additional Info */}
          {!isEditing && (
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h3 className="text-sm font-normal tracking-wide mb-4">ACCOUNT PREFERENCES</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm tracking-wide">
                <div>
                  <span className="text-gray-600">Newsletter: </span>
                  <span>Subscribed</span>
                </div>
                <div>
                  <span className="text-gray-600">Language: </span>
                  <span>English</span>
                </div>
                <div>
                  <span className="text-gray-600">Currency: </span>
                  <span>USD ($)</span>
                </div>
                <div>
                  <span className="text-gray-600">Region: </span>
                  <span>United States</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Security Note */}
      <div className="mt-6 p-4 bg-gray-50 border border-gray-100">
        <p className="text-xs text-gray-600 tracking-wide text-center">
          Your personal information is secure and protected. We never share your data with third parties.
        </p>
      </div>
    </div>
  );
}

export default ProfileOverview;