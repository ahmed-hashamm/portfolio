import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { CiLinkedin } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <footer id="hire" className="p-12 w-full  bg-zinc-900 border-t-[1px] mt-20 border-zinc-600 text-zinc-100 flex flex-col md:flex-row gap-10 justify-around items-center">
      <div className="left md:w-1/2 ">
        <h1 className="font-semibold text-[3vw] carter-one-regular md:pl-4">Hasham Ahmed</h1>
        <p className="font-medium text-xl carter-one-regular">
          {" "}
          Click below  for any freelance work
        </p>
        <div className="fiver flex justify-start gap-3 items-center">
          <a className="flex items-center gap-2 md:pl-16" href="https://www.fiverr.com/s/dapyG2">
            <SiFiverr  size={35}/>
          <p >Hasham Ahmed</p>
          </a>
        </div>

        <h2 className="font-semibold text-[3vw] text-[#fd4141f0] md:pl-6 carter-one-regular">
          Do it... Now 😡
        </h2>
      </div>
      <div className="right space-y-3">
        <h1 className="font-semibold text-[3vw] carter-one-regular">Hire Me.</h1>
        <div className="git flex justify-start gap-3 items-center">
          <a href="https://github.com/ahmed-hashamm">
            <FaGithub  size={25}/>
          </a>
          <p>ahmed-hashamm</p>
        </div>
        <div className="gmail flex justify-start gap-3 items-center">
          <a href="https://www.google.com/gmail/about/">
            <CgMail  size={25}/>
          </a>
          <p>ahmedhashm90012@gmail.com</p>
        </div>
        <div className="linkedin flex justify-start gap-3 items-center">
          <a href="www.linkedin.com/in/hasham-ahmed-dev">
            <CiLinkedin size={25} />
          </a>
          <p>www.linkedin.com/in/hasham-ahmed-dev</p>
        </div>
      </div>
      <Link to="home"
      className=" md:fixed md:bottom-10 md:right-10  cursor-pointer"
       spy={true} 
       smooth={true} 
       offset={-100} 
       duration={500} >
      <FaArrowAltCircleUp  size={40} className=" md:bg-zinc-100 bg-zinc-900 rounded-full p-[1px] text-zinc-900" />
      </Link>
    </footer>
  );
};

export default Footer;
