const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
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

    // Reset heading and clear list
    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial} ${lastName}!`.replace(/\s+/g, " ").trim();
    loopList.innerHTML = "";

    // Prompt user for count and ensure it's a valid positive number
    const count = parseInt(prompt(`How high do you want to count, ${firstName}?`), 10);
    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Loop to append list items
    for (let x = 1; x <= count; x++) {
        const listItem = document.createElement("li");
        listItem.textContent = `Sweet Syria - ${x % 2 === 0 ? "The number is even" : "The number is odd"}`;
        loopList.appendChild(listItem);
    }
});
