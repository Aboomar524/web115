const form = document.getElementById("name-form");
const fizzBuzzBang = [{ 3: "yum!" }, { 5: "tasty!" }, { 7: "BANG!" }];

const checkDivision = (firstDivisor, secondDivisor) => firstDivisor % secondDivisor === 0;

form.addEventListener("submit", function (event) {
    // Prevent form submission and page refresh
    event.preventDefault();

    // Get the user input values
    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");

    // Validate user input
    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }

    // Update the greeting with the user's name
    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial}${middleInitial ? "." : ""} ${lastName}!`
        .replace(/\s+/g, " ")
        .trim();

    // Clear the previous list
    loopList.innerHTML = "";

    // Get the count from the user
    let count;
    do {
        count = prompt(`How high do you like to count, ${firstName}?`);
        console.log("Prompt value:", count);  // Debug log to check the prompt value
        if (isNaN(count) || count === null || count.trim() === "") {
            alert("Please enter a valid number.");
        } else {
            count = Number(count);
            break;
        }
    } while (true);

    // Check if count is valid before proceeding
    if (count <= 0) {
        alert("Please enter a number greater than zero.");
        return;
    }

    // Loop through each number up to the count
    for (let x = 1; x <= count; x++) {
        const listItem = document.createElement("li");
        let result = '';

        // Check each number for divisibility against the fizzBuzzBang array
        for (const obj of fizzBuzzBang) {
            for (const [divisor, word] of Object.entries(obj)) {
                if (checkDivision(x, Number(divisor))) {
                    result += word + " "; // Concatenate the word if the number is divisible by the divisor
                }
            }
        }

        // Include the number in the output, even if it's a multiple of 3, 5, or 7
        listItem.textContent = result ? `${x}: ${result.trim()}` : x;

        // Add the list item to the loop list
        loopList.appendChild(listItem);
    }
});
