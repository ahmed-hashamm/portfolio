import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import './LandingPage.css'
import { profilePic } from "../../assets";
import { FaFileDownload } from "react-icons/fa";
import resume from './Hasham.pdf'
const LandingPage = () => {
  return (
    <div
          data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full carter-one-regular md:pt-40 flex font-bold flex-col md:flex-row  justify-around items-center   h-screen bg-zinc-900   "
    >
      <div className="text-left  px-2 -mt-16 md:px-8">
        {["Hey there!", "Click", "And LetS Go"].map((item, index) => (
          <div key={index} className="masker ">
            <div className=" w-fit   flex justify-center  items-center overflow-hidden">
              {index === 1 && (
                <motion.div
                  initial={{ width: "30px",height:"30px" }}
                  animate={{ width: "70px",height:"70px" }}
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  className="w-[8vw] border-2 border-white rounded-full bg-gradient-to-br from-[#d823dfa5] to-[#23a7dfa5] cursor-pointer hover:border-white text-white h-[6vw] flex justify-center items-center relative -bottom-[0.1vw] sm:-bottom-[.8vw] lg:-bottom-[.5vw]  mr-[.02vw]  border-"
                >
                  <a href={resume} download><FaFileDownload size={25} /></a>
                  
                </motion.div>
              )}
              <h1 className="uppercase  text-zinc-100 tracking-normal  px-2  pt-[2.4vw]  -mb-[1vw] text-4xl sm:text-5xl md:text-[6vw]  font-bold   relative bottom-2 sm:bottom-[1.2vw]  font-['Founders Grotesk'] ">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
        <div className="right hidden md:flex fancy mb-20  justify-center   items-center min-w-300[px] w-[450px]">
          <div className="fancy w-full">
            <img src={profilePic} className="md:pb-12 profile" alt="" />
          </div>
        </div>

    </div>
  );
};

export default LandingPage;
