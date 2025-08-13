import React,{useState,useEffect,forwardRef} from 'react'
import { motion } from "framer-motion";
import twiliomap from './project_images/twiliomap.jpg';
import climbwfriendsv2 from './project_images/climb_w_friends_v2.jpg'
import SproutMe from './project_images/SproutMe.jpg'
import TFTPad from './project_images/tftpad.png'

const ProjectGrid = forwardRef((_, ref) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 

  const handleResize = () => {
    setWindowWidth(window.innerWidth); // Update the window width state when the window is resized
  };

  // Add the resize event listener when the component mounts
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const images = [
    { url: 'https://climbwithfriends.net/', github: 'https://github.com/SuperMicah585/climb_w_friends_v2',name: 'Climb w Friends', image: climbwfriendsv2 },
    { url: 'https://sproutme-please.com/', github: 'https://github.com/SuperMicah585/SproutMe',name: 'SproutMe', image: SproutMe },
    { url: 'https://tftpad.com/', github: 'https://github.com/SuperMicah585/TFTPad', name: 'TFTPad', image: TFTPad },
    { url: 'https://twilio-prefix-map-na-8377-dev.twil.io/index.html', github: 'https://github.com/TwilioMicah/Area_Code_Map', name: 'Twilio Prefix Map', image: twiliomap },
    

  ];



  const svgICons = [

    {name: 'Github',svg:<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="size-12" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
</svg>},

{name: 'Website',svg:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
</svg>
},
  ]


 const handleIconClick = (svg,imageObj) =>{
  const urlToOpen = svg==='Website'?imageObj.url:imageObj.github
  return window.open(urlToOpen, "_blank")
  
 }
 

 return (
<div ref = {ref} className={`${windowWidth>650?'p-10':'p-5'} box-border h-content w-screen bg-zinc-900`}>
 
    <div className = 'w-full flex max-[650px]:text-3xl max-[650px]:justify-center text-opacity-75 font-semibold top-0 text-yellow-300 z-25 text-5xl font-termina'>
              <div className = ' flex'>  
              PROJECTS
              </div> 
      </div>
    
    <div className = {`${windowWidth>650?'mt-20':'mt-10'} grid grid-cols-1 lg:grid-cols-2 gap-5`}>    
      {/* Loop over images array */}
      {images.map((imageObj, index) => (
        <div className="relative object-contain" key={index}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
            exit={{ opacity: 0 }}
            className="relative flex items-center justify-center w-full h-full group rounded overflow-hidden bg-white"
          >
            <img

              src={imageObj.image}
              alt={imageObj.name}
              className="object-cover w-full h-full group-hover:scale-125 group-hover:blur-md transition duration-2000 pointer-events-none" // Use object-cover for full container coverage
            />

            {/* This div wraps the background and name, but has pointer-events-none to allow hover on background */}
            <div className="absolute inset-0 flex items-center justify-center
             text-black text-opacity-0 group-hover:text-opacity-100 group-hover:bg-opacity-50 group-hover:bg-white pointer-events-none">
              <div className={`text-center font-termina ${windowWidth<651?'text-5xl':'text-7xl'} font-black cursor-pointer`}>
                {imageObj.name}

                {/* Container for clickable SVG icons */}
                <div className="flex gap-10 justify-center items-center w-full h-full">
                  {/* Loop over SVG icons */}
                  {svgICons.map((svg, svgIndex) => (
                    <div
                      key={svgIndex}
                      className="flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-slate-500 hover:bg-opacity-50 rounded-full p-1 pointer-events-auto" // Allow pointer events for the SVG wrapper
                      onClick={() => handleIconClick(svg.name,imageObj)} // Call the click handler with the svg
                    >
                      {svg.svg}
                  
                    </div>
                  ))}


                </div>

              </div>
            </div>
          </motion.div>
        </div>
      ))}
      </div>
    </div>

);

});

export default ProjectGrid;
