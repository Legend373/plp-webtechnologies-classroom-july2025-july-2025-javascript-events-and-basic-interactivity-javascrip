// 🌙 Light/Dark Mode Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
});

// 🔢 Counter Game
const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const resetBtn = document.getElementById("reset-btn");
let count = 0;

incrementBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countDisplay.textContent = count;
});

// ❓ FAQ Collapsible Section
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

// 🗂 Tabs Functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        tabContents.forEach((content) => content.classList.add("hidden"));
        button.classList.add("active");
        const targetTab = document.getElementById(button.dataset.tab);
        targetTab.classList.remove("hidden");
    });
});

// 📝 Form Validation
const form = document.getElementById("registration-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const successMsg = document.getElementById("form-success");

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = "block";
    input.style.borderColor = "red";
}

function showSuccess(input) {
    const error = input.nextElementSibling;
    error.style.display = "none";
    input.style.borderColor = "#6200ea";
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        showError(nameInput, "Name is required");
        valid = false;
    } else {
        showSuccess(nameInput);
    }

    // Email Validation
    if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Invalid email address");
        valid = false;
    } else {
        showSuccess(emailInput);
    }

    // Password Validation
    if (passwordInput.value.length < 6) {
        showError(passwordInput, "Password must be at least 6 characters");
        valid = false;
    } else {
        showSuccess(passwordInput);
    }

    // Confirm Password Validation
    if (passwordInput.value !== confirmPasswordInput.value || confirmPasswordInput.value === "") {
        showError(confirmPasswordInput, "Passwords do not match");
        valid = false;
    } else {
        showSuccess(confirmPasswordInput);
    }

    if (valid) {
        successMsg.textContent = "Registration successful! 🎉";
        form.reset();
        // Reset input borders
        [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => input.style.borderColor = "#ccc");
    } else {
        successMsg.textContent = "";
    }
});
