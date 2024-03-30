import { BrowserRouter } from "react-router-dom";
import {Link} from 'react-scroll'           
import { useState } from "react";
import { close, menu, logo } from "../assets";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      link: "home",
    },
    {
      title: "About",
      link: "about",
    },
    {
      title: "Portfolio",
      link: "portfolio",
    },
    {
      title: "Hire me",
      link: "hire",
    },
  ];
  const [toggle, setToggle] = useState(false);
  return (
    
    <nav id="home" className="w-full carter-one-regular fixed md:absolute text-white  z-50 px-10 sm:px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <h2 className="font-semibold text-2xl text-[#b20ddfa5]">Hasham.</h2>
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav,index) => (
          <li
            key={nav.title}
            className={`font-poppins font-normal cursor-pointer text-[16px]  ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <Link
              className={`text-md font-medium capitalize ${
                index === 4 && "md:ml-24"
              } `}
              to={nav.link}
              spy={true} 
              smooth={true} 
              offset={50} 
              duration={1000} 
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-1  justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? `flex` : "hidden"
          } p-6 bg-black-gradient absolute top-20 bg-zinc-100 text-zinc-900 ring-zinc-900 ring-2 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col   justify-end items-center flex-1">
            {navLinks.map((nav,index) => (
              <li
              key={index}
              className={`font-poppins font-normal cursor-pointer text-[16px]  ${
                index === navLinks.length - 1 ? "mr-0" : "mb-10"
              } `}
              >
                <Link to={nav.link}  spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} >{nav.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
           
  );
};

export default Navbar;
