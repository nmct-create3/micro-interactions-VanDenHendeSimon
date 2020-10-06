let passwordInput, passwordToggleInput;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    // Fill global variables
    passwordInput = document.querySelector('.js-password-input');

    passwordToggleInput = document.querySelector('.js-password-toggle');

    passwordToggleInput.addEventListener("click", function() {
        if (passwordToggleInput.checked) {
            passwordInput.type = "text";
        }   else {
            passwordInput.type = "password";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});