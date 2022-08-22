import Links from "./Links";
import Social from "./Social";
import logo from "../assets/logo.png";
import menu from "../images/menu.svg";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState("home");

  const handleMenu = (e) => {
    setShowMenu(!showMenu);
  };

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  window.addEventListener("click", (e) => {
    if (e.target.id !== "menu") {
      setShowMenu(false);
    }
  });

  return (
    <div className='flex bg-color1 text-white justify-end  md:justify-center align-center h-16 px-4 py-2'>
      <div className='lg:hidden'></div>
  
      <div className='flex flex-col h-full justify-between items-end relative'>
        <img
          id='menu'
          src={menu}
          alt='ham burger manu icon'
          className='w-auto float-right h-8 mt-2 lg:hidden'
          onClick={handleMenu}
        />
        <div
          className={`${
            showMenu ? "show" : "hide"
          } flex flex-col text-white bg-gray-900 absolute top-14 -right-4 z-20 px-8 py-10 text-xl overflow-x-auto w-60 space-y-8 lg:hidden`}
        >
          <Links />
          <Social />
        </div>
        <div className='hidden lg:block space-x-10 text-lg font-semibold mt-2'>
          <Links handleActive={handleActive} active={active} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
