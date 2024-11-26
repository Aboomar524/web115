const form = document.getElementById("name-form");
const fizzBuzzBang = [{ 3: "yum!" }, { 5: "tasty!" }, { 7: "BANG!" }];

const checkDivision = (firstDivisor, secondDivisor) => firstDivisor % secondDivisor === 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const middleInitial = document.getElementById("middle-initial").value;
    const lastName = document.getElementById("last-name").value;
    const greeting = document.getElementById("greeting");
    const loopList = document.getElementById("loop-list");

    if (!firstName) {
        alert("Please enter your first name.");
        document.getElementById("first-name").focus();
        return;
    }

    if (!lastName) {
        alert("Please enter your last name.");
        document.getElementById("last-name").focus();
        return;
    }

    greeting.textContent = `Welcome to Sweet Syria, ${firstName} ${middleInitial}${middleInitial ? "." : ""} ${lastName}!`
        .replace(/\s+/g, " ")
        .trim();

    loopList.innerHTML = "";

    let count;
    do {
        count = prompt(`How high do you like to count, ${firstName}?`);
        console.log("Prompt value:", count);
        if (isNaN(count) || count === null || count.trim() === "") {
            alert("Please enter a valid number.");
        } else {
            count = Number(count);
            break;
        }
    } while (true);

    if (count <= 0) {
        alert("Please enter a number greater than zero.");
        return;
    }

    for (let x = 1; x <= count; x++) {
        const listItem = document.createElement("li");
        let result = '';

        for (const obj of fizzBuzzBang) {
            for (const [divisor, word] of Object.entries(obj)) {
                if (checkDivision(x, Number(divisor))) {
                    result += word + " ";
                }
            }
        }

        listItem.textContent = result ? `${x}: ${result.trim()}` : x;
        loopList.appendChild(listItem);
    }
});
