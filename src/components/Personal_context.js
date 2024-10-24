import React,{forwardRef,useState,useEffect,useRef} from 'react'
import beach_house_mp3 from './beach_house.mp3'
const Personal_Context = forwardRef((_, ref) =>{

  const [musicON, setMusicOn] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
const handleMusicClick = () =>{
   if(!musicON){
   togglePlayPause()
   }


}

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
    const GifComponent = () => {
        return (
          <div className="flex items-center justify-center bg-zinc-900 h-screen w-screen">
            <img 
              src="https://media.tenor.com/LlbU6ZEXGHsAAAAi/bear-dance.gif" 
              alt="Banana Cheerer"
              className="h-full w-full object-contain opacity-25 " // You can customize the size and styling
            />
          </div>
        );
      };

      const audioRef = useRef(new Audio(beach_house_mp3));

      const togglePlayPause = () => {
        if (musicON) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setMusicOn(!musicON); // Toggle play state
    };

    const handleGitIconClick = () =>{

      return(
        window.open("https://github.com/SuperMicah585/personal_website", "_blank")
      )
    }

    return(
        <>
        <GifComponent/>
  



        <div ref={ref}  className = ' absolute h-screen w-content flex items-center justify-center top-0 left-0'>
        <div onClick = {handleGitIconClick} className = {`absolute z-50 flex items-center text-yellow-300 justify-center group-hover:opacity-100 hover:bg-slate-500 cursor-pointer hover:bg-opacity-50 rounded-full p-1 ${windowWidth>450?'left-5':'left-1'} top-1`}>
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" stroke="currentColor" fill="none" class={`${windowWidth>450?'size-10':'size-7'}`} viewBox="0 0 30 30">
      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
  </svg>

</div>
      <div style={{
  textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
}} className = {`p-10 transition-opacity duration-[10000ms] ${musicON?'opacity-0':'opacity-50'} relative w-screen text-8xl sm:text-9xl font-monet left-0 flex flex-col items-center gap-20 text-blue-500 font-black`}>   

            <div className = 'w-full flex justify-center xl:justify-start'> HEY, </div>

            <div className='w-full flex justify-center' > I'M</div>

    

            <div className='w-full flex justify-center xl:justify-end' >
            <div className = 'flex flex-col items-center'>


            <span onClick = {handleMusicClick} className = { `${musicON?'text-yellow-300 animate-pulse':'cursor-pointer'} flex items-center hover:opacity-50`}>MICAH </span>

            <div className = {`${!musicON?'animate-bounce':'text-yellow-300'}`} > 



            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
</svg>


</div>
 </div>
 
 </div>



            </div>


        </div>

            
            
            
            

        </>
    )
}); export default Personal_Context;