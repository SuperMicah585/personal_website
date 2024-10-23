import React, {useState,useEffect} from 'react'

const NavBar = ({scrollPosition, terminalPositition, projectPositition, homePositition, scrollElementCallBack}) =>{

const [currentPosition, setCurrenPosition] = useState('HOME')


const [middleY, setMiddleY] = useState(0);
const items = [

    'HOME',
    'PROJECTS',
    'ABOUT'


]


    




useEffect(() => {
    // Function to calculate the middle of the viewport
    const calculateMiddle = () => {
      const y = window.innerHeight / 2;
  
      setMiddleY(y);
    };

    // Calculate middle on mount
    calculateMiddle();

    // Recalculate middle on window resize
    window.addEventListener('resize', calculateMiddle);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', calculateMiddle);
  }, []);

useEffect(()=>{
    const middleofscreen = middleY + scrollPosition
    const terminalPosititionScreen = scrollPosition + terminalPositition
    const projectPosititionScreen = scrollPosition + projectPositition
    const homePosititionScreen = homePositition + scrollPosition


    if(middleofscreen<homePosititionScreen){

        setCurrenPosition('HOME')
    }
    else if(middleofscreen<projectPosititionScreen){

        setCurrenPosition('PROJECTS')
    }
    else{

        setCurrenPosition('ABOUT')
    }

},[scrollPosition,terminalPositition,projectPositition,homePositition])

const handleClick = (e) =>{


scrollElementCallBack(e.target.innerText)
}







    return(
    
        <div className='fixed mt-1 flex w-full items-center justify-center sm:justify-end sm:right-5 z-50 gap-5'>

        {items.map((header)=>
            <div 
  onClick={(e) => handleClick(e)} 
  className={`relative text-yellow-300 duration-100 border-b-2 border-transparent hover:border-b-2 font-bold text-xl text-opacity-75 hover:text-opacity-100 hover:cursor-pointer
    ${header === currentPosition? 'border-b-2 border-yellow-300' : ''}`}
>
  {header}
</div>
        )
        }

        </div>
    )
}; export default NavBar;