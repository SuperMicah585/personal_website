import React,{useState,useEffect,useRef} from 'react'
import {parseArray} from '../functions/process_query'
const InputAndSubmit = ({dragTriggerValue,dragInputValue,isloadingCallBack,loadingValueCallBack,terminalTextCallBack,isInputHovered}) => {
    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    const [isDisabled,setIsDisabled] = useState(false)
    const [scrollLevel,setScrollLevel] = useState(0)
    const scrollableDivRef = useRef(null);
    const inputScrollRef = useRef(null)
    


      
        const handleInputScroll = () => {
          if (inputScrollRef.current) {
            const scrollLeft = inputScrollRef.current.scrollLeft;
            setScrollLevel(scrollLeft); // Update the state with scroll position
          }
        };
      
        useEffect(() => {
          const inputDiv = inputScrollRef.current;
          if (inputDiv) {
            inputDiv.addEventListener('scroll', handleInputScroll);
          }
      
          // Cleanup the event listener when the component unmounts
          return () => {
            if (inputDiv) {
                inputDiv.removeEventListener('scroll', handleInputScroll);
            }
          };
        }, []); // Only run on mount/unmount


  const setScrollPosition = (position) => {
    if (scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft = position;
    }
  };

  // Example: Use Effect to scroll after component mounts
  useEffect(() => {

    setScrollPosition(scrollLevel);
  }, [scrollLevel]);


    useEffect(()=>{
        
        if(dragTriggerValue>0){
        setInputValue(dragInputValue)
        }
    },[dragTriggerValue])


    useEffect(()=>{
        setSplitOnPeriodArray(inputValue.split('.'))

    },[inputValue])

    const handleChange = (e) => {
 
      

        setInputValue(e.target.value);
      };

    const tailwindColors = [

        'text-slate-300 font-bold','text-blue-500 font-bold', 'text-blue-300 font-bold'

    ]


    const handleSubmitClick = async () => {
        setIsDisabled(true)
        isloadingCallBack(true)
        const percentageArray = ['25%', '50%', '75%', '100%','0%'];
      
        const micahsDataObject = parseArray(splitOnPeriodArray);
        terminalTextCallBack(micahsDataObject);
        
        for (let item of percentageArray) {
          if(item === '0%'){
            isloadingCallBack(false)
            setIsDisabled(false)
          }
          loadingValueCallBack(item); // Update the loading state with the current percentage
          
          // Add a 1-second delay between iterations
          await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 ms = 1 second
        }
        
      };





return(
 
    <div className = 'flex relative w-full mt-16 h-10 '>


    {/* Styles text that is within the input */}
 
    <div ref={scrollableDivRef} className="absolute min-w-40 text-xl whitespace-nowrap overflow-x-scroll overflow-y-hidden w-[calc(100%-410px)] h-12 font-termina pl-2 py-1.5 rounded-lg pointer-events-none right-0 left-0">


{splitOnPeriodArray.map((item, index) => {
    // Regex to match text within double quotes
    const regex = /"([^"]*)"/g;
    
    // Split the item into parts, wrapping quoted text with a span styled red
    const formattedItem = item.split(regex).map((part, i) => {
        if (i % 2 === 1) {
            // This is the part inside quotes
            return <span key={i} className = 'text-amber-700 opacity-75'>"{part}"</span>;
        }
        return part; // Non-quoted text
    });

    return (
        index > 0 ? (
            <>
                <span className='font-termina text-white'>.</span>
                <span className={tailwindColors[index]}>
                    {formattedItem}
                </span>
            </>
        ) : (
            <span className={tailwindColors[index]}>
                {formattedItem}
            </span>
        )
    );
})}
</div>
    
        <div className = 'flex w-[100%] items-center gap-10'>
        <input
            ref={inputScrollRef}
            spellcheck="false"
            id='inputField'
            type="text" 
            placeholder="Type or Drag Your Query"
            className={`w-full min-w-40 border-4 ${isInputHovered ? 'border-blue-500' : 'border-transparent'} h-12 text-xl text-transparent font-semibold bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
            value={inputValue}
            onChange={handleChange}
        />
        <div onClick={isDisabled?null:handleSubmitClick} className='h-16 w-20 flex items-center font-semibold cursor-pointer text-blue-500 
        border-blue-500 opacity-75 hover:opacity-100 border-4 justify-center p-1  rounded-lg'>submit</div>
 
        <div className='min-w-64'>


        </div>
        </div>
        
        </div>
      

)

}; export default InputAndSubmit;