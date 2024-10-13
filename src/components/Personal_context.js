

const Personal_Context = () =>{

    const GifComponent = () => {
        return (
          <div className="flex items-center justify-center bg-zinc-900 h-screen w-screen">
            <img 
              src="https://media.tenor.com/LlbU6ZEXGHsAAAAi/bear-dance.gif" 
              alt="Banana Cheerer"
              className="h-screen z-50 opacity-25 hover:opacity-100" // You can customize the size and styling
            />
          </div>
        );
      };

const textArray = [
'Hello,','','',
'','I','',
'','AM','',
'','','MICAH!']








/*
 SDK ideas to expose personal information.

Projects: 
--
query params:

name, contains, limit

--
Example:
            client.Micahs_project.list(
                name = 'jasonart'
            )


*/

    return(
        <>
        <GifComponent/>
        <div className = 'absolute top-0 left-0 text-md h-screen w-screen grid grid-cols-3 place-items-center gap-10 p-10'>
     
            {

            textArray.map((text)=>
                
                <div className = 'text-9xl text-wrap object-fit text-white font-moret overflow-hidden text-ellipsis'>{text}</div>
                )
            }
                
        </div>
        </>
    )
}; export default Personal_Context;