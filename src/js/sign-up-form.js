window.addEventListener("DOMContentLoaded", () => {
  console.log("Sign up form loaded!");

  const formElement = document.getElementById("sign-up-form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    console.log(password, confirmPassword);
  });
});
