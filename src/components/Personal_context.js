import React,{useState,useEffect,forwardRef} from 'react'

const Personal_Context = forwardRef((_, ref) =>{

    const GifComponent = () => {
        return (
          <div className="flex items-center justify-center bg-zinc-900 h-screen w-screen">
            <img 
              src="https://media.tenor.com/LlbU6ZEXGHsAAAAi/bear-dance.gif" 
              alt="Banana Cheerer"
              className="h-screen z-50 opacity-25 " // You can customize the size and styling
            />
          </div>
        );
      };

const textArray = [
'HEY,','','',
'',"I'M",'',
'','','MICAH!']

    return(
        <>
        <GifComponent/>
        <div ref={ref} className = 'absolute top-0 left-0 text-md h-screen w-screen grid grid-cols-3 place-items-center p-10'>
     
            {

            textArray.map((text)=>
                text ==='WELCOME' || text ==='TO MY' || text === 'PORTFOLIO'?
                <div className = 'text-7xl text-blue-500 text-wrap object-fit font-moret overflow-hidden text-ellipsis'>{text}</div>:
                <div className = 'text-9xl text-blue-500 text-opacity-75 text-wrap object-fit font-moret overflow-hidden text-ellipsis'>{text}</div>
                
                )

            
            
            
            }

                
        </div>
        </>
    )
}); export default Personal_Context;