// Generate navigation bar using 3 arguments
function navBar(nav, linkNames, linkHREFs) {
    for (let i = 0; i < linkNames.length; i++) {
        let link = document.createElement("a");
        link.innerHTML = linkNames[i];
        link.href = linkHREFs[i];
        nav.append(link);
    }
}

function addHeader() {
    // Create header element at the top of the body
    const header = document.createElement("header");
    document.body.prepend(header);

    // Add name and course heading
    const h1 = document.createElement("h1");
    const name = "Ahmad Alhomair";
    const mascot = "Angelic Alligator";
    const course = "WEB115";
    h1.innerHTML = `${name}'s ${mascot} | ${course}`;
    header.append(h1);

    // Add banner with slogan
    const sloganBanner = document.createElement("h3");
    sloganBanner.innerHTML = "<em>Sail the Stars in Style</em>";
    header.append(sloganBanner);

    // Add nav container
    const nav = document.createElement("nav");
    header.append(nav);

    // Add first link as a logo
    const logoLink = document.createElement("a");
    logoLink.href = "index.html";
    logoLink.classList.add("logo");
    const logo = new Image();
    logo.src = "images/v_nav_logo.png";
    logoLink.appendChild(logo);
    nav.appendChild(logoLink);

    // Add navigation links
    fetch('scripts/navLinks.json')
        .then(res => res.json())
        .then(data => {
            const headerLinks = data.headerLinks;
            navBar(nav, headerLinks.names, headerLinks.hrefs);
        })
        .catch(error => console.log(error));

    // Add hr line on non-fizzbuzz pages
    if (!document.getElementById("buzz")) {
        const line = document.createElement("hr");
        header.append(line);
    }
}

function addFooter() {
    // Create footer element at the end of the body
    const footer = document.createElement("footer");
    document.body.append(footer);

    // Add hr line
    const line = document.createElement("hr");
    footer.append(line);

    // Add nav container
    const nav = document.createElement("nav");
    footer.append(nav);

    // Add navigation links
    fetch('scripts/navLinks.json')
        .then(res => res.json())
        .then(data => {
            const footerLinks = data.footerLinks;
            navBar(nav, footerLinks.names, footerLinks.hrefs);
        })
        .catch(error => console.log(error));

    // Add signature
    const sigContent = `Designed by <strong>&copy; Ahmad Alhomair</strong> - <em>2024</em>`;
    const signature = document.createElement("p");
    signature.innerHTML = sigContent;
    footer.append(signature);

    // Add validation block
    const validationBlock = document.createElement("div");
    validationBlock.classList.add("validate");
    footer.append(validationBlock);

    fetch('scripts/navLinks.json')
        .then(res => res.json())
        .then(data => {
            const validationLinks = data.validationLinks;
            for (let i = 0; i < validationLinks.names.length; i++) {
                let link = document.createElement("a");
                link.innerHTML = validationLinks.names[i];
                link.href = validationLinks.hrefs[i];
                link.setAttribute("id", validationLinks.ids[i]);
                validationBlock.append(link);
            }
            // Update validation links based on the current page
            document.getElementById("validation-link-html").setAttribute("href", "https://validator.w3.org/check?uri=" + encodeURIComponent(location.href));
            document.getElementById("validation-link-css").setAttribute("href", "https://jigsaw.w3.org/css-validator/validator?uri=" + encodeURIComponent(location.href));
        })
        .catch(error => console.log(error));
}

window.onload = function() {
    addHeader();
    addSubHead();
    addFooter();
};