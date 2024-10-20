import React, { useState, useEffect, useRef } from 'react';
import { parseArray } from '../functions/process_query';

const InputAndSubmit = ({
  windowWidth,
  dragTriggerValue,
  dragInputValue,
  isloadingCallBack,
  loadingValueCallBack,
  terminalTextCallBack,
  isInputHovered,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [splitOnPeriodArray, setSplitOnPeriodArray] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);
  const [scrollLevel, setScrollLevel] = useState(0);
  const scrollableDivRef = useRef(null);
  const inputScrollRef = useRef(null);

  const handleInputScroll = () => {
    if (inputScrollRef.current && scrollableDivRef.current) {
      const scrollLeft = inputScrollRef.current.scrollLeft;
      setScrollLevel(scrollLeft); // Update the state with scroll position
      scrollableDivRef.current.scrollLeft = scrollLeft; // Sync scrollable div with input
    }
  };

  useEffect(() => {
    const inputDiv = inputScrollRef.current;
    if (inputDiv) {
      inputDiv.addEventListener('scroll', handleInputScroll, { passive: true });
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (inputDiv) {
        inputDiv.removeEventListener('scroll', handleInputScroll);
      }
    };
  }, []);

  const setScrollPosition = (position) => {
    if (scrollableDivRef.current && scrollableDivRef.current.scrollLeft !== position) {
      scrollableDivRef.current.scrollLeft = position;
    }
  };

  useEffect(() => {
    setScrollPosition(scrollLevel);
  }, [scrollLevel]);

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

  const tailwindColors = [
    'text-slate-300 font-bold',
    'text-blue-500 font-bold',
    'text-blue-300 font-bold',
  ];

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
      loadingValueCallBack(item); // Update the loading state with the current percentage
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1000 ms = 1 second
    }
  };

  return (
    <div className={`flex ${windowWidth < 651 ? '' : ''} relative w-full mt-16 h-10`}>
      <div
        ref={scrollableDivRef}
        className={`absolute min-w-40 text-xl whitespace-nowrap overflow-x-scroll overflow-y-hidden 
    ${windowWidth < 651 ? 'w-[calc(100%-112px)]' : 'w-[calc(100%-363px)]'}  h-12 font-termina pl-1 py-1 rounded-lg pointer-events-none right-0 left-0`}
      >
        {splitOnPeriodArray.map((item, index) => {
          const regex = /"([^"]*)"/g;
          const formattedItem = item.split(regex).map((part, i) => {
            if (i % 2 === 1) {
              return <span key={i} className="text-amber-700 opacity-75">"{part}"</span>;
            }
            return part;
          });

          return index > 0 ? (
            <>
              <span className="font-termina text-white">.</span>
              <span className={tailwindColors[index]}>{formattedItem}</span>
            </>
          ) : (
            <span className={tailwindColors[index]}>{formattedItem}</span>
          );
        })}
      </div>

      <div className="flex w-[calc(100%)] items-center">
        <input
          ref={inputScrollRef}
          spellCheck="false"
          id="inputField"
          type="text"
          placeholder="Type or Drag"
          className={`w-[calc(100%)] border-4 min-w-40 ${
            isInputHovered ? 'border-blue-500' : 'border-transparent'
          } h-12 text-xl text-transparent font-semibold bg-zinc-800 font-termina p-1 rounded-lg caret-blue-500`}
          value={inputValue}
          onChange={handleChange}
        />
        <div
          onClick={isDisabled ? null : handleSubmitClick}
          className="h-16 ml-10 w-20 flex items-center font-semibold cursor-pointer text-blue-500 border-blue-500 opacity-75 hover:opacity-100 border-4 justify-center p-1 rounded-lg"
        >
          submit
        </div>

        <div className={`${windowWidth < 651 ? 'w-0' : 'min-w-64'}`}></div>
      </div>
    </div>
  );
};

export default InputAndSubmit;
