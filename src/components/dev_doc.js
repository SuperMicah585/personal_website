import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
import React,{useRef,useState,useEffect} from 'react';
import Project from './dev_components/project'
import Hobbies from './dev_components/hobbies'
import TechStack from './dev_components/tech_stack';
import Education from './dev_components/education'
import WorkExperience from './dev_components/work_experience'
import SideBar from './dev_components/side_bar'

const DevDoc = () => {
const educationRef = useRef({})
const hobbyRef = useRef({})
const techStackRef = useRef({})
const projectRef = useRef({})
const WorkExperienceRef = useRef({})
//console.log(educationRef.current.propertiesRef.current)
const [navigateToHeader, setNavigateToHeader] = useState({
    resource: '', 
    subresource: '' // Fix the typo here
});

const [windowWidth, setWindowWidth] = useState(window.innerWidth);
const [mobileToggle, setMobileToggle] = useState(0);
//const [navigateTrigger,setNavigateTrigger] = useState(0)

/*
educationRef.current.overViewRef.current // Points to the paragraph
educationRef.current.propertiesRef.current // Points to the first table
educationRef.current.ListRef.current // Points to the second table
*/
const navigateToHeaderCallBack = (subResourceString,resourceString) => {
    setNavigateToHeader(prev => ({
        ...prev,            // Copy the previous state
        resource: resourceString,       // Update resource with new value
        subresource: subResourceString  // Update subresource with new value
    }));
};

const scrollToOverview = (element,subresource) => {
 
    console.log(element.current[subresource],subresource)
    if (element.current && element.current[subresource].current) {
        element.current[subresource].current.scrollIntoView({
            behavior: 'smooth', // Optional: smooth scroll animation
            block: 'center',     // Scroll to the start of the element
        });
    }
};

        // Function to update the width
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
    
        useEffect(() => {
            // Set the initial width
            setWindowWidth(window.innerWidth);
    
            // Add event listener for window resize
            window.addEventListener('resize', handleResize);
    
            // Cleanup the event listener on component unmount
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);

useEffect(() => {
    
    switch (navigateToHeader.resource) {
        case 'Projects':
            switch (navigateToHeader.subresource) {
                case 'Overview':
                    scrollToOverview(projectRef,'overViewRef')
                    // Handle Projects Overview
                    break;
                case 'Properties':
                    scrollToOverview(projectRef,'propertiesRef')
                    // Handle Projects Properties
                    break;
                case 'List':
                    scrollToOverview(projectRef,'ListRef')
                    // Handle Projects List
                    break;
                case 'Fetch':
                    scrollToOverview(projectRef,'FetchRef')
                    // Handle Projects fetch
                    break;
                default:
                   
                    // Handle unknown subresource
                    break;
            }
            break;  // Add break here to prevent falling through

        case 'Hobbies':
            switch (navigateToHeader.subresource) {
                case 'Overview':
                    scrollToOverview(hobbyRef,'overViewRef')
                    // Handle Hobbies Overview
                    break;
                case 'Properties':
                    scrollToOverview(hobbyRef,'propertiesRef')
                    // Handle Hobbies Properties
                    break;
                case 'List':
                    scrollToOverview(hobbyRef,'ListRef')
                    // Handle Hobbies List
                    break;
                case 'Fetch':
                    scrollToOverview(hobbyRef,'FetchRef')
                    // Handle Hobbies fetch
                    break;
                default:
                    // Handle unknown subresource
                    break;
            }
            break;

        case 'Tech Stack':
            switch (navigateToHeader.subresource) {
                case 'Overview':
                    scrollToOverview(techStackRef,'overViewRef')
                    // Handle Tech Stack Overview
                    break;
                case 'Properties':
                    scrollToOverview(techStackRef,'propertiesRef')
                    // Handle Tech Stack Properties
                    break;
                case 'List':
                    scrollToOverview(techStackRef,'ListRef')
                    // Handle Tech Stack List
                    break;
                case 'Fetch':
                    scrollToOverview(techStackRef,'FetchRef')
                    // Handle Tech Stack fetch
                    break;
                default:
              
                    // Handle unknown subresource
                    break;
            }
            break;

        case 'Education':
         
            switch (navigateToHeader.subresource) {
                
                case 'Overview':
                    
                    scrollToOverview(educationRef,'overViewRef')
                    // Handle Education Overview
                    break;
                case 'Properties':
                    scrollToOverview(educationRef,'propertiesRef')
                    // Handle Education Properties
                    break;
                case 'List':
                    scrollToOverview(educationRef,'ListRef')
                    // Handle Education List
                    break;
                case 'Fetch':
                    scrollToOverview(educationRef,'FetchRef')
                    // Handle Education fetch
                    break;
                default:
                    // Handle unknown subresource
                    break;
            }
            break;

        case 'Work Experience':
            switch (navigateToHeader.subresource) {
                case 'Overview':
                    scrollToOverview(WorkExperienceRef,'overViewRef')
                    // Handle Work Experience Overview
                    break;
                case 'Properties':
                    scrollToOverview(WorkExperienceRef,'propertiesRef')
                    // Handle Work Experience Properties
                    break;
                case 'List':
                    scrollToOverview(WorkExperienceRef,'ListRef')
                    // Handle Work Experience List
                    break;
                case 'Fetch':
                    scrollToOverview(WorkExperienceRef,'FetchRef')
                    // Handle Work Experience fetch
                    break;
                default:
                    // Handle unknown subresource
                    break;
            }
            break;

        default:
            // Handle unknown resource
            break;
    }
}, [navigateToHeader]);

const toggleMobile = () =>{

return(
    setMobileToggle(prev=>prev+1)
)

}

return(
    <>
   

    <div className = 'flex gap-10 mr-10'>

 <SideBar mobileToggle = {mobileToggle} windowWidth = {windowWidth} navigateToHeaderCallBack = {navigateToHeaderCallBack}/>

  
    <div className = 'absolute h-screen overflow-y-scroll'>
    <div className = 'fixed bg-white z-20 w-full'>
        <div className = {`${windowWidth>750?'ml-48 text-6xl mt-5 font-semibold text-6xl font-termina text-ellipsis':'flex justify-start items-start text-xl p-10'}`}>
 {windowWidth>750? "Micah's Resources":
 
 <div onClick = {() => toggleMobile()} className = 'cursor-pointer text-slate-500 hover:opacity-50 p-2 border border-slate-200 rounded'> 
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg> </div> 
}</div>

    

    <div className = {`${windowWidth>750?'mt-10':''} relative border-b border-slate-200`}> </div>
    </div>
    <div className = {`${windowWidth>750?'ml-48 mt-40':'flex flex-col justify-center mt-28 p-10'}  text-base font-light font-termina`}>
          <p> The subresources of Micah's API lets you find specific information about the human Micah. You can fetch specific information
            about Micah(i.e his project Climb w Friends), or list all projects that he has worked on.
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
    <div className = {`max-w-full box-border ${windowWidth>750?'ml-36 p-10':'p-5 '}`}> 
    <Project ref = {projectRef}/>
    <Hobbies ref = {hobbyRef}/>
    <TechStack ref = {techStackRef}/>
    <Education ref = {educationRef}/>
    <WorkExperience ref = {WorkExperienceRef}/>
    </div>
    

            

    </div>
    </div>

    
    </>
)


}; export default DevDoc;