import React, { useRef, forwardRef, useImperativeHandle } from 'react';
const TechStack = forwardRef((_, ref) =>{

    const overViewRef = useRef();
    const propertiesRef = useRef();
    const ListRef = useRef();
    const FetchRef = useRef();

    const response_Properties = [
    {name:'tech_name',type: 'string',description: 'The name used to describe the resource.'},,
    {name:'start_date',type: 'null',description: 'The start date for the resource.'},
    {name:'front_end',type: 'array',description: 'An array that is made up of properties related to the front end for the item. '},
    {name:'back_end',type: 'array',description: 'An array that is made up of properties related to the back end for the item. '},
    {name:'databases',type: 'array',description: 'An array that is made up of properties related to databases for the item. '}]
    
    useImperativeHandle(ref, () => ({
        overViewRef,
        propertiesRef,
        ListRef,
        FetchRef,
    }));

    const tech_stack_fetch = [
        {name:'tech_name',status: 'required', type: 'string',description: 'Filters only tech stacks that match the inputted stack name.'}]
    
    const Table = forwardRef(({ object }, ref) =>{

        return(
            <div ref = {ref} className = 'w-full h-content border-slate-200 border rounded'> 

    <div className = 'flex flex-col p-5'>{object.map((item)=>
    <div 
    className ={`flex flex-col gap-5 ${item.name !== 'tech_name'?'mt-5':''}`} > 
    <div className = 'flex sm:gap-10 gap-2'>
    <div className = 'font-semibold'>{item.name}</div>
    
    <div className = 'opacity-50 text-sm'>{item.type}</div>  
    <div className = {`opacity-50 text-sm ${item.status=='required'?'text-red-500 opacity-100':''}`}>{item.status}</div> 
    </div> 
    
    <div>{item.description}</div> 
        
    <div className = 'border-slate-200 border-b mt-5'> </div>
        </div>)}  </div>  
    </div>
        )
    });

    const EndpointDiv = ({text}) =>{
        return(
            <div className = 'border border-slate-300 w-fit pl-2 pr-2 bg-slate-100 rounded font-semibold'> {text} </div>
        )
    } 
        
    const header = (text,size) =>{ 
        return <div className ={`mt-5 mb-5 ${size} font-semibold`}> {text}</div> 
    }

    return(
        <div div className = 'font-light'> 
            <div className = 'mt-5 w-full border-slate-200 border-b'> </div> 
            {header('Tech Stack Resource','text-4xl')}  
            <p ref = {overViewRef} className = 'mt-5 font-light'>
                The Tech Stack resource allows you to view the tech stacks that Micah has.
            </p> 

            <br/>
            {header('Response Properties','text-2xl')}
            <Table ref = {propertiesRef} object={response_Properties}/> 
            {header('Retrieve a List of Tech Stacks','text-2xl')}
            <EndpointDiv text = 'micah.tech_stack.list()' />
            <div ref = {ListRef}> </div>
            {header('Fetch a Specific Tech Stack','text-2xl')}
            <EndpointDiv text = 'micah.tech_stack.fetch(<tech_name>)' />
            {header('Path parameter','text-1xl')}
            <Table ref = {FetchRef} object={tech_stack_fetch}/> 
        </div>
    )
}); 

export default TechStack;
