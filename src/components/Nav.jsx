import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className='sticky top-0 bg-white/90 backdrop-blur-md shadow-lg z-50 border-b border-gray-200/20'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div className='text-xl font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors duration-300'>
              Pradeep's Portfolio
            </div>

            {/* Desktop Menu */}
            <ul className='hidden md:flex space-x-8'>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-all duration-300 relative after:content-[''] after:block after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className='md:hidden p-3 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:scale-110'
            >
              <FaBars className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-white/95 to-gray-50/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out z-50 md:hidden border-l border-white/20 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/30 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-xl font-bold text-gray-800">Explore</h3>
          <button
            onClick={closeMenu}
            className="p-2 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <FaTimes className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="p-6">
          <ul className="space-y-3">
            <li className={`animate-slide-in-right ${isOpen ? 'animate-active' : ''}`} style={{ animationDelay: '0.1s' }}>
              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center p-4 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300 animate-pulse"></span>
                <span className="animate-text-reveal">Home</span>
              </a>
            </li>
            <li className={`animate-slide-in-right ${isOpen ? 'animate-active' : ''}`} style={{ animationDelay: '0.2s' }}>
              <a
                href="#projects"
                onClick={closeMenu}
                className="flex items-center p-4 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300 animate-pulse"></span>
                <span className="animate-text-reveal">Projects</span>
              </a>
            </li>
            <li className={`animate-slide-in-right ${isOpen ? 'animate-active' : ''}`} style={{ animationDelay: '0.3s' }}>
              <a
                href="#skills"
                onClick={closeMenu}
                className="flex items-center p-4 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300 animate-pulse"></span>
                <span className="animate-text-reveal">Skills</span>
              </a>
            </li>
            <li className={`animate-slide-in-right ${isOpen ? 'animate-active' : ''}`} style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                onClick={closeMenu}
                className="flex items-center p-4 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md group"
              >
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300 animate-pulse"></span>
                <span className="animate-text-reveal">Contact</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <p className="text-center text-sm text-gray-500 mt-4">Pradeep's Portfolio</p>
        </div>
      </div>
    </>
  );
};