const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

const cookieConsentBanner = document.getElementById('cookieConsentBanner');
const acceptCookiesButton = document.getElementById('acceptCookies');
const declineCookiesButton = document.getElementById('declineCookies');

navLinks.forEach(link => link.addEventListener('click', () => {
    if (window.innerWidth <= 991) {
        navbarToggler.click();
    }
}))

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
}

// Check if the cookie consent has been accepted
if (!localStorage.getItem('cookieConsent')) {
    cookieConsentBanner.style.display = 'block';
}

// Accept cookies
acceptCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'true');
    cookieConsentBanner.style.display = 'none';
    // Implement additional logic for accepting cookies, if necessary
});

// Decline cookies
declineCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'false');
    cookieConsentBanner.style.display = 'none';
    // Implement logic for declining non-essential cookies, if necessary
});