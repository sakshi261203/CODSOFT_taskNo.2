// script.js

const professions = ["Web Developer", "Graphic Designer", "Writer"];

let professionIndex = 0;
let charIndex = 0;

const professionElement = document.getElementById("typedText");
let professionText = professions[professionIndex];
let professionLength = professionText.length;

function typeProfession() {
    if (charIndex < professionLength) {
        professionElement.innerHTML += professionText.charAt(charIndex);
        charIndex++;
        setTimeout(typeProfession, 100);
    } else {
        setTimeout(eraseProfession, 1500);
    }
}

function eraseProfession() {
    if (charIndex >= 0) {
        professionElement.innerHTML = professionText.substring(0, charIndex);
        charIndex--;
        setTimeout(eraseProfession, 50);
    } else {
        professionIndex = (professionIndex + 1) % professions.length;
        professionText = professions[professionIndex];
        professionLength = professionText.length; // Update professionLength here
        charIndex = 0;
        setTimeout(typeProfession, 500);
    }
}

// Start typing animation
typeProfession();
