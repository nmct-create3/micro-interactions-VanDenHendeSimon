"use strict";
let email = {},
    password = {},
    signInButton;

const getDOMElements = function () {
    email.field = document.querySelector(".js-username");
    email.input = document.getElementById("username");
    email.errorMessage = document.querySelector(".js-email-error-message");

    password.field = document.querySelector(".js-password");
    password.input = document.getElementById("password");
    password.errorMessage = document.querySelector(".js-password-error-message");

    signInButton = document.querySelector(".js-sign-in-button");
};

const isValidEmailAddress = function (emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function (password) {
    // Basis manier om passwoord te checken.
    return password.length > 1;
};

const isEmpty = function (fieldValue) {
    return !fieldValue || !fieldValue.length;
};

const addErrors = function (elementObject, errorMessage) {
    elementObject.field.classList.add("has-error");

    elementObject.errorMessage.innerHTML = errorMessage;
    // TODO: Met een class ipv zo display te zetten
    elementObject.errorMessage.style.display = "block";
};

const removeErrors = function (elementObject) {
    elementObject.field.classList.remove("has-error");

    // TODO: Met een class ipv zo display te zetten
    elementObject.errorMessage.style.display = "none";
};

const doubleCheckEmailAddress = function () {
    if (isValidEmailAddress(email.input.value)) {
        // Het is geldig
        removeErrors(email);
        email.input.removeEventListener("input", doubleCheckEmailAddress);
    } else {
        // Invalid email address
        if (isEmpty(email.input.value)) {
            // Als het leeg is weer efkes alles eraf te halen,
            // tenzij ge uit het veld klikt, dan firet blur opnieuw en komt de error er weer op
            removeErrors(email);
            email.input.removeEventListener("input", doubleCheckEmailAddress);
        } else {
            addErrors(email, "Invalid email address");
        }
    }
};

const doubleCheckPassword = function () {
    if (isValidPassword(password.input.value)) {
        // Het is geldig
        removeErrors(password);
        password.input.removeEventListener("input", doubleCheckPassword);
    } else {
        // Invalid email address
        if (isEmpty(password.input.value)) {
            // Als het leeg is weer efkes alles eraf te halen,
            // tenzij ge uit het veld klikt, dan firet blur opnieuw en komt de error er weer op
            removeErrors(password);
            password.input.removeEventListener("input", doubleCheckPassword);
        } else {
            addErrors(password, "Invalid password");
        }
    }
};

const enableListeners = function () {
    email.input.addEventListener("blur", function () {
        if (isEmpty(email.input.value)) {
            addErrors(email, "This field is required");
            email.input.addEventListener("input", doubleCheckEmailAddress);
        } else {
            if (!isValidEmailAddress(email.input.value)) {
                addErrors(email, "Invalid email address");
                email.input.addEventListener("input", doubleCheckEmailAddress);
            }
        }
    });

    password.input.addEventListener("blur", function () {
        if (isEmpty(password.input.value)) {
            addErrors(password, "This field is required");
            password.input.addEventListener("input", doubleCheckPassword);
        } else {
            if (!isValidPassword(password.input.value)) {
                addErrors(password, "Invalid password");
                password.input.addEventListener("input", doubleCheckPassword);
            }
        }
    });

    signInButton.addEventListener("click", function () {
        console.log("button clicked");
    });
};

const init = function () {
    getDOMElements();
    enableListeners();
};

document.addEventListener("DOMContentLoaded", init);
