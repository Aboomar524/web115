const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");

    // Validate that the user has entered a name
    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

    // Reset the greeting and clear the list
    greeting.textContent = "Welcome to Sweet Syria.";
    loopList.innerHTML = "";

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
