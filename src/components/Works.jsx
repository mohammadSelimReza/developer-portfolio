import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from "swiper/modules";
const ProjectCard = ({
  index,
  name,
  feature1,
  feature2,
  feature3,
  tags,
  image,
  image2, // Added image2
  link,
  link2,
  btn,
  btn2,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Swiper for Sliding Images */}
        <div className="relative w-[350px] sm-w-full h-[250px]">
          <Swiper 
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }} 
          spaceBetween={10} 
          slidesPerView={1} 
          loop={true}
          modules={[Autoplay]}
          >
            <SwiperSlide>
              <img
                src={image}
                alt="project_image_1"
                className="w-[350px] sm-w-full h-[250px] object-fill rounded-2xl"
              />
              {/* GitHub Source Code Icon Overlay */}
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(link, "_blank")}
                className="black-gradient h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
            <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> {btn} </button>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                alt="project_image_2"
                className="w-[350px] sw-full h-[250px] object-fill rounded-2xl"
              />
              {/* GitHub Source Code Icon Overlay */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link2, "_blank")}
              className="black-gradient h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"> {btn2} </button>
            </div>
          </div>
            </SwiperSlide>
          </Swiper>

          
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{feature1}</p>
          <p className="mt-2 text-secondary text-[14px]">{feature2}</p>
          <p className="mt-2 text-secondary text-[14px]">{feature3}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
