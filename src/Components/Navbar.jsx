import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blur py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-semibold text-orange-500">
            Campus Crafters
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/blog" className="nav-link">
              Blog
            </Link>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </div>
          <div className="md:hidden">
            {/* Add mobile menu button here */}
            {/* For example, you can use an icon like this */}
            {/* <button className="mobile-menu-button">
                 <i className="fas fa-bars"></i>
               </button> */}
          </div>
          <Link to="/" className="md:hidden nav-link">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;