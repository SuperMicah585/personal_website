import React,{useState,useEffect,forwardRef,useRef} from 'react'
import Draggable from 'react-draggable';
import {parseArray} from './functions/process_query'


const Terminal = forwardRef((_, ref) => {
  
    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [originalPosition] = useState({ x: 0, y: 0 }); // Store the original position
    const [isInputHovered,setIsInputHovered] = useState(false)
    const [terminalDisplay,setTerminalDisplay] = useState(null)
    const [isDragging,setIsDragging] = useState(false)
    const [dragID,setDragID] = useState('')
    const [offset, setOffset] = useState({ x: 0, y: 0 });
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
    {text:'Projects',endpoint:'micah.projects.list()',type:'parent'},
    {text:'Climb w Friends',endpoint:"micah.projects.fetch('Climb w Friends')",type:'child'},
    {text:'Jason Art',endpoint:"micah.projects.fetch('Jason Art')",type:'child'},
    {text:'Twilio Prefix Map',endpoint:"micah.projects.fetch('Twilio Prefix Map')",type:'child'},
    {text:'Worldle',endpoint:"micah.projects.fetch('Worldle')",type:'child'},
    
    {text:'Hobbies',endpoint:'micah.hobbies.list()',type:'parent'},
    {text:'Rock Climbing',endpoint:'micah.hobbies.fetch("Rock Climbing")',type:'child'},
    {text:'Dancing',endpoint:'micah.hobbies.fetch("Dancing")',type:'child'},
    {text:'Running',endpoint:'micah.hobbies.fetch("Running")',type:'child'},
    {text:'Video Games',endpoint:'micah.hobbies.fetch("Video Games")',type:'child'},


    {text:'Tech Stack',endpoint:'micah.tech_stack.list()',type:'parent'}, 
    {text:'Languages',endpoint:'micah.tech_stack.fetch("Languages")',type:'child'},
    {text:'Frameworks',endpoint:'micah.tech_stack.fetch("Frameworks")',type:'child'},
    {text:'Libraries',endpoint:'micah.tech_stack.fetch("Libraries")',type:'child'},


    
    
    {text:'Education',endpoint:'micah.education.list()',type:'parent'},
    {text:'Financial Economics',endpoint:'micah.education.fetch("Financial Economics")',type:'child'},
    {text:'Computer Science',endpoint:'micah.education.fetch("Computer Science")',type:'child'},

    {text:'Work Experience',endpoint:'micah.work_experience.list()',type:'parent'},
    {text:'Technical Support Engineer',endpoint:'micah.work_experience.fetch("Technical Support Engineer")',type:'child'},
    {text:"College Dining Hall",endpoint:'micah.work_experience.fetch("College Dining Hall")',type:'child'},
    {text:'Beer Boy',endpoint:'micah.work_experience.fetch("Beer Boy"")',type:'child'}


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
    setIsDragging(false)
    setDragID('')
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
      return `<span class="text-blue-500 font-termina font-bold">"${p1}":</span>`;
    });
  
    // Second, style the values (string values after the closing span tag)
    const formattedJSON = formattedKeysJSON.replace(/<\/span>(\s*"[^"]*")/g, (match, p1) => {
      return `</span><span class="text-slate-300 font-termina font-semibold">${p1}</span>`;
    });
  
    
    return formattedJSON;
  };
  
  
  
  

return(
    <>
       <div className = 'p-12 bg-zinc-900'> </div>
        <div className = 'flex relative flex-col h-content bg-zinc-900 p-10'>
            <div className = 'absolute text-opacity-75 font-semibold ml-10 top-0 text-yellow-300 z-25 text-6xl font-termina'>ABOUT ME</div>

            <div className = 'w-full flex mt-16 ml-10 h-10'>
            <div className="absolute font-termina pl-2 py-1.5 rounded-lg pointer-events-none">
            {splitOnPeriodArray.map((item,index)=>
            
            (index>0? <><span className  = 'font-termina text-white'>.</span><span className = {tailwindColors[index]}>{item}</span></>:
            
            <span className = {tailwindColors[index]}>{item}</span>
            )
            
            
            )}
            
            </div>
          
            <div className = 'flex w-[80%] gap-5'>
            <input
                spellcheck="false"
                id='inputField'
                type="text" 
                placeholder="Type or Drag Your Query"
                className={`w-full border-4 ${isInputHovered ? 'border-blue-500' : 'border-transparent'} h-full text-transparent font-semibold h-8 bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
                value={inputValue}
                onChange={handleChange}
            />
            <div onClick={handleSubmitClick} className='flex items-center font-semibold cursor-pointer text-blue-500 
            border-blue-500 opacity-75 hover:opacity-100 border-2 justify-center p-1  rounded-lg'>submit</div>
     
            
            </div>
            <div className = 'min-w-60 ml-20'></div>
            </div>


            <div className = 'flex h-screen w-full'>
           <div className = 'overflow-scroll mt-10 mb-25 ml-10 w-[80%] bg-zinc-800 rounded-lg'>

           <pre
      className="ml-5 mt-5 font-termina"
      dangerouslySetInnerHTML={{
        __html: terminalDisplay ? formatJSON(terminalDisplay) : '',
      }}
    />
           </div>

            <div className = 'flex flex-col items-center gap-5 mt-10 ml-5'>
           <div className = 'text-4xl font-bold text-yellow-300 font-termina opacity-50'> Query Tiles!</div>
           <div ref={ref} className = 'overflow-y-scroll max-h-96 min-w-64 rounded-lg border-zinc-500 border-2 grow'> 
           {queryItems.map((item)=>
           <div className = 'h-10 border-b-2 border-zinc-500'>
        
        <Draggable onDrag={handleDrag} position={{x: position.x,y: dragID ===item.text? position.y- offset.y:position.y} }
            
           //y: dragID ===item.text? position.y- offset:position.y
           
           onStart={(e) => {
            const scrollOffset = ref.current
              ? ref.current.scrollTop
              : 0; // Get the scroll offset of the container
              
            setOffset({ x: 0, y: scrollOffset });
            setIsDragging(true);
            setDragID(e.target.innerHTML);
          }}
           
           
           
           onStop={handleStop}>
            
            
            <div data-value= {item.endpoint} 
           className={`hover:text-blue-500 ${dragID===item.text?'absolute':''} p-1.5 text-center ${item.type==='parent'?'ml-2 text-white':'ml-5 text-slate-400'} font-semibold opacity-75 h-10 cursor-pointer z-50 inline-block`}>{item.text}</div></Draggable>
          
           </div>
           )}
           </div>
           </div>
           </div>

        </div>
        </>
    )


}); export default Terminal;