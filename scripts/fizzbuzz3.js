document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form submission
    generateFizzBuzz();
});

function generateFizzBuzz() {
    var output = '';
    var loopList = document.getElementById('loop-list');
    loopList.innerHTML = ''; // Clear previous output

    // Define a mapping of divisors and words
    var rules = {
        3: 'yum!',
        5: 'tasty!',
        7: 'BANG!'
    };

    // Loop from 1 to 140
    for (var i = 1; i <= 140; i++) {
        var result = '';

        // Loop through each rule and check divisibility
        for (var key in rules) {
            if (i % key === 0) {
                result += rules[key]; // Append the corresponding word
            }
        }

        // If no matches, use the number itself
        if (result === '') {
            result = i;
        }

        // Append the result to the output string
        output += result + '<br>';
    }

    // Display the output in the loop-list div
    loopList.innerHTML = output;
}
