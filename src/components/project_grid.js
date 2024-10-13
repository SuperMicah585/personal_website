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



  const svgICons = [

    {name: 'Github',svg:<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>},

{name: 'Website',svg:<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
<path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>},
  ]


 const handleIconClick = () =>{

  return(
    console.log("Hi")
  )
 }
 

  return (
    <>
    <div className="grid grid-cols-2 p-5 gap-5 h-content bg-zinc-900 shadow-lg	"> {/* Add h-screen for full height */}
      {images.map((imageObj, index) => (
        <div className="relative w-full h-full">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
            className="relative flex items-center justify-center w-full h-full group overflow-hidden bg-white"

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
              <div className="text-center font-termina text-7xl font-black cursor-pointer">
                {imageObj.name}
                <div onClick={() => handleIconClick} className = 'grid grid-cols-2 place-items-center w-full h-full'> 
                {svgICons.map((svg) =>
                
                <div className = 'flex item-center justify-center' onClick={handleIconClick}>{svg.svg}<span className = 'text-sm'> {svg.name}</span>  </div>
                )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectGrid;
