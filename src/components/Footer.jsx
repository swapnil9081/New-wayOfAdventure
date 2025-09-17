// 

import { FaFacebook, FaInstagram, FaReddit } from "react-icons/fa";
import { XLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Contact & Social */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p>Email: yadavsaurbh915@gmail.com</p>
          <p>Phone: +91 7589840945</p>
          <p>Phone: +91 6283675640</p>
          <p>Phone: +91 6306990922</p>
          <div className="flex space-x-4 mt-4 text-2xl">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange-500">
              <FaReddit />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-200">
              <XLogo weight="bold" size={28} />
            </a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Cancellation Policy</a></li>
            <li><a href="#" className="hover:text-white">Safety</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Column 3: Empty for future */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Coming Soon</h3>
          <p className="text-gray-400">This section will be updated later.</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} TripWithriends. All rights reserved.
      </div>
    </footer>
  );
}
