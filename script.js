// script.js
document.addEventListener("DOMContentLoaded", function () {
    const donationForm = document.getElementById("donation-form");
    const posterContainer = document.getElementById("poster-container");

    donationForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const amount = document.getElementById("amount").value;
        // Handle the donation logic here, e.g., sending the amount to a server

        // Display a sample poster (you can replace this with your actual poster logic)
        const posterHTML = `
            <img src="poster.jpg" alt="Social Cause Poster" width="100%">
        `;
        posterContainer.innerHTML = posterHTML;
    });
});
