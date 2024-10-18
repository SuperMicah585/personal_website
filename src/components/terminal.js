import React,{useState,useEffect,forwardRef,useRef} from 'react'
import InputAndSubmit from './terminal_components/input_submit'
import LoadingBarAndTextDisplay from './terminal_components/loading_bar'
import QueryTiles from './terminal_components/query_tiles'
const Terminal = forwardRef((_, ref) => {
    
    const [terminalDisplay,setTerminalDisplay] = useState(null)

    const [loadingState,setLoadingState] = useState('0%')
    const [isLoading,setIsLoading] = useState(false)
    const [dragInputValue, setDragInputValue] = useState('');
    const [dragTriggerValue,setDragTriggerValue] = useState(0)
    const [isInputHovered,setIsInputHovered] = useState(false)
    //const[highlightedText, setHighlightedText] = useState('')


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

        <div className = 'flex relative flex-col h-content w-screen bg-zinc-900 p-10 box-border'>
            <div className = ' w-full flex max-[1024px]:justify-center text-opacity-75 font-semibold top-0 text-yellow-300 z-25 text-6xl font-termina'>
              <div className = ' flex'>  
              ABOUT ME
              </div> 
              </div>

          <InputAndSubmit dragTriggerValue = {dragTriggerValue} dragInputValue={dragInputValue} isloadingCallBack = {isloadingCallBack} 
          loadingValueCallBack = {loadingValueCallBack} terminalTextCallBack = {terminalTextCallBack} isInputHovered = {isInputHovered}/>


            <div className = 'flex relative h-screen w-full'>
            
            <LoadingBarAndTextDisplay loadingState = {loadingState} terminalDisplay={terminalDisplay} isLoading = {isLoading}/>
        
            <div className = 'flex flex-col items-center gap-5 mt-10'>
           <div className = 'text-4xl font-bold text-yellow-300 font-termina opacity-50'> Query Tiles!</div>
        
           <QueryTiles setDragInputValueCallBack = {setDragInputValueCallBack} setDragTriggerValueCallBack = {setDragTriggerValueCallBack}
           setIsInputHoveredCallBack = {setIsInputHoveredCallBack} dragTriggerValue = {dragTriggerValue} ref = {ref}/>
  
    
           </div>
           </div>

        </div>
   
        </>
    )


}); export default Terminal;