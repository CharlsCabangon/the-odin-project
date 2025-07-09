const username = document.getElementById("username");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postal = document.getElementById("postal-code");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

let debounceTimer;

function validateInput(input) {
    if (input.checkValidity()) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
    }
}

// validate on input
email.addEventListener("input", () => validateInput(email));

// validate on blur (when user leaves the field)
email.addEventListener("blur", () => validateInput(email));
postal.addEventListener("blur", () => validateInput(postal));

function validatePasswords() {
    const pass = password.value.trim();
    const confirmPass = confirmPassword.value.trim();

    // Reset any previous errors
    confirmPassword.setCustomValidity("");
    password.setCustomValidity("");

    // Don't validate if either field is empty
    if (!pass || !confirmPass) {
        return;
    } 

    if (pass.length < 8) {
        password.classList.remove("valid");
        password.classList.add("invalid");
        password.setCustomValidity("Password must be at least 8 characters.");
    }

    if (pass !== confirmPass) {
        confirmPassword.setCustomValidity("Passwords do not match.");
    }

    password.reportValidity();
    confirmPassword.reportValidity();
}

function debounceValidate() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(validatePasswords, 400);
}

password.addEventListener("input", debounceValidate);
confirmPassword.addEventListener("input", debounceValidate);