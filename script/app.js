let passwordInput, passwordToggleInput;
let emailInput, emailLabel;

const isEmpty = function (fieldValue) {
    return !fieldValue || !fieldValue.length;
};

function handleFloatingLabel() {
    // Haal hierin zowel de input als de label op via hun js-* class.
    emailLabel = document.querySelector(".js-floating-label");
    emailInput = document.getElementById("username");

    // Voeg aan de input een eventListener toe die checkt of de focus verloren wordt.
    emailInput.addEventListener("blur", function () {
        // Binnen deze functie bekijken we of de ingevulde value leeg is of niet
        if (!isEmpty(emailInput.value)) {
            // Indien de input niet meer leeg is, dan voegen we de class 'is-floating' toe.
            emailLabel.classList.add("is-floating");
        } else {
            // Anders zullen we deze class (proberen te) verwijderen.
            emailLabel.classList.remove("is-floating");
        }
    });

    // Zorg dat de 'is-floating' class de label bovenaan vastzet.
    /*
    .is-floating {
        transform: translateY(-24px);
    }
    */
}

function handlePasswordSwitcher() {
    // Fill global variables
    passwordInput = document.querySelector(".js-password-input");

    passwordToggleInput = document.querySelector(".js-password-toggle");

    passwordToggleInput.addEventListener("click", function () {
        passwordInput.type = passwordToggleInput.checked ? "text" : "password";
    });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!");
    handleFloatingLabel();
    handlePasswordSwitcher();
});
