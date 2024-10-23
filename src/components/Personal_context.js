import React,{forwardRef,useState,useRef} from 'react'
import beach_house_mp3 from './beach_house.mp3'
const Personal_Context = forwardRef(({windowWidth}, ref) =>{

  const [musicON, setMusicOn] = useState(false)

const handleMusicClick = () =>{
   if(!musicON){
   togglePlayPause()
   }


}
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

    return(
        <>
        <GifComponent/>
  



        <div ref={ref}  className = ' absolute h-screen w-content flex items-center justify-center top-0 left-0'>
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