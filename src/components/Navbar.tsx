import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const serviceItems = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'API Integration', path: '/services/api-integration' },
    { name: 'Other Services', path: '/services/other-services' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              RivaaL dESA
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-blue-400 transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-blue-400' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl py-2"
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-all duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-200"
            >
              Free Consultation
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800 rounded-lg mt-2 p-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            {serviceItems.map((service) => (
              <Link
                key={service.name}
                to={service.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                {service.name}
              </Link>
            ))}
            <button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full font-medium">
              Free Consultation
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;