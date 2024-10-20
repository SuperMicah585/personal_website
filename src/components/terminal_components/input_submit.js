import React, { useState, useEffect, useRef } from 'react';
import { parseArray } from '../functions/process_query';

const InputAndSubmit = ({ windowWidth, dragTriggerValue, dragInputValue, isloadingCallBack, loadingValueCallBack, terminalTextCallBack, isInputHovered }) => {
  const [inputValue, setInputValue] = useState('');
  const [splitOnPeriodArray, setSplitOnPeriodArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const scrollableDivRef = useRef(null);
  const inputScrollRef = useRef(null);

  // Scroll event handler


  useEffect(() => {
    if (dragTriggerValue > 0) {
      setInputValue(dragInputValue);
    }
  }, [dragTriggerValue]);

  useEffect(() => {
    setSplitOnPeriodArray(inputValue.split('.'));
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };



  const handleSubmitClick = async () => {
    setIsDisabled(true);
    isloadingCallBack(true);
    const percentageArray = ['25%', '50%', '75%', '100%', '0%'];

    const micahsDataObject = parseArray(splitOnPeriodArray);
    terminalTextCallBack(micahsDataObject);

    for (let item of percentageArray) {
      if (item === '0%') {
        isloadingCallBack(false);
        setIsDisabled(false);
      }
      loadingValueCallBack(item);

      // Add a 1-second delay between iterations
      await new Promise(resolve => setTimeout(resolve, 1000)); // 1000 ms = 1 second
    }
  };

  return (
    <div className={`flex ${windowWidth < 651 ? '' : ''} relative w-full mt-10 h-10`}>
      <div ref={scrollableDivRef} className={`absolute min-w-40 text-xl whitespace-nowrap overflow-x-scroll overflow-y-hidden 
      ${windowWidth < 651 ? 'w-[calc(100%-112px)]' : 'w-[calc(100%-363px)]'}  h-12 font-termina pl-1 py-1 rounded-lg pointer-events-none right-0 left-0`}>
      </div>

      <div className='flex w-[calc(100%)] items-center'>
        <input
          ref={inputScrollRef}
          spellCheck="false"
          id="inputField"
          type="text"
          placeholder="Type or Drag Query"
          className={`w-[calc(100%)] border-4 min-w-40 ${isInputHovered ? 'border-blue-500' : 'border-transparent'} h-12 text-xl text-slate-400 font-semibold bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
          value={inputValue}
          onChange={handleChange}
         
        />
        <div onClick={isDisabled ? null : handleSubmitClick} className='h-16 ml-10 w-20 flex items-center font-semibold cursor-pointer text-blue-500 
        border-blue-500 opacity-75 hover:opacity-100 border-4 justify-center p-1  rounded-lg'>submit</div>

        <div className={`${windowWidth < 651 ? 'w-0' : 'min-w-64'}`}></div>
      </div>
      
    </div>
  );
};

export default InputAndSubmit;
