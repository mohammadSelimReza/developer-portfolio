import React, { useEffect, useRef } from 'react';
import { styles } from '../styles';
import Typewriter from 'typewriter-effect/dist/core';
const Hero = () => {
      const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      new Typewriter(typewriterRef.current, {
        strings: ["Backend Developer", "Django Enthusiast", "API Builder"],
        autoStart: true,
        loop: true,
        delay: 75,
        deleteSpeed: 50,
        cursor:'_',
      });
    }
  }, []);
    return (
        <section className={`relative w-full h-96 mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#57caed]" />
          <div className="w-1 sm:h-32 h-40 hero-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#57caed]">Selim Reza</span>
          </h2>
          {/* <h2 className={`${styles.heroSubText} mt-2 text-white-100 w-2/3`}>
            An aspiring backend developer with a strong interest in building
            efficient and scalable applications.
          </h2> */}
          
          <h2
            className={`${styles.heroSubText} mt-2 text-white`}
            ref={typewriterRef}
          />
        </div>
      </div>

    </section>
    );
};

export default Hero;