

const LoadingBarAndTextDisplay = ({loadingState,terminalDisplay,isLoading}) =>{

    const formatJSON = (jsonObj) => {
        // Stringify the object with indentation
        const jsonString = JSON.stringify(jsonObj, null, 2);
      
        // First, style the keys (before the colon)
        const formattedKeysJSON = jsonString.replace(/"([^"]+)":/g, (match, p1) => {
          return `<span class="text-blue-500 opaity-75 font-termina text-base font-bold">"${p1}":</span>`;
        });
      
        // Second, style the values (string values after the closing span tag)
        const formattedJSON = formattedKeysJSON.replace(/<\/span>(\s*"[^"]*")/g, (match, p1) => {
          return `</span><span class="text-amber-700 opacity-75 font-termina font-semibold text-sm">${p1}</span>`;
        });
    
        const FinalformattedJSON = formattedJSON.replace(/<\/span>(\s*\[[^\]]*\])/g, (match, p1) => {
            return `</span><span class="text-green-700 opacity-75 font-termina font-semibold text-sm">${p1}</span>`;
          });
      
        
        return FinalformattedJSON;
      };

return(

    <div className = 'overflow-scroll relative mt-10 mb-25 w-[90%] bg-zinc-800 rounded-lg'>
    {loadingState==='0%'?null:
    <div class="w-full absolute bg-gray-200 rounded-full dark:bg-gray-700">
<div class="bg-blue-500 opacity-75 text-xs font-bold text-blue-100 text-center p-0.5 leading-none rounded-full transition-all duration-1000" style={{width: loadingState}}>{loadingState}</div>
</div>
}
{isLoading?null:
    <pre
className="ml-5 mt-5 font-termina text-sm"
dangerouslySetInnerHTML={{
 __html: terminalDisplay ? formatJSON(terminalDisplay) : '',
}}
/>
}
    </div>
)
}; export default LoadingBarAndTextDisplay;