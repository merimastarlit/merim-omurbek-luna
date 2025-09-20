
const footer = document.querySelector("footer");
const thisYear = new Date().getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML = `© Merim Omurbek ${thisYear}`;
footer.appendChild(copyright);

copyright.id = "footer";

let skills = ["JavaScript", "Python", "HTML", "CSS", "AWS Cloud", "GCP Cloud", "Git", "GitHub", "DevOps", "ArgoCD", "Kubernetes", "Docker", "GitHub Actions CI", "Helm", "Terraform"];
let skillsSection = document.getElementById("Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skill.classList.add("skill-item");
    skillsList.appendChild(skill);
}


