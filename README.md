# Week 1 - Mini Portfolio Homepage

## Project Goal
Build a personal mini portfolio homepage that introduces who you are, what you are learning, and what you want to build.

This project focuses on how HTML, CSS, and JavaScript work together. You will write selected HTML elements yourself, apply the correct classes and IDs, and use JavaScript to update text when buttons are clicked.

## Final Demo
By the end, your portfolio should:

- show your name in the header and hero section
- include a short welcome message
- include an About Me section
- show three future project cards
- show a skills section
- let the user upload a profile picture
- update the About Me message when the Learn More button is clicked
- show your coding goal when the goal button is clicked

## Instructions
Work in the `starter` folder of the `mini-portfolio-starter` repository.

Your job is to complete the starter using this week’s concepts: HTML elements, attributes, classes, IDs, DOM selectors, text updates, and click events.

For the HTML challenges, you are not only replacing text. You must write the correct HTML elements and apply the classes or IDs described in the code comments.

## Challenge 1: Write the header name element
In `starter/index.html`, write an `h1` element inside the logo area.

The element should display your full name.

## Challenge 2: Write the hero heading element
In `starter/index.html`, write the hero `h2` element.

It should introduce you by first name and include the wave `span` inside the heading.

## Challenge 3: Write the hero message paragraph
In `starter/index.html`, write a `p` element for the hero message.

It must use:

- `class="hero-text"`
- `id="hero-message"`

Add a short welcome message inside the paragraph.

## Challenge 4: Write the About Me paragraph
In `starter/index.html`, write a `p` element for the About Me message.

It must use:

- `id="about-message"`

Add a short bio inside the paragraph.

## Challenge 5: Write the first project card
In `starter/index.html`, write the first project card.

It should be an `article` element with `class="project-card"`.

Inside the card, include:

- a project icon `div`
- an `h3` title
- a `p` description

## Challenge 6: Write the second project card
Write the second project card using the same structure as the first card.

Use a different icon, title, and description.

## Challenge 7: Write the third project card
Write the third project card using the same structure as the first card.

Use a different icon, title, and description.

## Challenge 8: Add the Learn More click event
In `starter/script.js`, add a click event to the Learn More button.

## Challenge 9: Update the About Me text
Inside the Learn More button event, use `textContent` to change the About Me paragraph to a longer message about you.

## Challenge 10: Add the coding goal click event
In `starter/script.js`, add a click event to the Show My Coding Goal button.

## Challenge 11: Display your coding goal
Inside the coding goal button event, use `textContent` to display your coding goal.

## Challenge 12: Highlight the coding goal message
Inside the coding goal button event, use `classList.add()` to add the `highlight-message` class to the goal paragraph.

## Extension Challenges
After the required project works, you may personalize it further without changing the main app behavior.

You can:

- adjust colors in the CSS
- change the skills listed in the skills section
- improve your About Me and coding goal messages
- add one extra skill pill using the same HTML pattern
