import React,{useRef,useState,useEffect}from 'react'
import ProjectGrid from "./components/project_grid";
import PersonalContext from "./components/Personal_context";
import Terminal from "./components/terminal";
import NavBar from "./components/nav_bar"
function App() {
  const [scrollElement,setScrollElement]= useState('')
  const terminalRef = useRef(null);
  const projectRef = useRef(null)
  const homeRef = useRef(null)

  const scrollElementCallBack = (navString) =>{

    setScrollElement(navString)
  }


  const centerElement = (scrollElement) => {
    
    switch(scrollElement){
      case 'HOME':
        homeRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;
      
      case 'PORTFOLIO':
        projectRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;

      case 'ABOUT':
        terminalRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
        break;


    }};


  useEffect(()=>{
    if(scrollElement.length>0){
    centerElement(scrollElement)
    setScrollElement('')
    }


  },
  [scrollElement]
  )

  return (
    <>
    <NavBar scrollElementCallBack = {scrollElementCallBack} />
    <PersonalContext ref = {homeRef}/>
    <ProjectGrid ref = {projectRef}/>
    <Terminal ref = {terminalRef}/>

    
    </>
  );
}

export default App;
