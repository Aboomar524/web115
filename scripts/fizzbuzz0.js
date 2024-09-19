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

    // Set greeting message
    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial} ${lastName}!`.replace(/\s+/g, " ").trim();
    loopList.innerHTML = ""; // Clear previous output

    // Loop to append list items
    for (let i = 1; i <= 140; i++) {
        let output = "Yummy!"; // Default output
        if (i % 3 === 0 && i % 5 === 0) {
            output = "Yummy Tasty!";
        } else if (i % 3 === 0) {
            output = "Yummy!";
        } else if (i % 5 === 0) {
            output = "Tasty!";
        }

        const outputItem = document.createElement("div");
        outputItem.className = "output-item"; // Add class for styling
        outputItem.textContent = `${i}. ${output}`;
        loopList.appendChild(outputItem);
    }
});
