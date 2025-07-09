const toggle = document.querySelector(".toggle"),
  input = document.querySelector("input");

toggle.addEventListener("click", () => {
  if (input.type === "password") {
    toggle.classList.add("fa-eye");
    input.type = "text";
  } else {
    toggle.classList.remove("fa-eye");
    input.type = "password";
  }
});
