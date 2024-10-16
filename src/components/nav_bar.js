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
    
        <div className = 'flex fixed right-5 z-50 gap-5'>
        {items.map((header)=>
        <div onClick = {(e) => handleClick(e)} className='text-yellow-300 font-bold text-opacity-75 hover:text-opacity-100 hover:cursor-pointer'>
            {header}
        </div>
        )
        }

        </div>
    )
}; export default NavBar;