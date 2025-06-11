const footerMenu = [
    {
        name: "Contact Us",
        link: "/contact.html",
        id: "contact-us-page"
    },
    {
        name: "About Us",
        link: "/about-us.html",
        id: "about-us-page"
    },
    {
        name: "Return Policy",
        link: "/return.html",
        id: "return-page"
    },
    {
        name: "Privacy policy",
        link: "/privacy.html",
        id: "privacy-page"
    },
    {
        name: "Temrs & Condition",
        link: "/temrs.html",
        id: "terms-page"
    }
]


document.getElementById("footer-section").innerHTML = `
    <div class="container">
        <div class="footer_logo">
        <a id="footer-logo-link" href=""><img src="images/logo.svg"></a>
        </div>
        <div class="footer_menu">
            <ul id="footer-menu-listing"></ul>
        </div>
        <div class="location_main">Help Line  Number : <a href="tel:+1 1800 1200 1200">+1 1800 1200 1200</a></div>
        <div class="copyright_section">
            <div class="container">
                <p class="copyright_text" id="copyright-content"></p>
            </div>
        </div>
    </div>
`;

footerMenu.forEach(footerMenuItemList => {
    document.getElementById("footer-menu-listing").innerHTML += `
        <li><a id="${footerMenuItemList.id}" href="${footerMenuItemList.link}">${footerMenuItemList.name}</a></li>
    `;
});

document.getElementById("footer-logo-link").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html";
});

document.getElementById("copyright-content").innerHTML = `
    &copy; ${new Date().getFullYear()} All Rights Reserved.
`;