

const Personal_Context = () =>{

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
'','','MICAH']











/*
 SDK ideas to expose personal information.
*******
Micah:
--
endpoints:

Coding projects
params: name

Hobbies
params: name

Contact
params: name


Example:
            client.micah.coding_projects.list(
                name = 'jasonart'
            )
*/

    return(
        <>
        <GifComponent/>
        <div className = 'absolute top-0 left-0 text-md h-screen w-screen grid grid-cols-3 place-items-center p-10'>
     
            {

            textArray.map((text)=>
                text ==='WELCOME' || text ==='TO MY' || text === 'PORTFOLIO'?
                <div className = 'text-7xl text-blue-500 text-wrap object-fit font-moret overflow-hidden text-ellipsis'>{text}</div>:
                <div className = 'text-9xl text-blue-500 text-wrap object-fit font-moret overflow-hidden text-ellipsis'>{text}</div>
                
                )

            
            
            
            }

                
        </div>
        </>
    )
}; export default Personal_Context;