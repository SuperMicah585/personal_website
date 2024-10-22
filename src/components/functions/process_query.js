import {project_data_object,tech_stack_data_object,hobby_data_object,education_data_object,work_experience_data_object} from './micah_data_objects';

// Individual data arrays - move these definitions above the micah object
const project_data = project_data_object;
const hobby_data = hobby_data_object;
const tech_stack_data = tech_stack_data_object;
const education_data = education_data_object;
const work_experience_data = work_experience_data_object;

// List function for accessing data from micahData
const list = ({ resource, date_greater_than = null, date_less_than = null} = {}) =>  {

    let tmp_array= []

    if(!date_greater_than && !date_less_than){
        return micahData[resource];
    }
    
    if(date_greater_than || date_less_than){

        tmp_array = process_greater_less(resource,date_greater_than,date_less_than,tmp_array)

    }

   

//add a date_after,date_before, and description_contains method
        return tmp_array;
    
};

const process_greater_less = (resource,date_greater_than,date_less_than,tmp_array) =>{


    if (date_greater_than){
        const greater_than_date = new Date(date_greater_than);
        tmp_array = micahData[resource].filter((item) => {
            const string_to_date = new Date(item.start_date);
            return string_to_date > greater_than_date; // Return true if the item should be included
        });


     
    }



    if (date_less_than){
        const less_than_date = new Date(date_less_than);
        tmp_array = tmp_array.filter((item) => {
            const string_to_date = new Date(item.start_date);
   
            return string_to_date < less_than_date; // Return true if the item should be included
        });
    }

    return tmp_array;


}

const fetch = (resource, identifier) => {
    switch(resource){
        case 'projects':
            return grab_query_data('project_name', identifier,resource);  // Only return grab_query_data here
        case 'hobbies':
            return grab_query_data('hobby_name', identifier,resource);   // Corrected: Only return grab_query_data
        case 'tech_stack':
            return grab_query_data('tech_name', identifier,resource);    // Corrected: Only return grab_query_data
        case 'education':
            return grab_query_data('education_name', identifier,resource); // Corrected: Only return grab_query_data
        case 'work_experience':
            return grab_query_data('job_title', identifier,resource);     // Corrected: Only return grab_query_data
        default:
            return [{error:"Query resource not found in the fetch."}]; // Add a default case to handle invalid inputs
    }
};


const grab_query_data = (key,identifier,resource) =>{

    if (identifier) {
        return micahData[resource].find(item =>item[key] === identifier)?micahData[resource].find(item =>item[key] === identifier):{error: "Query param not valid"};
    } else {
        return [{error:"Please include a query param in your fetch"}];
    }

}
//micah.hobbies.list({date_greater_than:'2021-01-20'})
/*
date_greater_than = 
date_less_than = 
*/

// Data sources
const micahData = {
    projects: project_data,
    hobbies: hobby_data,
    tech_stack: tech_stack_data,
    education: education_data,
    work_experience: work_experience_data
};

// micah object with methods to access the data
const micah = {
    projects: {
        list: (params) => list({ resource: 'projects', ...params }),
        fetch: (identifier) => fetch('projects', identifier)
    },
    hobbies: {
        list: (params) => list({ resource: 'hobbies', ...params }),
        fetch: (identifier) => fetch('hobbies', identifier)
    },
    tech_stack: {
        list: (params) => list({ resource: 'tech_stack', ...params }),
        fetch: (identifier) => fetch('tech_stack', identifier)
    },
    education: {
        list: (params) => list({ resource: 'education', ...params }),
        fetch: (identifier) => fetch('education', identifier)
    },
    work_experience: {
        list: (params) => list({ resource: 'work_experience', ...params }),
        fetch: (identifier) => fetch('work_experience', identifier)
    }
};


// parseArray function that uses micah object to list data based on input
const parseArray = (queryArray) => {
    const queryString = `${queryArray[0]}.${queryArray[1]}.${queryArray[2]}`;
    if(queryArray[0] ==='micah'){
    try{

    return eval(queryString); // Pass the identifier as the 3rd element in queryArray
    }
    catch{
        return [{error:'Well you managed to break something'}]
    }
}
else{
    return [{error:'You spell micah m-i-c-a-h'}]
}
};

// Export parseArray function to make it available for import in other files
export { parseArray };
