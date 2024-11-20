const form = document.getElementById("name-form");

const checkDivision = (firstDivisor, secondDivisor) =>
    firstDivisor % secondDivisor === 0;

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");
    const firstDivisor = 3;
    const secondDivisor = 5;

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
    greeting.textContent = `${greeting.textContent
        } ${firstName} ${middleInitial}${middleInitial ? "." : ""} ${lastName}!`
        .replace(/\s+/g, " ")
        .trim();

    // Prompt user for count
    const count = prompt(`How high do you want to count, ${firstName}?`);

    // Generate the counting output
    for (let x = 1; x <= count; x++) {
        const listItem = document.createElement("li");

        if (checkDivision(x, firstDivisor) && checkDivision(x, secondDivisor)) {
            listItem.textContent = `Divisible by both ${firstDivisor} and ${secondDivisor}`;
        } else if (checkDivision(x, firstDivisor)) {
            listItem.textContent = `Divisible by ${firstDivisor}`;
        } else if (checkDivision(x, secondDivisor)) {
            listItem.textContent = `Divisible by ${secondDivisor}`;
        } else {
            listItem.textContent = "Just a regular number";
        }

        loopList.appendChild(listItem);
    }
});
