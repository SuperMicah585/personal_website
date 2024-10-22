import React,{useState,useEffect,forwardRef,useRef} from 'react'
import InputAndSubmit from './terminal_components/input_submit'
import LoadingBarAndTextDisplay from './terminal_components/loading_bar'
import QueryTiles from './terminal_components/query_tiles'
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from 'react-router-dom';
const Terminal = forwardRef((_, ref) => {
    
    const [terminalDisplay,setTerminalDisplay] = useState(null)

    const [loadingState,setLoadingState] = useState('0%')
    const [isLoading,setIsLoading] = useState(false)
    const [dragInputValue, setDragInputValue] = useState('');
    const [dragTriggerValue,setDragTriggerValue] = useState(0)
    const [isInputHovered,setIsInputHovered] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    //const[highlightedText, setHighlightedText] = useState('')

 
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update the window width state when the window is resized
    };
  
    // Add the resize event listener when the component mounts
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);


//to show the loading bar
    const isloadingCallBack = (bool) =>{

      setIsLoading(bool)
      
    }
//set loading value 
    const loadingValueCallBack = (percentage) =>{

      setLoadingState(percentage)
      
    }
//set display text
const terminalTextCallBack = (text) =>{

  setTerminalDisplay(text)
  
}

const setDragInputValueCallBack = (value) =>{
  setDragInputValue(value)
}

const setDragTriggerValueCallBack = (value) =>{
  setDragTriggerValue(value)
}

const setIsInputHoveredCallBack = (value) =>{

  setIsInputHovered(value)

}

  
  

return(
    <>

        <div className = {`flex relative flex-col h-content w-screen bg-zinc-900 ${windowWidth>650?'p-10':'p-5'} box-border`}>

            <div className = ' w-full flex max-[650px]:justify-center max-[650px]:text-3xl text-opacity-75 font-semibold top-0 text-yellow-300 z-25 text-5xl font-termina'>
              <div className = ' flex gap-2'> 
              <div>ABOUT</div>
              <Link to={'/about_documentation'}>
              <div className ='cursor-pointer text-yellow-300 opacity-75 hover:opacity-100'>  
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</div>
  </Link>
              </div> 
              </div>


          <InputAndSubmit windowWidth = {windowWidth} dragTriggerValue = {dragTriggerValue} dragInputValue={dragInputValue} isloadingCallBack = {isloadingCallBack} 
          loadingValueCallBack = {loadingValueCallBack} terminalTextCallBack = {terminalTextCallBack} isInputHovered = {isInputHovered}/>


            
            {windowWidth>650? <div className = 'flex relative h-screen w-full'>
             
            <LoadingBarAndTextDisplay windowWidth = {windowWidth} loadingState = {loadingState} terminalDisplay={terminalDisplay} isLoading = {isLoading}/>

            <div className = 'flex flex-col items-center gap-5 ml-10 mt-10'>
           <div className = {`text-1xl font-bold text-yellow-300 font-termina opacity-50`}> Draggable Query Tiles</div>


           <QueryTiles windowWidth = {windowWidth} setDragInputValueCallBack = {setDragInputValueCallBack} setDragTriggerValueCallBack = {setDragTriggerValueCallBack}
           setIsInputHoveredCallBack = {setIsInputHoveredCallBack} dragTriggerValue = {dragTriggerValue} ref = {ref}/>:

          </div> </div>:
          
          
          <div className = 'flex flex-col relative h-content w-full'> 

            <div className = 'flex flex-col items-center gap-5 mt-10'>
         
            <div className='w-full'> <div className = {` text-1xl font-bold text-yellow-300 font-termina opacity-50`}> Draggable Query Tiles</div> </div>
        
           <QueryTiles windowWidth = {windowWidth} setDragInputValueCallBack = {setDragInputValueCallBack} setDragTriggerValueCallBack = {setDragTriggerValueCallBack}
           setIsInputHoveredCallBack = {setIsInputHoveredCallBack} dragTriggerValue = {dragTriggerValue} ref = {ref}/>
            
          </div>
          <div className = 'mt-10 text-1xl font-bold text-yellow-300 font-termina text-opacity-50'> Output</div>
          <LoadingBarAndTextDisplay windowWidth= {windowWidth} loadingState = {loadingState} terminalDisplay={terminalDisplay} isLoading = {isLoading}/></div>}

           
            
    
           
          

        </div>
   
        </>
    )


}); export default Terminal;