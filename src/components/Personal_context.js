import React,{forwardRef} from 'react'

const Personal_Context = forwardRef(({windowWidth}, ref) =>{

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

const textArray = [
'HEY,','','',
'',"I'M",'',
'','','MICAH!']

    return(
        <>
        <GifComponent/>
  
        <div className = ' absolute h-screen w-content flex items-center justify-center top-0 left-0'>
        <div ref={ref} className = 'p-10 relative w-screen text-8xl sm:text-9xl font-monet left-0 flex flex-col items-center gap-20 text-blue-300 font-black opacity-60'>   

            <div className = 'w-full flex justify-center lg:justify-start'> HEY, </div>

            <div className='w-full flex justify-center' > I'M</div>

            <div className='w-full flex justify-center lg:justify-end' > MICAH! </div>

            </div>


        </div>

            
            
            
            

        </>
    )
}); export default Personal_Context;