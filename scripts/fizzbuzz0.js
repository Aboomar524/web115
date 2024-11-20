const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");

    let formValid = true;  // Flag to track form validity

    // Reset the greeting and clear the list
    greeting.textContent = "Welcome to Sweet Syria.";
    loopList.innerHTML = "";  // Clears previous list items

    // Validate that the user has entered first name
    if (!firstName) {
        document.getElementById("first-name").style.border = "2px solid red";
        alert("Please enter your first name.");
        formValid = false;
    } else {
        document.getElementById("first-name").style.border = "";
    }

    // Validate that the user has entered last name
    if (!lastName) {
        document.getElementById("last-name").style.border = "2px solid red";
        alert("Please enter your last name.");
        formValid = false;
    } else {
        document.getElementById("last-name").style.border = "";
    }

    // If form is not valid, exit early
    if (!formValid) {
        return;
    }

    // Update the greeting with the user's name
    greeting.textContent = `${greeting.textContent} ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}!`.replace(/\s+/g, " ").trim();

    // Prompt user for count
    const count = parseInt(prompt(`How high do you want to count, ${firstName}?`), 10);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Generate the counting output
    for (let x = 1; x <= count; x++) {
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.textContent = `Sweet Syria - ${x % 2 === 0 ? "the number is even" : "the number is odd"}`;

        // Append the list item to the loop list
        loopList.appendChild(listItem);
    }
});
