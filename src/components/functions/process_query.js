// Individual data arrays - move these definitions above the micah object
const project_data = [{project_name: "Climb w Friends"},{project_name: "Jason Art"},{project_name: "Worldle"},{project_name: "Twilio Prefix Map"}];
const hobby_data = [{hobby_name: "Rock Climbing"},{hobby_name: "Dancing"},{hobby_name: "Running"},{hobby_name: "Video Games"}];
const tech_stack_data = [{tech_name: "Python"},{tech_name: "Javascript"},{tech_name: "HTML"},{tech_name: "CSS"}];
const education_data = [{education_name: "Computer Science",degree:'Minor'},{education_name: "Financial Economics",degree:'Bachelors'}];
const work_experience_data = [{job_title: "Technical Support Engineer"},{job_title: "College Dining Hall"},{job_title: "Beer Boy"}];

// List function for accessing data from micahData
const list = (resource, name = null) => {
    if (name) {
        return micahData[resource].find(item => item.identifier === name);
    } else {
        return micahData[resource];
    }
};

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
    projects: {list: (identifier = null) => list('projects', identifier)},
    hobbies: {list: (identifier = null) => list('hobbies', identifier)},
    tech_stack: {list: (identifier = null) => list('tech_stack', identifier)},
    education: {list: (identifier = null) => list('education', identifier)},
    work_experience: {list: (identifier = null) => list('work_experience', identifier)}
};

// parseArray function that uses micah object to list data based on input
const parseArray = (queryArray) => {
    if(queryArray[0] ==='micah'){
    try{
    return (micah[queryArray[1]].list()); // Pass the identifier as the 3rd element in queryArray
    }
    catch{
        return [{error:'Yeah that resource does not exist. Micah is working still working on aquiring more personality depth.'}]
    }
}
else{
    return [{error:'You spell micah m-i-c-a-h'}]
}
};

// Export parseArray function to make it available for import in other files
export { parseArray };
