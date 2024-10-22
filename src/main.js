import React,{useRef,useState,useEffect}from 'react'
import ProjectGrid from "./components/project_grid";
import PersonalContext from "./components/Personal_context";
import Terminal from "./components/terminal";
import NavBar from "./components/nav_bar"

function Main() {
  const [scrollElement,setScrollElement]= useState('')
  //const [window,setWindowElement]= useState('')
  const [scrollPosition,setScrollPosition] = useState(0)
  const [terminalPositition,setTerminalPosition] = useState(0)
  const [projectPositition,setProjectPositition] = useState(0)
  const [homePositition,setHomePositition] = useState(0)
  const terminalRef = useRef(null);
  const projectRef = useRef(null)
  const homeRef = useRef(null)



  const scrollElementCallBack = (navString) =>{

    setScrollElement(navString)
  }


  const scrollToElement = (element) => {


    return element.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }


  const handleScroll = () => {
    setScrollPosition(window.scrollY); // Update the window width state when the window is resized
    setTerminalPosition(terminalRef.current.getBoundingClientRect().bottom)
    setProjectPositition(projectRef.current.getBoundingClientRect().bottom)
    setHomePositition(homeRef.current.getBoundingClientRect().bottom)
  };


  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Add the resize event listener when the component mounts
  useEffect(() => {

    handleScroll();

    const debouncedHandleScroll = debounce(handleScroll, 50); // 200ms delay after scrolling stops

    // Add scroll event listener
    window.addEventListener("scroll", debouncedHandleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);



  
  const centerElement = (scrollElement) => {
    
    switch(scrollElement){
      case 'HOME':
        scrollToElement(homeRef)
        break;
      
      case 'PROJECTS':
        scrollToElement(projectRef)
        break;

      case 'ABOUT':

        scrollToElement(terminalRef)
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
    <div>
    <NavBar scrollPosition = {scrollPosition} terminalPositition = {terminalPositition} projectPositition = {projectPositition} 
    homePositition = {homePositition}
    scrollElementCallBack = {scrollElementCallBack} />
    <PersonalContext ref = {homeRef}/>
    <ProjectGrid ref = {projectRef}/>
    <Terminal ref = {terminalRef}/>  
    </div> 
  );
} export default Main;