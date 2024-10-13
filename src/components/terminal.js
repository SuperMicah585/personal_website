import React,{useState} from 'react'

const Terminal = () => {

    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    console.log(splitOnPeriodArray)
    const handleChange = (e) => {

      setSplitOnPeriodArray(e.target.value.split('.'))

      setInputValue(e.target.value);
    };

    const container = [<div className="h-10 w-full border-b-2 border-slate-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>]
return(
        <div className = 'flex relative flex-col h-screen bg-zinc-900 p-24'>
            <div className = 'absolute ml-10 mt-10 top-0 text-white z-50 text-6xl font-termina'>ABOUT ME</div>
            <div className = 'mt-10 ml-10 w-[80%] h-10'>
            
            <input 
                type="text" 
                placeholder="Type or Drag Your Query"
                className='w-full h-full bg-zinc-800 text-amber-600 font-termina pl-2 rounded-lg'
                value={inputValue}
                onChange={handleChange}
            />

            </div>
            <div className = 'flex h-full w-full'>
           <div className = 'overflow-scroll mt-10 mb-25 ml-10 w-[80%] w-screen bg-zinc-800 rounded-lg'></div>
           <div className = 'overflow-scroll min-w-20 ml-5 mt-10 mb-25 rounded-lg border-zinc-950 border-2 grow'> 
           {container.map((item)=>
           
            item
           )}
           </div>
           </div>

        </div>
    )


}; export default Terminal;