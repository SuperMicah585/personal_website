import React,{forwardRef,useState,useRef} from 'react'
import beach_house_mp3 from './beach_house.mp3'
const Personal_Context = forwardRef(({windowWidth}, ref) =>{

  const [musicON, setMusicOn] = useState(false)

  const musicSVG = (boolean) =>{

    return(boolean?<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
    </svg>:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg>
)
}

const handleMusicClick = () =>{
   togglePlayPause()


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
  



        <div className = ' absolute h-screen w-content flex items-center justify-center top-0 left-0'>
        <div style={{
  textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black'
}} ref={ref} className = 'p-10 relative w-screen text-8xl sm:text-9xl font-monet left-0 flex flex-col items-center gap-20 text-blue-500 font-black opacity-50'>   

            <div className = 'w-full flex justify-center xl:justify-start'> HEY, </div>

            <div className='w-full flex justify-center' > I'M</div>

            <div className='w-full flex justify-center xl:justify-end' > MI<div onClick = {handleMusicClick} className = { `${musicON?'text-yellow-300':''} flex items-center cursor-pointer hover:opacity-50`}> 
        {musicSVG(musicON)}</div> <div className ={`${musicON?'text-yellow-300':''}`}> AH</div>
 </div>




            </div>


        </div>

            
            
            
            

        </>
    )
}); export default Personal_Context;