window.addEventListener("DOMContentLoaded", () => {
  const formElement = document.getElementById("form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    console.log(password, confirmPassword);
  });
});
