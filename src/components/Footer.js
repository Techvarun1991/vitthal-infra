import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-6 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Address Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Address</h3>
          <p className="text-gray-400">
            A12 Krushnai Apartment Manaji Nagar, Narhe Pune <br />
            Pune, Maharashtra, <br />
            411041
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400">Phone: +91 (726) 301 0627</p>
        </div>

        {/* Email Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Email</h3>
          <p className="text-gray-400">
            Email:{" "}
            <a
              href="mailto:vitthalinfra7078@gmail.com"
              className="text-blue-400 hover:underline"
            >
              vitthalinfra7078@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Vitthal Infra. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
