window.addEventListener("DOMContentLoaded", () => {
  const formElement = document.getElementById("sign-up-form");
  const passwordElement = document.getElementById("password");
  const confirmPasswordElement = document.getElementById("confirm-password");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(formElement);
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm-password");

    if (confirmPassword !== password) {
      const message = "Passwords do not match";

      passwordElement.setCustomValidity(message);
      confirmPasswordElement.setCustomValidity(message);

      const handleInput = (event) => {
        passwordElement.setCustomValidity("");
        confirmPasswordElement.setCustomValidity("");
        event.target.removeEventListener("input", handleInput);
      };

      passwordElement.addEventListener("input", handleInput);
      confirmPasswordElement.addEventListener("input", handleInput);

      formElement.reportValidity();
    } else {
      passwordElement.setCustomValidity("");
      confirmPasswordElement.setCustomValidity("");
    }
  });
});
