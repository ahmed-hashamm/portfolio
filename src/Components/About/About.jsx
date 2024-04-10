import React from "react";
import { motion } from "framer-motion";
import {
  html,
  js,
  css,
  react,
  tailwind,
  fiver,
  upwork,
  coffeCastle,
  coffeelogo,
  eatsLogo,
} from "../../assets";
import "./About.css";
import { DiSnapSvg } from "react-icons/di";

const About = () => {
  return (
    <section id="about">
      <div className="w-full p-24 my-16 bg-zinc-100  rounded-t-3xl text-black">
        <h1 className='font-["Neue_Montreal"] text-[3vw]  leading-[3.5vw] tracking-tight'>
          Hello! I'm Hasham Ahmed, a passionate frontend developer with a flair
          for creating captivating web experiences. As a current computer
          science student, I combine theoretical knowledge with practical skills
          to deliver top-notch solutions. With expertise in React,
          HTML5,Tailwind and CSS3, I transform designs into functional,
          responsive websites..
        </h1>
        <div className="w-full  flex-col lg:flex-row items-start lg:items-center justify-center md:items-center lg:justify-start md:flex gap-5 border-t-[1px] mt-20 border-[#abb77e]">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start ">
            <h2 className="sm:text-[3vw] text-3xl font-extrabold pt-20">
              Skills:
            </h2>
            <p className="sm:text-[2vw] text-3xl  mt-10 py-3 flex gap-2 ">
              Trust me .. I have awsome skills 🥺
            </p>
            <div className="hidden lg:flex flex-col">
              <h2 className="sm:text-[3vw] text-3xl font-extrabold ">
                Work Experience:
              </h2>
              <div className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-start flex gap-2 ">
                Working on online freelance platforms
                <div className="w-10 rounded-full outline p-2">
                  <img src={fiver} />
                </div>
                <div className="w-10 rounded-full outline p-2">
                  <img src={upwork} />
                </div>
              </div>
              <p className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex gap-2 ">
                Working for local brands and developing stunning landing pages
                and websites for them.
              </p>
              <div className="md:w-full flex justify-start md:justify-center items-center ">
                <div className="w-36 h-16">
                  <img src={coffeelogo} />
                </div>
                <div className="w-32  ">
                  <img src={eatsLogo} />
                </div>
              </div>
            </div>
          </div>
          <section className="w-right flex  mt-14 mx-0 px-0 ">
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
          </section>
        </div>
        <section className="flex flex-col  justify-start items-start mt-32 lg:hidden">
          <h1 className="sm:text-[3vw] text-3xl font-extrabold">
            Work Experience:
          </h1>
          <p className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex  gap-2 ">
            Working on online freelance platforms
          </p>
          <div className="flex w-full gap-3 justify-center items-center mt-3">
            <div className="w-10 rounded-full outline md:ml-2  p-2">
              <img src={fiver} />
            </div>
            <div className="w-10 rounded-full outline p-2">
              <img src={upwork} />
            </div>
          </div>
          <p className="sm:text-[2vw] text-3xl  mt-10 py-3 items-center justify-center flex gap-2 ">
            Working for local brands and developing stunning landing pages and
            websites for them.
          </p>
          <div className=" flex w-full justify-start md:justify-center items-center">
            <div className="w-36 h-16">
              <img src={coffeelogo} />
            </div>
            <div className="w-32  ">
              <img src={eatsLogo} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;
