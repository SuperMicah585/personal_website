import React,{useState,useEffect} from 'react';

const SideBar = ({mobileToggle,mobileCloseToggle,windowWidth,navigateToHeaderCallBack}) =>{
  const[toggle,setToggle] = useState(false)
  console.log(windowWidth,"hi")
    const [dropdownToggle,setDropdownToggle] = useState({"Projects":false,"Hobbies":false,"Tech Stack":false,
    "Education":false,"Work Experience":false})
    
    const subResources = ['Projects','Hobbies','Tech Stack','Education','Work Experience']



    useEffect(()=>{

      if(mobileToggle>0){
        setToggle(true)
      }
    },[mobileToggle])

    useEffect(()=>{

      if(mobileCloseToggle>0){
        setToggle(false)
      }
    },[mobileCloseToggle])
    
    const chevron = (item,device) => {
    
    return(
    
        (dropdownToggle[item])?
    <div className = 'text-slate-700 size-2'>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="8" stroke="currentColor" class={`${device==='mobile'?'size-3':'size-2'}`}>
    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg></div>:
    
    <div className = 'text-slate-500 size-2'> <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" stroke-width="8" stroke="currentColor" class={`${device==='mobile'?'size-3':'size-2'}`}>
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg></div>
    
        
        
    )
    }
    


    
    
    const dropDownItems = {
        "Projects": ["Overview","Properties","List","Fetch"],
        "Hobbies": ["Overview","Properties","List","Fetch"],
        "Tech Stack": ["Overview","Properties","List","Fetch"],
        "Education": ["Overview","Properties","List","Fetch"],
        "Work Experience": ["Overview","Properties","List","Fetch"],
     
      };
    
    
    
    
      const handleDropDownClick = (dropDownString) => {
        setDropdownToggle((prevState) => ({
          ...prevState, // Copy the previous state
          [dropDownString]: !prevState[dropDownString] // Toggle the selected dropdown
        }));
      };

      return (
        windowWidth > 750 ? (
          <div className='min-w-40 z-50 bg-slate-50 bg-opacity-50 h-screen overflow-scroll border-r border-slate-200 '>
            <div className='mt-40 flex flex-col font-light font-termina gap-5'>
              {subResources.map((item) => (
                <div className='flex flex-col justify-center' key={item}>
                  <div 
                    onClick={() => handleDropDownClick(item)} 
                    className='ml-5 flex items-center gap-1 cursor-pointer hover:opacity-75 hover:gap-0 duration-700'
                  >
                    {item}
                    {chevron(item,'desktop')}
                  </div>
      
                  {/* Sub-items */}
                  <div className='flex flex-col gap-2 ml-8 whitespace-nowrap text-sm'>
                    {dropdownToggle[item] && (
                      dropDownItems[item].map((subItem) => (
                        <div
                          onClick={() => navigateToHeaderCallBack(subItem, item)}
                          key={subItem} 
                          className='cursor-pointer w-fit text-slate-600 hover:text-black border-transparent border-b hover:border-black inline-block'
                        >
                          {subItem}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) :toggle && <div className={`absolute w-screen z-50 bg-slate-50 h-content p-10 border-b-2 border-slate-200 overflow-scroll border-r border-slate-200`}>
        <div onClick = {()=>setToggle(false)} className = 'cursor-pointer hover:opacity-50'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
 </div>
        <div className='flex mt-20 flex-col font-light font-termina gap-5'>
          {subResources.map((item) => (
            <div className='flex flex-col justify-center' key={item}>
              <div 
                onClick={() => handleDropDownClick(item)} 
                className='ml-5 text-4xl flex items-center gap-1 cursor-pointer hover:opacity-75 hover:gap-0 duration-700'
              >
                {item}
                {chevron(item,'mobile')}
              </div>
  
              {/* Sub-items */}
              <div className='flex flex-col gap-2 ml-8 whitespace-nowrap text-2xl'>
                {dropdownToggle[item] && (
                  dropDownItems[item].map((subItem) => (
                    <div
                      onClick={() => navigateToHeaderCallBack(subItem, item)}
                      key={subItem} 
                      className='cursor-pointer w-fit text-slate-600 hover:text-black border-transparent border-b hover:border-black inline-block'
                    >
                      {subItem}
                    </div>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      )}; export default SideBar;