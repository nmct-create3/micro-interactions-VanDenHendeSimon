"use strict";
let email = {},
    password = {},
    signInButton;

const getDOMElements = function () {
    email.field = document.getElementById("username");
    password.field = document.getElementById("password");
    signInButton = document.querySelector(".js-sign-in-button");
};

const addErrors = function (elementObject) {
    console.log("adding errors");
    console.log(elementObject.field);
    elementObject.field.classList.add("has-error");
};

const addEmailInputEventListener = function () {
    email.field.addEventListener("input", doubleCheckEmailAddress);
};

const addPasswordInputEventListener = function () {
    password.field.addEventListener("input", doubleCheckPassword);
};

const removeEmailInputEventListener = function () {
    email.field.removeEventListener("input", doubleCheckEmailAddress);
};

const removePasswordInputEventListener = function () {
    password.field.removeEventListener("input", doubleCheckPassword);
};

const removeErrors = function (elementObject) {
    elementObject.field.classList.remove("has-error");
};

const doubleCheckEmailAddress = function() {
    if (isValidEmailAddress(email.field.value)) {
        removeErrors(email);
        removeEmailInputEventListener();
    }   else {
        // HERE
        email.errorMessage = isEmpty(email.field.value) ? "This field is required" : "Invalid email";
    }
}

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

const enableListeners = function () {
    email.field.addEventListener("blur", function () {
        if (!isValidEmailAddress(email.field.value)) {
            console.log("email is invalid");
            if (!isEmpty(email.field.value)) {
                email.errorMessage = "Invalid email address";
            } else {
                console.log("email is empty");
                email.errorMessage = "This field is required";
            }

            addErrors(email);
            addInputEventListener(email);
        }
    });

    password.field.addEventListener("blur", function () {
        console.log("password blur");
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
