import React,{useState,useEffect,forwardRef} from 'react'
import Draggable from 'react-draggable';

const Terminal = forwardRef((_, ref) => {

    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [originalPosition] = useState({ x: 0, y: 0 }); // Store the original position
    //const[highlightedText, setHighlightedText] = useState('')


    const handleChange = (e) => {
 
      

      setInputValue(e.target.value);
    };


    const tailwindColors = [

        'text-fuchsia-500 font-bold','text-indigo-200 font-bold', 'text-green-200 font-bold','text-cyan-500 font-bold'

    ]

    useEffect(()=>{
        setSplitOnPeriodArray(inputValue.split('.'))

    },[inputValue])


const queryItems = [
    'Projects','Hobbies','Tech Stack', 'Education','Work Experience'


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
   
      setInputValue(draggedElement.innerHTML);
    }
    setPosition(originalPosition);
  }

return(
    <>
       <div className = 'p-12 bg-zinc-900'> </div>
        <div ref={ref} className = 'flex relative flex-col h-content bg-zinc-900 p-10'>
            <div className = 'absolute text-opacity-75 font-semibold ml-10 top-0 text-yellow-300 z-50 text-6xl font-termina'>ABOUT ME</div>

            <div className = 'mt-16 ml-10 w-[80%] h-10'>
            <div className="absolute font-termina pl-2 py-2 rounded-lg pointer-events-none">
            {splitOnPeriodArray.map((item,index)=>
            
            (index>0? <><span className  = 'font-termina text-white'>.</span><span className = {tailwindColors[index]}>{item}</span></>:
            
            <span className = {tailwindColors[index]}>{item}</span>
            )
            
            
            )}
            
            </div>

            <input
                id='inputField'
                type="text" 
                placeholder="Type or Drag Your Query"
                className='w-full z-50 h-full text-transparent h-8 bg-zinc-800 font-termina pl-2 p-1 rounded-lg'
                value={inputValue}
                onChange={handleChange}
            />

            </div>
            <div className = 'flex h-screen w-full'>
           <div className = 'overflow-scroll mt-10 mb-25 ml-10 w-[80%] bg-zinc-800 rounded-lg'></div>
           <div className = ' min-w-20 ml-5 mt-10 mb-25 rounded-lg border-zinc-500 max-h-fit border-2 grow'> 
           {queryItems.map((item)=>
           <>
           <Draggable position={position} onStop={handleStop}><div className="flex hover:text-blue-500 items-center ml-2 font-semibold opacity-75 h-10 w-full text-white cursor-pointer z-50 ">{item}</div></Draggable>
           <div className = 'border-b-2 border-slate-500'> </div>
           </>
           )}
           </div>
           </div>

        </div>
        </>
    )


}); export default Terminal;