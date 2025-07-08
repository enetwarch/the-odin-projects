window.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");
  const projectTemplate = document.getElementById("project-template");
  const projectIds = ["one", "two", "three", "four", "five", "six"];

  for (const projectId of projectIds) {
    const template = projectTemplate.content.cloneNode(true);
    template.querySelector(".project").id = projectId;

    projectList.appendChild(template);
  }
});
