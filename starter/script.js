const learnMoreButton = document.querySelector("#learn-more-button");
const skillButton = document.querySelector("#skill-button");

const aboutMessage = document.querySelector("#about-message");
const goalMessage = document.querySelector("#goal-message");

const avatarUpload = document.querySelector("#avatar-upload");
const avatarImage = document.querySelector("#avatar-image");
const avatarPlaceholder = document.querySelector("#avatar-placeholder");

// Challenge 8: Add a click event that changes the About Me message.
learnMoreButton.addEventListener("click", function () {
    // Challenge 9: Use textContent to replace the About Me paragraph with a longer message about you.
});

// Challenge 10: Add a click event that shows your coding goal.
skillButton.addEventListener("click", function () {
    // Challenge 11: Use textContent to display your coding goal.

    // Challenge 12: Use classList.add() to add the highlight-message class.
});

avatarUpload.addEventListener("change", function () {
    const file = avatarUpload.files[0];

    if (!file) {
        return;
    }

    const imageURL = URL.createObjectURL(file);

    avatarImage.src = imageURL;
    avatarImage.style.display = "block";
    avatarPlaceholder.style.display = "none";
});
