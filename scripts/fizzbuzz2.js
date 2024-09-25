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


    if (!firstName || !lastName) {
        alert("Please enter your first and last name.");
        return;
    }


    greeting.textContent = "Welcome to Sweet Syria.";
    loopList.innerHTML = "";

    greeting.textContent = `${greeting.textContent
        } ${firstName} ${middleInitial}${middleInitial ? "." : ""} ${lastName}!`
        .replace(/\s+/g, " ")
        .trim();


    const count = prompt(`How high do you want to count, ${firstName}?`);

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
