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

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='text-center'>
        <h2>Introduction</h2>
        <h1>Overview</h1>
      </motion.div> 

      <div className='flex flex-col-reverse md:flex-row justify-center items-center mt-4 max-w-7xl mx-auto leading-[30px] text-gray-200 gap-x-10'>
        <motion.h3
        variants={fadeIn("", "", 0.1, 1)}
        className="w-2/3 text-justify sm-w-1/2 flex justify-center items-center font-medium "
      >
        I'm a passionate backend developer with a strong foundation in Python, specializing in Django.I thrive on solving complex problems and creating scalable, user-friendly systems. Constantly learning and exploring new technologies, I aim to grow and contribute to impactful, innovative projects in the tech industry.
      </motion.h3>
      <div className='w-1/2'>
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
