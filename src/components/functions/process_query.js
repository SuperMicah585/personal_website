// Individual data arrays - move these definitions above the micah object
const project_data = [{identifier: "Climb w Friends"},{identifier: "Jason Art"},{identifier: "Worldle"},{identifier: "Twilio Prefix Map"}];
const hobby_data = [{identifier: "Rock Climbing"},{identifier: "Dancing"},{identifier: "Running"},{identifier: "Video Games"}];
const tech_stack_data = [{identifier: "Python"},{identifier: "Javascript"},{identifier: "HTML"},{identifier: "CSS"}];
const education_data = [{identifier: "Computer Science"},{identifier: "Financial Economics"}];
const work_experience_data = [{identifier: "Technical Support Engineer"},{identifier: "College Dining Hall"},{identifier: "Beer Boy"}];

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
    return (micah[queryArray[1]].list()); // Pass the identifier as the 3rd element in queryArray
};

// Export parseArray function to make it available for import in other files
export { parseArray };
