import React,{useState,useEffect,forwardRef} from 'react'
import Draggable from 'react-draggable';
import {queryItems} from './micah_data'
const QueryTiles = forwardRef(({windowWidth,setDragInputValueCallBack,setDragTriggerValueCallBack,setIsInputHoveredCallBack,dragTriggerValue},ref) =>{

    const [offset, setOffset] = useState({ x: 0, y: 0 });
    const [isDragging,setIsDragging] = useState(false)
    const [dragID,setDragID] = useState('')
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [originalPosition] = useState({ x: 0, y: 0 }); // Store the original position



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
          setDragInputValueCallBack(draggedElement.getAttribute('data-value'));
          setDragTriggerValueCallBack(dragTriggerValue+1)
        }
        setPosition(originalPosition);
        setIsInputHoveredCallBack(false)
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
          setIsInputHoveredCallBack(true)
     
        }
        else{
            setIsInputHoveredCallBack(false)
        }
        
      }

    return(

        <div ref={ref} className = {`overflow-y-scroll ${windowWidth>650?'ml-10 max-h-96 min-w-64':'max-h-40 w-full'} rounded-lg border-zinc-500 border-2`}> 
        {queryItems.map((item)=>
        <div className = 'h-10 hover:shadow-slate-500 shadow-sm border-b-2 border-zinc-500'>
     
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
        className={`hover:text-blue-500 ${dragID===item.text?'absolute':''} 
        p-1.5 text-center ${item.type==='parent'?'ml-2 text-white':'ml-5 text-slate-400'} 
        font-semibold opacity-75 h-10 ${isDragging?'cursor-grabbing':'cursor-pointer'} z-50 inline-block`}>{item.text}</div></Draggable>
       
        </div>
        )}
        </div>

    )
}); export default QueryTiles;