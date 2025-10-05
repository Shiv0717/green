import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-normal mb-4 tracking-tight">
            GREEN DECOR
          </h2>
          <p className="text-sm leading-6 text-gray-400 tracking-wide">
            Bringing nature to your home with sustainable and elegant decor.
            Shop eco-friendly, premium-quality home essentials for every space.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-normal mb-4 tracking-wide">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-sm font-normal mb-4 tracking-wide">SUPPORT</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Shipping & Returns
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition text-sm tracking-wide"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-normal mb-4 tracking-wide">CONTACT</h3>
          <div className="space-y-2 text-gray-400">
            <p className="flex items-center gap-2 text-sm tracking-wide">
              <Phone size={16} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2 text-sm tracking-wide">
              <Mail size={16} /> support@greendecor.com
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="px-12 border-t border-gray-800 mt-8 pt-6 text-sm tracking-wide flex flex-col md:flex-row justify-between items-center text-gray-500">
        <p>© {new Date().getFullYear()} GREEN DECOR. ALL RIGHTS RESERVED.</p>
        <p className="mt-2 md:mt-0">
          Designed & Developed by{" "}
          <span className="text-green-400 font-semibold">KSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
