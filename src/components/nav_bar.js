import React from 'react'

const NavBar = ({scrollElementCallBack}) =>{

const items = [
    'HOME',
    'PROJECTS',
    'ABOUT'


]

const handleClick = (e) =>{


scrollElementCallBack(e.target.innerText)
}


    return(
    
        <div className='fixed flex w-full justify-center sm:justify-end sm:right-5 z-50 gap-5'>

        {items.map((header)=>
            <div 
  onClick={(e) => handleClick(e)} 
  className='relative text-yellow-300 duration-700 font-bold text-opacity-75 hover:text-opacity-100 hover:cursor-pointer 
  after:content-[""] after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:bottom-0 after:h-0.5 after:w-0 
  after:bg-yellow-300 after:transition-all after:duration-700 hover:after:w-full'
>
  {header}
</div>
        )
        }

        </div>
    )
}; export default NavBar;