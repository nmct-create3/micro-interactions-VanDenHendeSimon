let passwordInput, passwordToggleInput, passwordIconShow, passwordIconHide;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    // Fill global variables
    passwordInput = document.querySelector('.js-password-input');

    passwordToggleInput = document.querySelector('.js-password-toggle');
    passwordIconShow = document.querySelector('.js-password-icon-show');
    passwordIconHide = document.querySelector('.js-password-icon-hide');

    passwordToggleInput.addEventListener("click", function() {
        if (passwordToggleInput.checked) {
            passwordIconShow.classList.add('c-password-toggle__icon--hidden');
            passwordIconHide.classList.remove('c-password-toggle__icon--hidden');
            passwordInput.type = "text";
        }   else {
            passwordIconHide.classList.add('c-password-toggle__icon--hidden');
            passwordIconShow.classList.remove('c-password-toggle__icon--hidden');
            passwordInput.type = "password";
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});