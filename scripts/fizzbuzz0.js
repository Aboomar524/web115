const form = document.getElementById("name-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const loopList = document.getElementById("loop-list");

    // Validate that the user has entered a name
    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

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
        let output = "Bazoom Bazang - ";
        if (i % 2 === 0) {
            output += "the number is even";
        } else {
            output += "the number is odd";
        }

        const listItem = document.createElement("li");
        listItem.textContent = output;
        loopList.appendChild(listItem);
    }
});
