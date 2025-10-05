import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    // Navigate to home or dashboard after successful login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-black flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-normal tracking-tight text-black">
            SIGN IN
          </h2>
          <p className="mt-4 text-sm text-gray-600 tracking-wide max-w-sm mx-auto">
            Access your account to manage orders, save favorites, and track shipments
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-normal tracking-wide text-gray-700 mb-2">
                EMAIL ADDRESS
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-black text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-normal tracking-wide text-gray-700 mb-2">
                PASSWORD
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 placeholder-gray-500 text-black text-sm tracking-wide focus:outline-none focus:border-black transition-colors"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-black focus:ring-black border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600 tracking-wide">
                  Remember me
                </span>
              </label>

              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black transition-colors tracking-wide"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="group w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm font-normal tracking-wide text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors"
              >
                SIGN IN
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>

        
          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 tracking-wide">
              Don't have an account?{' '}
              <button
                onClick={() => navigate('/signup')}
                className="font-normal text-black hover:text-gray-600 transition-colors underline"
              >
                Create account
              </button>
            </p>
          </div>

          {/* Security Note */}
          <div className="mt-8 p-4 bg-gray-50 border border-gray-100 text-center">
            <p className="text-xs text-gray-600 tracking-wide">
              🔒 Your data is secure and encrypted. We never share your personal information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;