document.getElementById('name-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var firstName = document.getElementById('first-name').value.trim();
    var middleInitial = document.getElementById('middle-initial').value.trim();
    var lastName = document.getElementById('last-name').value.trim();
    var greeting = document.getElementById('greeting');

    // Set greeting based on name input
    greeting.textContent = firstName || middleInitial || lastName
        ? `Hello, ${firstName} ${middleInitial ? middleInitial + '.' : ''} ${lastName}! Welcome to Sweet Syria.`
        : "Welcome to Sweet Syria.";

    var divisor1 = parseInt(document.getElementById('divisor1').value, 10);
    var word1 = document.getElementById('word1').value.trim();
    var divisor2 = parseInt(document.getElementById('divisor2').value, 10);
    var word2 = document.getElementById('word2').value.trim();
    var divisor3 = parseInt(document.getElementById('divisor3').value, 10);
    var word3 = document.getElementById('word3').value.trim();
    var total = parseInt(document.getElementById('total').value, 10);

    var outputDiv = document.getElementById('loop-list');
    outputDiv.innerHTML = '';

    for (var i = 1; i <= total; i++) {
        var result = '';

        if (divisor1 && i % divisor1 === 0) result += word1;
        if (divisor2 && i % divisor2 === 0) result += word2;
        if (divisor3 && i % divisor3 === 0) result += word3;

        var item = document.createElement('p');
        item.textContent = `${i}: ${result || ''}`;
        outputDiv.appendChild(item);
    }
});
