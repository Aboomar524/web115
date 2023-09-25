// JavaScript function to get the current page's URL
function getCurrentPageURL() {
    return window.location.href;
}

// JavaScript function to set the validation links dynamically
function setValidationLinks() {
    const currentPageURL = getCurrentPageURL();
    const htmlValidationLink = document.getElementById('validation_link_html');
    const cssValidationLink = document.getElementById('validation_link_css');

    if (htmlValidationLink) {
        htmlValidationLink.href = `https://validator.w3.org/nu/?doc=${encodeURIComponent(currentPageURL)}`;
    }

    if (cssValidationLink) {
        cssValidationLink.href = `https://validator.w3.org/nu/#textarea`;
    }
}

// Call the function to set validation links when the page loads
window.addEventListener('load', setValidationLinks);
