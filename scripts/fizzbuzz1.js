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
    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}!`.replace(/\s+/g, " ").trim();
    loopList.innerHTML = ""; // Clear previous output

    // Generate FizzBuzz output with only two words
    for (let i = 1; i <= 125; i++) {
        let output = "Delicious Yummy"; // Only using two words

        const outputItem = document.createElement("div");
        outputItem.textContent = `${i}. ${output}`;
        outputItem.classList.add("output-item"); // Add class for styling
        loopList.appendChild(outputItem);
    }
});
