import React,{useState,useEffect} from 'react'
import {parseArray} from '../functions/process_query'
const InputAndSubmit = ({dragTriggerValue,dragInputValue,isloadingCallBack,loadingValueCallBack,terminalTextCallBack,isInputHovered}) => {
    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    const [isDisabled,setIsDisabled] = useState(false)
    
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
    <div className = 'w-full'>
    <div className = 'flex mt-16 h-10'>


    {/* Styles text that is within the input */}
        <div className="absolute text-xl font-termina pl-2 py-1.5 rounded-lg pointer-events-none">
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
      
        <div className = 'flex w-[80%] items-center gap-10'>
        <input
            spellcheck="false"
            id='inputField'
            type="text" 
            placeholder="Type or Drag Your Query"
            className={`w-full border-4 ${isInputHovered ? 'border-blue-500' : 'border-transparent'} h-12 text-xl text-transparent font-semibold bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
            value={inputValue}
            onChange={handleChange}
        />
        <div onClick={isDisabled?null:handleSubmitClick} className='h-16 w-20 flex items-center font-semibold cursor-pointer text-blue-500 
        border-blue-500 opacity-75 hover:opacity-100 border-4 justify-center p-1  rounded-lg'>submit</div>
 
        
        </div>
        <div className = 'min-w-60 ml-14'></div>
        </div>
        </div>

)

}; export default InputAndSubmit;