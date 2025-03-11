import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { me } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const handleResume = () =>{
  window.open("/cv/Resume-of-Selim Reza.pdf", "_blank");
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <h2>Introduction</h2>
        <h1>Overview</h1>
      </motion.div> 

      <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-4 max-w-7xl mx-auto leading-[30px] text-gray-200 gap-x-10'>
       <div className="w-2/3">
       <motion.h3
        variants={fadeIn("", "", 0.1, 1)}
        className="text-justify flex justify-center items-center font-medium "
      >
        Passionate backend developer specializing in Django with a strong Python foundation. I love solving complex problems and building scalable systems while continuously learning and exploring new technologies
      </motion.h3>
      <div className="flex justify-center items-center mt-4">
      <button
            onClick={handleResume}
            className="border-2 border-blue-400 text-white font-bold py-2 px-4 rounded-lg 
             hover:bg-blue-400 hover:text-black transition-all duration-300"
          >
            Get My Resume
          </button>
      </div>
       </div>
      <div className='w-1/3 flex justify-end items-center'>
        <img src={me} className="rounded-full" alt="" />
      </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
