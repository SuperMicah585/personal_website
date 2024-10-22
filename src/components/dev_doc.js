import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import React,{useState} from 'react';
const DevDoc = () => {

const [dropdownToggle,setDropdownToggle] = useState(false)
const [selectedDropDown,setselectedDropDown] = useState('')
const subResources = ['Projects','Hobbies','Tech Stack','Education','Work Experience']

const chevron = (item) => {
 
return(
    (dropdownToggle && selectedDropDown===item)?
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-2">
<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</svg>:

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-2">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>

    
    
)
}

const handleDropDownClick = (dropDownString) =>{


if(selectedDropDown === dropDownString || selectedDropDown ===''){
setDropdownToggle(prevState => !prevState); // Toggle the dropdown state using the current state
}


setselectedDropDown(dropDownString)
}
return(
    <>


    <div className = 'flex gap-10 mr-10'>

    <div className ='flex min-w-40 border-r border-slate-200 justify-center flex-col gap-5'>
    {subResources.map((item) =>
    
    <div onClick ={() => handleDropDownClick(item)} className = 'ml-5 flex items-center gap-1 cursor-pointer hover:opacity-75 hover:gap-0 duration-700' > {item}  

{chevron(item)}
    
  </div>
    )


        }

    </div>

    <div>
    <div className = 'flex '>
        <div className = 'text-6xl'> Micah's Resources </div>

    </div>
    <div className = 'absolute left-0 w-screen border-b border-slate-200'> </div>
    <div className = 'mt-5'>
          <p> The subresources of Micah's API lets you find specific information about the human Micah. You can fetch specific information
            about Micah(i.e His project Climb w Friends), or list all projects that he has worked on.
            </p> 

            <p> <br/>
            Additionally, you are able to filter results based on query paramaters. This filters let you narrow down results from the list
            method allowing you to get more relavent information.
            </p>
            <br/>
            <p>
            You cannot make requests directly to the Micah resource. Instead, you can make requests to one of the following subresources:
            </p>
            <div className='mt-5'> </div>
            <ul className='ml-5 list-disc'>
        <li>Projects resource</li>
        <li>Hobbies resource</li>
        <li>Tech Stack resource</li>
        <li>Education resource</li>
        <li>Work Experience resource</li>
    </ul>
    </div>

            

    </div>

    </div>
    </>
)


}; export default DevDoc;