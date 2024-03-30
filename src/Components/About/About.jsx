import React from "react";
import { motion } from "framer-motion";
import { html, js, css, react, tailwind, fiver, upwork, coffeCastle, coffeelogo, eatsLogo } from "../../assets";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <div className="w-full py-20 my-16 bg-zinc-100 p-14 rounded-t-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-[3vw]  leading-[3.5vw] tracking-tight'>
          Hello! I’m Hasham Ahmed, a passionate frontend developer with a flair
          for creating captivating web experiences. As a current computer
          science student, I combine theoretical knowledge with practical skills
          to deliver top-notch solutions. With expertise in React,
          HTML5,Tailwind and CSS3, I transform designs into functional,
          responsive websites..
        </h1>
        <div className="w-full   flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-start md:flex gap-5 border-t-[1px] mt-20 border-[#abb77e]">
          <div className="sm:w-1/2 flex flex-col justify-start items-start">
            <h1 className="sm:text-[3vw] text-3xl font-extrabold pt-20">
              Skills:
            </h1>
            <h2 className="sm:text-[2vw] text-3xl  mt-10 py-3 flex gap-2 ">
              Trust me .. I have awsome skills 🥺
            </h2>
            <div className="hidden lg:flex flex-col">

            
            <h1 className="sm:text-[3vw] text-3xl font-extrabold pt-20">
              Work Experience:
            </h1>
            <h2 className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex gap-2 ">
              Working on online freelance platforms
            
              <span className="w-10 rounded-full outline ml-2 p-2">
                <img src={fiver} />
              </span>
              <span className="w-10 rounded-full outline p-2">
                <img src={upwork} />
              </span>
            </h2>
            <h2 className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex gap-2 ">
              Working for local brands and developing stunning landing pages and websites for them.
            
            </h2>
            <div className="w-80 flex justify-center items-center">

              <span className="w-36 h-16">
                <img src={coffeelogo} /> 
              </span>
              <span className="w-32  ">
                <img src={eatsLogo} /> 
              </span>
              </div>
              
            </div>
            
          </div>
          <div className="w-right flex mt-14">
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              viewport={{ margin: "-40px" }}
              transition={{ duration: 8.5, repeat: Infinity, ease: "linear" }}
              className="w-mainCircle"
            >
              <div className="w-secCircle">
                <img src={css} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={html} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={react} alt="" />
              </div>{" "}
              <div className="w-secCircle">
                <img src={js} alt="" />
              </div>
              <div className="w-secCircle">
                <img src={tailwind} alt="" />
              </div>
            </motion.div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
          </div>
        </div>
          <div className="flex flex-col  justify-start items-start lg:hidden">
          <h1 className="sm:text-[3vw] text-3xl font-extrabold pt-20">
              Work Experience:
            </h1>
            <h2 className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex  gap-2 ">
              Working on online freelance platforms
            </h2>
            <div className="flex w-full gap-3 justify-center items-center mt-3">

              <span className="w-10 rounded-full outline md:ml-2  p-2">
                <img src={fiver} />
              </span>
              <span className="w-10 rounded-full outline p-2">
                <img src={upwork} />
              </span>
            </div>
            <h2 className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex gap-2 ">
              Working for local brands and developing stunning landing pages and websites for them.
            
            </h2>
            <div className="w-80 flex justify-start items-center">

<span className="w-36 h-16">
  <img src={coffeelogo} /> 
</span>
<span className="w-32  ">
  <img src={eatsLogo} /> 
</span>

</div>
          </div>
      </div>
    </div>
  );
};

export default About;
