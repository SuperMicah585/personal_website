import React from 'react';
import { motion } from "framer-motion";
import climbingmap from './project_images/climbingmap.jpeg';
import jasonart from './project_images/Jasonart.jpeg';
import twiliomap from './project_images/twiliomap.jpg';
import worldle from './project_images/worldle.jpg';

const ProjectGrid = () => {
  const images = [
    { url: 'https://climbwfriends-production.up.railway.app/demo/', name: 'Climb w Friends', image: climbingmap },
    { url: 'https://jasonwadephelps-art-production.up.railway.app/', name: 'Jason Art', image: jasonart },
    { url: 'https://twilio-prefix-map-na-8377-dev.twil.io/index.html', name: 'Twilio Prefix Map', image: twiliomap },
    { url: 'https://supermicah585.github.io/Worldle_V2/', name: 'Worldle', image: worldle }
  ];

  return (
    <div className="grid grid-cols-2 h-screen"> {/* Add h-screen for full height */}
      {images.map((imageObj, index) => (
        <a href={imageObj.url} key={index} className="relative w-full h-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
            className="relative flex items-center justify-center w-full h-full group overflow-hidden cursor-pointer"
          >
            <motion.img
              whileHover={{
                filter: 'blur(2px)',
                scale: 1.1,
                opacity: 0.5,
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
              }}
              src={imageObj.image}
              alt={imageObj.name}
              className="object-cover w-full h-full" // Use object-cover for full container coverage
            />
            <div className="absolute inset-0 flex items-center justify-center text-black text-opacity-0 group-hover:text-opacity-100 pointer-events-none">
              <div className="text-center font-termina text-7xl font-black">
                {imageObj.name}
              </div>
            </div>
          </motion.div>
        </a>
      ))}
    </div>
  );
};

export default ProjectGrid;
