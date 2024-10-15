// Individual data arrays - move these definitions above the micah object
const project_data = [{project_name: "Climb w Friends"},{project_name: "Jason Art"},{project_name: "Worldle"},{project_name: "Twilio Prefix Map"}];
const hobby_data = [{hobby_name: "Rock Climbing"},{hobby_name: "Dancing"},{hobby_name: "Running"},{hobby_name: "Video Games"}];
const tech_stack_data = [{tech_name: "Python"},{tech_name: "Javascript"},{tech_name: "HTML"},{tech_name: "CSS"}];
const education_data = [{education_name: "Computer Science",degree:'Minor'},{education_name: "Financial Economics",degree:'Bachelors'}];
const work_experience_data = [{job_title: "Technical Support Engineer"},{job_title: "College Dining Hall"},{job_title: "Beer Boy"}];

// List function for accessing data from micahData
const list = (resource, name = null) => {
//add a date_after,date_before, and description_contains method
        return micahData[resource];
    
};

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
    projects: {list: (identifier = null) => list('projects', identifier), fetch: (identifier) => fetch('projects', identifier)},
    hobbies: {list: (identifier = null) => list('hobbies', identifier), fetch: (identifier) => fetch('hobbies', identifier)},
    tech_stack: {list: (identifier = null) => list('tech_stack', identifier), fetch: (identifier) => fetch('tech_stack', identifier)},
    education: {list: (identifier = null) => list('education', identifier), fetch: (identifier) => fetch('education', identifier)},
    work_experience: {list: (identifier = null) => list('work_experience', identifier), fetch: (identifier) => fetch('work_experience', identifier)}
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
