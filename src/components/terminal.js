import React,{useState,useEffect,forwardRef} from 'react'
import Draggable from 'react-draggable';
import {parseArray} from './functions/process_query'

const Terminal = forwardRef((_, ref) => {

    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [originalPosition] = useState({ x: 0, y: 0 }); // Store the original position
    const [isInputHovered,setIsInputHovered] = useState(false)
    const [terminalDisplay,setTerminalDisplay] = useState(null)
    //const[highlightedText, setHighlightedText] = useState('')


    const handleChange = (e) => {
 
      

      setInputValue(e.target.value);
    };


    const tailwindColors = [

        'text-fuchsia-300 font-bold','text-indigo-400 font-bold', 'text-green-200 font-bold','text-cyan-500 font-bold'

    ]

    useEffect(()=>{
        setSplitOnPeriodArray(inputValue.split('.'))

    },[inputValue])


const queryItems = [
    {text:'Projects',endpoint:'micah.projects.list()'},{text:'Hobbies',endpoint:'micah.hobbies.list()'},
    {text:'Tech Stack',endpoint:'micah.tech_stack.list()'}, {text:'Education',endpoint:'micah.education.list()'},
    {text:'Work Experience',endpoint:'micah.work_experience.list()'}


]

const handleStop = (e, data) => {
    const inputElement = document.getElementById('inputField');
    const inputRect = inputElement.getBoundingClientRect();

    // Use e.target to refer to the dragged element
    const draggedElement = e.target;
   
    const draggedRect = e.target.getBoundingClientRect(); // Draggable element's bounding box


    // Check if there's an overlap (or if they're touching)
    if (
      draggedRect.right > inputRect.left &&  // Right edge of draggable is past the left edge of target
      draggedRect.left < inputRect.right &&  // Left edge of draggable is before the right edge of target
      draggedRect.bottom > inputRect.top &&  // Bottom edge of draggable is past the top edge of target
      draggedRect.top < inputRect.bottom     // Top edge of draggable is before the bottom edge of target
    ){
      // Update the input value with the dragged element's innerHTML
      //console.log(draggedElement.getAttribute('data-value'))
      setInputValue(draggedElement.getAttribute('data-value'));
    }
    setPosition(originalPosition);
    setIsInputHovered(false)
  }


  const handleDrag = (e, data) => {
    const inputElement = document.getElementById('inputField');
    const inputRect = inputElement.getBoundingClientRect();

    // Use e.target to refer to the dragged element
    const draggedElement = e.target;
   
    const draggedRect = e.target.getBoundingClientRect(); // Draggable element's bounding box


    // Check if there's an overlap (or if they're touching)
    if (
      draggedRect.right > inputRect.left &&  // Right edge of draggable is past the left edge of target
      draggedRect.left < inputRect.right &&  // Left edge of draggable is before the right edge of target
      draggedRect.bottom > inputRect.top &&  // Bottom edge of draggable is past the top edge of target
      draggedRect.top < inputRect.bottom     // Top edge of draggable is before the bottom edge of target
    ){
      // Update the input value with the dragged element's innerHTML
      setIsInputHovered(true)
 
    }
    else{
        setIsInputHovered(false)
    }
    
  }

  const handleSubmitClick = ()=>{

   
    const micahsDataObject = parseArray(splitOnPeriodArray)
    setTerminalDisplay(micahsDataObject)

  }

  const formatJSON = (jsonObj) => {
    // Stringify the object with indentation
    const jsonString = JSON.stringify(jsonObj, null, 2);
  
    // First, style the keys (before the colon)
    const formattedKeysJSON = jsonString.replace(/"([^"]+)":/g, (match, p1) => {
      return `<span class="text-green-800 font-termina font-bold">"${p1}":</span>`;
    });
  
    // Second, style the values (string values after the closing span tag)
    const formattedJSON = formattedKeysJSON.replace(/<\/span>(\s*"[^"]*")/g, (match, p1) => {
      return `</span><span class="text-slate-300 font-termina font-semibold text-xs">${p1}</span>`;
    });
  
    return formattedJSON;
  };
  
  
  
  

return(
    <>
       <div className = 'p-12 bg-zinc-900'> </div>
        <div className = 'flex relative flex-col h-content bg-zinc-900 p-10'>
            <div className = 'absolute text-opacity-75 font-semibold ml-10 top-0 text-yellow-300 z-50 text-6xl font-termina'>ABOUT ME</div>

            <div className = 'mt-16 ml-10 w-[80%] h-10'>
            <div className="absolute font-termina pl-2 py-2 rounded-lg pointer-events-none">
            {splitOnPeriodArray.map((item,index)=>
            
            (index>0? <><span className  = 'font-termina text-white'>.</span><span className = {tailwindColors[index]}>{item}</span></>:
            
            <span className = {tailwindColors[index]}>{item}</span>
            )
            
            
            )}
            
            </div>

            <div className = 'flex justify-center items-center gap-5'>
            <input
                spellcheck="false"
                id='inputField'
                type="text" 
                placeholder="Type or Drag Your Query"
                className={`w-full border-4 ${isInputHovered ? 'border-blue-500' : 'border-transparent'} h-full text-transparent font-semibold h-8 bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
                value={inputValue}
                onChange={handleChange}
            />
            <div onClick={handleSubmitClick} className='flex items-center font-semibold cursor-pointer text-blue-500 border-blue-500 border-2 justify-center p-1 hover:bg-blue-500 hover:text-slate-200 rounded-lg'>submit</div>
            </div>

            </div>
            <div className = 'flex h-screen w-full'>
           <div className = 'overflow-scroll mt-10 mb-25 ml-10 w-[80%] bg-zinc-800 rounded-lg'>

           <pre
      className="font-mono"
      dangerouslySetInnerHTML={{
        __html: terminalDisplay ? formatJSON(terminalDisplay) : '',
      }}
    />
           </div>
           <div ref={ref} className = ' min-w-20 ml-5 mt-10 mb-25 rounded-lg border-zinc-500 max-h-fit border-2 grow'> 
           {queryItems.map((item)=>
           <>
           <Draggable onDrag={handleDrag} position={position} onStop={handleStop}><div data-value= {item.endpoint} className="flex hover:text-blue-500 items-center ml-2 font-semibold opacity-75 h-10 w-full text-white cursor-pointer z-50 ">{item.text}</div></Draggable>
           <div className = 'border-b-2 border-slate-500'> </div>
           </>
           )}
           </div>
           </div>

        </div>
        </>
    )


}); export default Terminal;