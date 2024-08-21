document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    const currentURL = encodeURIComponent(window.location.href);

    // Update the HTML validation link
    const htmlValidationLink = document.getElementById("validation-link-html");
    if (htmlValidationLink) {
        htmlValidationLink.href = "https://validator.w3.org/check?uri=" + currentURL;
    }

    // Update the CSS validation link
    const cssValidationLink = document.getElementById("validation-link-css");
    if (cssValidationLink) {
        cssValidationLink.href = "https://jigsaw.w3.org/css-validator/validator?uri=" + currentURL;
    }
});