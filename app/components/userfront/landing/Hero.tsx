import React from "react";
import { BgImage } from "@app/components";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <BgImage alt="seismic data" src="/images/geo-tech.jpg">
      <div
        id="hero-section"
        className="w-full min-h-[35rem] pb-10 p-3 md:p-12 flex items-end text-white relative"
      >
        <div className="w-full flex-1">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-6xl md:text-7xl flex flex-col gap-3"
          >
            Geology meets <br />
            <strong className="font-extrabold text-[3rem] md:text-8xl">Technology</strong>
          </motion.h1>
        </div>
      </div>
    </BgImage>
  );
};

export default Hero;
