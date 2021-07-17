let passwordField = document.getElementById("password");
passwordField.addEventListener("input", (event) => {
    passwordField.setCustomValidity('');

    if (!!passwordField.validity.valid) {
        passwordField.setCustomValidity("");
    } else if (passwordField.value.length < 6) {
        passwordField.setCustomValidity("Password length must be equal or bigger than 6");
    } else {
        passwordField.setCustomValidity("Password must contain capital, lowercase letters and digits");
    }
});