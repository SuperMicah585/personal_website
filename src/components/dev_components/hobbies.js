import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const Hobbies = forwardRef((_, ref) =>{

    const overViewRef = useRef();
    const propertiesRef = useRef();
    const ListRef = useRef();
    const FetchRef = useRef();

    const response_Properties = [
    {name:'hobby_name',type: 'string',description: 'The name used to describe the resource.'},
    {name:'types',type: 'array',description: 'An array that is made up of specific hobbies within the resource '},
    {name:'start_date',type: 'string',description: 'The start date for the resource.'}]
    
    const hobbies_list = [
        {name:'date_greater_than',status: 'optional',type: 'string<yyyy-mm-dd>',description: 'Filters only hobbies with a date that is more recent than the provided date.'},
    {name:'date_less_than',status: 'optional',type: 'string<yyyy-mm-dd>',description: 'Filters only hobbies with a date that is less recent than the provided date.'}]
    
    const hobbies_fetch = [
        {name:'hobby_name',status: 'required', type: 'string',description: 'Filters only hobbies that match the inputed project name'}]
    
    
        useImperativeHandle(ref, () => ({
            overViewRef,
            propertiesRef,
            ListRef,
            FetchRef,
        }));
        
    const Table = forwardRef(({ object }, ref) =>{
    
        return(
    
            <div ref = {ref} className = 'w-full h-content border-slate-200 border rounded'> 
    
    <div className = 'flex flex-col p-5'>{object.map((item)=>
    <div 
    className ={`flex flex-col gap-5 ${item.name !== 'hobby_name'?'mt-5':''}`} > 
    <div className = 'flex gap-10'>
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
        
    const header = (text,size) =>{ return <div className ={`mt-5 mb-5 ${size} font-semibold`}> {text}</div> }
    
    
    
    
    
    
        return(
            <div div className = 'font-light'> 
            <div className = 'mt-5 w-full border-slate-200 border-b'> </div> 
            {header('Hobby Resource','text-4xl')}  
            <p ref = {overViewRef} className = 'mt-5 font-light'>
                The Hobby resource allows you to view the hobbies that Micah has.
            </p> 
    
    
            <br/>
            {header('Response Properties','text-2xl')}
            <Table ref = {propertiesRef} object={response_Properties}/> 
            {header('Retrieve a List of Hobbies','text-2xl')}
            <EndpointDiv text = 'micah.hobbies.list()' />
            {header('Query parameters','text-1xl')}
            <Table ref = {ListRef} object={hobbies_list}/> 
            {header('Fetch a Specific Hobby','text-2xl')}
            <EndpointDiv text = 'micah.hobbies.fetch(<hobby_name>)' />
            {header('Path parameter','text-1xl')}
            <Table ref = {FetchRef} object={hobbies_fetch}/> 
            </div>
    
        )
    }); export default Hobbies;