const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting"); // Ensure you have an element with this ID
    const loopList = document.getElementById("loop-list");

    // Validate that the user has entered a name
    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

    // Change the greeting dynamically
    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}!`;

    // Prompt user for count
    const count = parseInt(prompt(`How high do you want to count, ${firstName}?`), 10);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Clear previous output
    loopList.innerHTML = "";

    // Generate FizzBuzz output
    for (let i = 1; i <= count; i++) {
        let output = `Sweet Syria - Number ${i} is `;
        if (i % 2 === 0) {
            output += "even";
        } else {
            output += "odd";
        }

        const listItem = document.createElement("li");
        listItem.textContent = output;
        loopList.appendChild(listItem);
    }
});
