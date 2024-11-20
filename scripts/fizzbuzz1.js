const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");

    // Check if the first name is missing
    if (!firstName) {
        alert("Please enter your first name.");
        document.getElementById("first-name").focus();  // Focus on the first name field
        return; // Exit the function if first name is missing
    }

    // Check if the last name is missing
    if (!lastName) {
        alert("Please enter your last name.");
        document.getElementById("last-name").focus();  // Focus on the last name field
        return; // Exit the function if last name is missing
    }

    // Reset the greeting and clear the list
    greeting.textContent = "Welcome to Sweet Syria.";
    loopList.innerHTML = "";  // Clears previous list items

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
