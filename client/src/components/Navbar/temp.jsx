import React, { useState, useEffect, useRef } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Reference to the sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        ref={sidebarRef} // Attach the ref to the sidebar div
        className={`fixed top-0 left-0 z-10 h-full w-64 backdrop-blur-sm bg-neutral-500/30 py-4 pl-4 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleSidebar}
          className="p-2 text-2xl text-green-500 rounded-lg hover:bg-gray-100 transition"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <ul>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#catalog">Catalog</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#how">How It Works</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#price">Pricing</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#blog">Blog</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#services">Services</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#use">Use-cases</a>
          </li>
          <li className="py-1.5 -ml-2 px-2 w-full hover:text-green-700 hover:font-semibold">
            <a href="#help">Need Help?</a>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex ">
        <button
          onClick={toggleSidebar}
          className="m-4 p-2 text-2xl text-green-500 rounded-lg hover:bg-gray-100 transition"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
