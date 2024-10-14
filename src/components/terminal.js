import React,{useState,useEffect} from 'react'

const Terminal = () => {

    const [inputValue, setInputValue] = useState('');
    const [splitOnPeriodArray,setSplitOnPeriodArray] = useState([])
    //const[highlightedText, setHighlightedText] = useState('')

    const handleChange = (e) => {
 
      setSplitOnPeriodArray(e.target.value.split('.'))

      setInputValue(e.target.value);
    };


    const tailwindColors = [

        'text-fuchsia-500','text-indigo-200', 'text-green-200','text-cyan-500'

    ]
/*
    useEffect(()=>{
        var text = ''

        for(let item of splitOnPeriodArray){
            text = text+item
        }
        console.log(text)
        //setHighlightedText()

    },[splitOnPeriodArray])
*/

    const container = [<div className="h-10 w-full border-b-2 border-slate-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>,
    <div className="h-10 w-full border-b-2 border-zinc-950"></div>,<div className="h-10 w-full border-b-2 border-zinc-950"></div>]
return(
    <>
       <div className = 'p-20 bg-zinc-900'> </div>
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

            <input 
                type="text" 
                placeholder="Type or Drag Your Query"
                className='w-full h-full text-transparent h-8 bg-zinc-800 font-termina pl-2 p-1 rounded-lg'
                value={inputValue}
                onChange={handleChange}
            />

            </div>
            <div className = 'flex h-full w-full'>
           <div className = 'overflow-scroll mt-10 mb-25 ml-10 w-[80%] bg-zinc-800 rounded-lg'></div>
           <div className = 'overflow-scroll min-w-20 ml-5 mt-10 mb-25 rounded-lg border-zinc-950 border-2 grow'> 
           {container.map((item)=>
           
            item
           )}
           </div>
           </div>

        </div>
        </>
    )


}; export default Terminal;