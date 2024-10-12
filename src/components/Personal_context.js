

const Personal_Context = () =>{



const textArray = [
'','HELLO!','',
'WELCOME','','TO',
'','MY','',
'','','PORTFOLIO'


]



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

        <div className = 'h-screen w-screen grid grid-cols-3 place-items-center'>
     
            {

            textArray.map((text)=>
                
                <div className = 'text-4xl object-fit'>{text}</div>
                )
            }
                
        </div>
    )
}; export default Personal_Context;