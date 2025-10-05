import React, { useState } from 'react';

const ProfileSettings = () => {
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [preferences, setPreferences] = useState({
    newsletter: true,
    smsNotifications: false,
    emailNotifications: true,
    language: 'english',
    currency: 'usd'
  });

  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePreferenceChange = (name, value) => {
    setPreferences(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password change logic here
    console.log('Password change submitted:', passwordForm);
    setIsChangingPassword(false);
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const cancelPasswordChange = () => {
    setIsChangingPassword(false);
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="max-w-4xl space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal tracking-tight mb-2">ACCOUNT SETTINGS</h1>
        <p className="text-sm text-gray-600 tracking-wide">
          Manage your password and notification preferences
        </p>
      </div>

      {/* Change Password Section */}
      <div className="bg-white border border-gray-100">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-normal tracking-wide">PASSWORD & SECURITY</h2>
        </div>
        
        <div className="p-6">
          {!isChangingPassword ? (
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-normal tracking-wide mb-1">PASSWORD</h3>
                <p className="text-xs text-gray-600 tracking-wide">
                  Last changed 2 months ago
                </p>
              </div>
              <button
                onClick={() => setIsChangingPassword(true)}
                className="px-4 py-2 bg-black text-white text-xs font-normal tracking-wide hover:bg-gray-800 transition-colors"
              >
                CHANGE PASSWORD
              </button>
            </div>
          ) : (
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                {/* Current Password */}
                <div className="space-y-2">
                  <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwordForm.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                    placeholder="Enter current password"
                    required
                  />
                </div>

                {/* New Password */}
                <div className="space-y-2">
                  <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwordForm.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                    placeholder="Enter new password"
                    required
                  />
                  <p className="text-xs text-gray-500 tracking-wide">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwordForm.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                    placeholder="Confirm new password"
                    required
                  />
                </div>
              </div>

              {/* Password Requirements */}
              <div className="bg-gray-50 p-4 border border-gray-100">
                <h4 className="text-xs font-normal tracking-wide mb-2">PASSWORD REQUIREMENTS</h4>
                <ul className="text-xs text-gray-600 space-y-1 tracking-wide">
                  <li>• At least 8 characters</li>
                  <li>• One uppercase letter</li>
                  <li>• One number</li>
                  <li>• One special character</li>
                </ul>
              </div>

              {/* Form Actions */}
              <div className="flex space-x-3 pt-4 border-t border-gray-100">
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white text-sm font-normal tracking-wide hover:bg-gray-800 transition-colors"
                >
                  UPDATE PASSWORD
                </button>
                <button
                  type="button"
                  onClick={cancelPasswordChange}
                  className="px-6 py-2 border border-gray-300 text-gray-600 text-sm font-normal tracking-wide hover:bg-gray-50 transition-colors"
                >
                  CANCEL
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Notification Preferences */}
      <div className="bg-white border border-gray-100">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-normal tracking-wide">NOTIFICATION PREFERENCES</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {/* Email Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-normal tracking-wide mb-1">EMAIL NOTIFICATIONS</h3>
                <p className="text-xs text-gray-600 tracking-wide">
                  Receive updates about new collections and offers
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.emailNotifications}
                  onChange={(e) => handlePreferenceChange('emailNotifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
              </label>
            </div>

            {/* Newsletter */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-normal tracking-wide mb-1">NEWSLETTER</h3>
                <p className="text-xs text-gray-600 tracking-wide">
                  Weekly updates on sustainable living tips
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.newsletter}
                  onChange={(e) => handlePreferenceChange('newsletter', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
              </label>
            </div>

            {/* SMS Notifications */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-normal tracking-wide mb-1">SMS NOTIFICATIONS</h3>
                <p className="text-xs text-gray-600 tracking-wide">
                  Order updates and shipping notifications
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={preferences.smsNotifications}
                  onChange={(e) => handlePreferenceChange('smsNotifications', e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Account Preferences */}
      <div className="bg-white border border-gray-100">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-normal tracking-wide">ACCOUNT PREFERENCES</h2>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Language
              </label>
              <select
                value={preferences.language}
                onChange={(e) => handlePreferenceChange('language', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
              >
                <option value="english">ENGLISH</option>
                <option value="spanish">SPANISH</option>
                <option value="french">FRENCH</option>
              </select>
            </div>

            {/* Currency */}
            <div className="space-y-2">
              <label className="block text-xs font-normal tracking-wide text-gray-600 uppercase">
                Currency
              </label>
              <select
                value={preferences.currency}
                onChange={(e) => handlePreferenceChange('currency', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
              >
                <option value="usd">USD ($)</option>
                <option value="eur">EUR (€)</option>
                <option value="gbp">GBP (£)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white border border-gray-100">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-lg font-normal tracking-wide text-gray-600">ACCOUNT ACTIONS</h2>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-normal tracking-wide mb-1">DELETE ACCOUNT</h3>
                <p className="text-xs text-gray-600 tracking-wide">
                  Permanently delete your account and all data
                </p>
              </div>
              <button className="px-4 py-2 border border-red-600 text-red-600 text-xs font-normal tracking-wide hover:bg-red-600 hover:text-white transition-colors">
                DELETE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSettings;