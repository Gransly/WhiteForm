
let passwordField = document.getElementById("password");

passwordField.addEventListener("input", (event)=>
{
    console.log(`Validity - ${passwordField.checkValidity()} ${passwordField.validity.valid}`)
    if (passwordField.checkValidity() === true) {
        passwordField.setCustomValidity("");
    } else {
        passwordField.setCustomValidity("Password must contain from 6 to 12 symbols, capital, lowercase letters and digits");
    }
});