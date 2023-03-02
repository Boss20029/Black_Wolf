const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");

signupForm.style.display = "none";

document.getElementById("signup-btn").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
});

document.getElementById("login-btn").addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Add login logic here
});

signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Add signup logic here
});
