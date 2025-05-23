// Dynamically load header
const header = document.createElement('div');
header.innerHTML = `
    <div class="logo">
        <img src="../public/images/unify-consultancy-logo.png" alt="Unify Consultancy Logo">
    </div>
    <nav>
        <ul>
            <li><a href="index.html" data-translate="nav.home"></a></li>
            <li><a href="about.html" data-translate="nav.about"></a></li>
            <li><a href="services.html" data-translate="nav.services"></a></li>
            <li><a href="why-choose-us.html" data-translate="nav.why"></a></li>
            <li><a href="resources.html" data-translate="nav.resources"></a></li>
            <li><a href="contact.html" data-translate="nav.contact"></a></li>
            <li><a href="client-portal.html" data-translate="nav.portal"></a></li>
        </ul>
    </nav>
`;
document.getElementById('header').appendChild(header);

// Dynamically load footer
const footer = document.createElement('footer');
footer.innerHTML = `
    <p data-translate="footer.copyright"></p>
    <div class="footer-links">
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
        <a href="contact.html" data-translate="footer.contact"></a>
    </div>
`;
document.getElementById('footer').appendChild(footer);

// Update translations for header and footer
updateLanguage(savedLang);