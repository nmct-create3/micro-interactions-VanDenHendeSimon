"use strict";
let email = {}, password = {}, signInButton;

const getDOMElements = function() {
    email.field = document.querySelector('#username');
    password.field = document.querySelector('#password');
    signInButton = document.querySelector('.js-sign-in-button');
}

const fillAdditionalElementSpecs = function() {
    email.errorMessage = "Email error message";
    password.errorMessage = "Password error message";
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const enableListeners = function() {
    email.feld.addEventListener("blur", function () {
        isValidEmailAddress(email.field.value);
    })
    password.feld.addEventListener("blur", function () {})
}

const init = function () {
    getDOMElements();
    fillAdditionalElementSpecs();
    enableListeners();
};

document.addEventListener("DOMContentLoaded", init);
