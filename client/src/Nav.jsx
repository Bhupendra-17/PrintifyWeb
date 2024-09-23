import React from 'react';
import Button from './components/Button/temp';
import Sidebar from './components/Navbar/temp';
import Logo from './components/Navbar/logo.png';
import Navbar from './components/Navbar/temp2';

function Nav() {
  return (
    <>
      <div className="flex justify-between items-center shadow-lg  w-full">
        {/* Small screens (mobile: sm) - Show Sidebar and Logo */}
        <div className="flex items-center sm:flex md:hidden lg:hidden">
          <Sidebar />
          <img src={Logo} alt="Logo" className="w-10 rounded-full ml-2" />
        </div>

        {/* Medium screens (tablets: md) - Show Navbar */}
        <div className="hidden md:flex lg:hidden w-4/5 justify-center">
          <Navbar />
        </div>

        {/* Large screens (desktops: lg and above) - Show Navbar */}
        <div className="hidden lg:flex w-5/6 justify-center">
          <Navbar />
        </div>

        {/* Buttons (Sign up, Login) visible on all screen sizes */}
        <div className="flex gap-1 pr-2 items-center">
          <Button title="Sign up" />
          <Button title="Login" />
        </div>
      </div>
    </>
  );
}

export default Nav;
