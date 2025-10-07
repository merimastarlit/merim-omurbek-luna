//Dynamic footer with current year
const footer = document.querySelector("footer");
const thisYear = new Date().getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `© Merim Omurbek ${thisYear}`;
footer.appendChild(copyright);

copyright.id = "footer";


//Skills section dynamic list
let skills = ["JavaScript", "Python", "HTML", "CSS", "AWS Cloud", "GCP Cloud", "Git", "GitHub", "DevOps", "ArgoCD", "Kubernetes", "Docker", "GitHub Actions CI", "Helm", "Terraform"];
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.classList.add("skill-item");
    skillsList.appendChild(skill);
}

//Leave a message form

//selecting the "leave_message" form by name attribute
const messageForm = document.querySelector("form[name=leave_message]");

//adding an event listener for the form submission
messageForm.addEventListener("submit", (event) => {
    //preventing default refreshing of the page
    event.preventDefault();
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    //adding console log to log the three variables
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);


    //creating a new message entry in the message list
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    newMessage = document.createElement("li");

    //using innerHTML to add the message content with a mailto link
    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>wrote: ${message}</span>`;
    messageList.className = "message-list";
    messageList.appendChild(newMessage);

    //adding a remove button to each message entry
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.className = "remove-button";
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);

    //resetting the form after submission
    messageForm.reset();

});



//Using Fetch API to get GitHub repositories to display in Projects section

// Fetching the repositories from GitHub API
fetch('https://api.github.com/users/merimastarlit/repos')
    .then((response) => {
        //error handling for the fetch request
        if (!response.ok) {
            throw new Error('Request failed');
        }
        //return the response as JSON
        return response.json(); // Parse the response as JSON
    })

    .then((repositories) => {

        console.log(repositories); // Log the repositories to see the data

        // 
        // Example: display project links
        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector("ul");
        projectList.classList.add("project-list");

        // Loop through the repositories and create list items with links
        for (let i = 0; i < repositories.length; i++) {
            // create a new list item
            const project = document.createElement("li");
            const link = document.createElement("a");

            //set the link attributes
            link.href = repositories[i].html_url;

            //open the link in a new tab
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            //set the link text to the repository name
            link.textContent = repositories[i].name;

            //filter out forked repositories
            if (!repositories[i].fork) {
                //append the link to the list item and the list item to the project list
                project.appendChild(link);
                //append the project to the project list
                projectList.appendChild(project);
            }
        }
    })
    .catch((error) => {
        //log any errors that occur during the fetch process
        console.error('An error occurred:', error);
        const projectSection = document.getElementById("Projects");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "Sorry, we are unable to load the projects at this time.";
        projectSection.appendChild(errorMessage);
    });

