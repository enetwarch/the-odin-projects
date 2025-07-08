window.addEventListener("DOMContentLoaded", () => {
  const projects = {
    "Super Cool Projects":
      "Sed tempus ut lacus ut scelerisque. Suspendisse sollicitudin nibh erat, id facilisis felis accumsan nec.",
    "Less Cool Project":
      "Nullam condimentum ipsum ut lectus vehicula consectetur. Quisque sed dolor tincidunt, consectetur sapien et, facilisis dolor. Duis sem purus, dignissim ut sapien in, varius pellentesque lacus.",
    "Impossible App":
      "In hac habitasse platea dictumst. Vivamus dictum rutrum arcu, a placerat velit sagittis id. Nullam vel mauris ut nisi ultrices fermentum non a elit.",
    "Easy Peasy App":
      "Etiam cursus eros ac efficitur fringilla. Vestibulum dignissim urna eget accumsan aliquam. Curabitur dignissim nisi in tortor commodo, ac bibendum magna tincidunt.",
    "Ad Blocker":
      "Quisque eget rutrum nisl. Nam augue justo, cursus vitae metus vel, pharetra hendrerit felis. Aliquam sed malesuada eros.",
    "Money Maker":
      "Praesent convallis, libero quis congue elementum, nunc ante faucibus sapien, ac scelerisque tortor purus sit amet ex. Pellentesque mollis nec sem vel aliquam.",
  };

  const projectList = document.getElementById("project-list");
  const projectTemplate = document.getElementById("project-template");

  for (const [title, description] of Object.entries(projects)) {
    const template = projectTemplate.content.cloneNode(true);

    template.querySelector(".project__title").textContent = title;
    template.querySelector(".project__description").textContent = description;

    projectList.appendChild(template);
  }
});
