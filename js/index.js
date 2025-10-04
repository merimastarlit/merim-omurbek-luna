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
