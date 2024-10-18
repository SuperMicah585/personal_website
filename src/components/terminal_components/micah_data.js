

export const queryItems = [
    {text: "Projects", endpoint: "micah.projects.list()", type: "parent"},
    {text: "Climb w Friends", endpoint: 'micah.projects.fetch("Climb w Friends")', type: "child"},
    {text: "Jason Art", endpoint: 'micah.projects.fetch("Jason Art")', type: "child"},
    {text: "Twilio Prefix Map", endpoint: 'micah.projects.fetch("Twilio Prefix Map")', type: "child"},
    {text: "Worldle", endpoint: 'micah.projects.fetch("Worldle")', type: "child"},
    
    {text: "Hobbies", endpoint: "micah.hobbies.list()", type: "parent"},
    {text: "Rock Climbing", endpoint: 'micah.hobbies.fetch("Rock Climbing")', type: "child"},
    {text: "Dancing", endpoint: 'micah.hobbies.fetch("Dancing")', type: "child"},
    {text: "Running", endpoint: 'micah.hobbies.fetch("Running")', type: "child"},
    {text: "Video Games", endpoint: 'micah.hobbies.fetch("Video Games")', type: "child"},

    {text: "Tech Stack", endpoint: "micah.tech_stack.list()", type: "parent"}, 
    {text: "Languages", endpoint: 'micah.tech_stack.fetch("Languages")', type: "child"},
    {text: "Frameworks", endpoint: 'micah.tech_stack.fetch("Frameworks")', type: "child"},
    {text: "Libraries", endpoint: 'micah.tech_stack.fetch("Libraries")', type: "child"},

    {text: "Education", endpoint: "micah.education.list()", type: "parent"},
    {text: "Financial Economics", endpoint: 'micah.education.fetch("Financial Economics")', type: "child"},
    {text: "Computer Science", endpoint: 'micah.education.fetch("Computer Science")', type: "child"},

    {text: "Work Experience", endpoint: "micah.work_experience.list()", type: "parent"},
    {text: "Technical Support Engineer", endpoint: 'micah.work_experience.fetch("Technical Support Engineer")', type: "child"},
    {text: "College Dining Hall", endpoint: 'micah.work_experience.fetch("College Dining Hall")', type: "child"},
    {text: "Beer Boy", endpoint: 'micah.work_experience.fetch("Beer Boy")', type: "child"}
];