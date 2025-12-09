import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for menu and close

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className='sticky top-0 flex flex-col md:flex-row justify-between items-center p-4 bg-white  z-10'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <div className='text-xl font-bold'>
          Pradeep's Portfolio
        </div>
        <button
          className='md:hidden p-2 text-black'
          onClick={handleToggle}
        >
          {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
      <div
        className={`fixed md:top-0 md:mt-0 right-0  md:p-0 h-full w-64 bg-white  transition-transform duration-300 ease-in-out mt-30 top-12 p-11 ${isOpen ? 'translate-x-0 shadow-md ' : 'translate-x-full '} md:relative md:flex md:items-center md:w-auto md:h-auto md:translate-x-0 `}
      >
        {isOpen && (
          <button
            className='absolute top-4 right-4 text-black md:hidden'
            onClick={handleClose}
          >
            {/* <FaTimes className="w-6 h-6" /> */}
          </button>
        )}
        <ul className={`flex flex-col md:flex-row md:space-x-4 md:m-0 ${isOpen ? 'mt-12' : 'mt-12'}`}>
          <li className='relative mb-2 md:mb-0'>
            <a
              className="inline-block p-4 text-black after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-width after:duration-300 after:ease hover:after:w-full"
              href="#"
              onClick={() => {
                // alert('Home clicked');
                handleClose(); // Close the menu when clicking a link
              }}
            >
              Home
            </a>
          </li>
          <li className='relative mb-2 md:mb-0'>
            <a
              className="inline-block p-4 text-black after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-width after:duration-300 after:ease hover:after:w-full"
              href="#projects"
              onClick={() => {
                // alert('Project clicked');
                handleClose(); // Close the menu when clicking a link
              }}
            >
              Project
            </a>
          </li>
          <li className='relative mb-2 md:mb-0'>
            <a
              className="inline-block p-4 text-black after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-width after:duration-300 after:ease hover:after:w-full"
              href="#skills"
              onClick={() => {
                // alert('Skills clicked');
                handleClose(); // Close the menu when clicking a link
              }}
            >
              Skills
            </a>
          </li>
          <li className='relative mb-2 md:mb-0'>
            <a
              className="inline-block p-4 text-black after:content-[''] after:block after:w-0 after:h-[2px] after:bg-black after:transition-width after:duration-300 after:ease hover:after:w-full"
              href="#contact"
              onClick={() => {
                // alert('Contact clicked');
                handleClose(); // Close the menu when clicking a link
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};  
