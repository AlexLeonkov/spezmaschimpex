const navLinks = document.querySelectorAll('.nav-link');
const navbarToggler = document.querySelector('.navbar-toggler');

const cookiesBanner = document.getElementById('cookies-banner');
const acceptCookiesButton = document.getElementById('accept-cookies');
const declineCookiesButton = document.getElementById('decline-cookies');

navLinks.forEach(link => link.addEventListener('click', () => {
    if (window.innerWidth <= 991) {
        navbarToggler.click();
    }
}))

if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
}

// Check if the cookie consent has been accepted
if (!localStorage.getItem('cookiesBanner')) {
    cookiesBanner.classList.remove('hidden');
}

// Accept cookies
acceptCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookiesBanner', 'true');
    cookiesBanner.classList.add('hidden');
    // Implement additional logic for accepting cookies, if necessary
});

// Decline cookies
declineCookiesButton.addEventListener('click', () => {
    localStorage.setItem('cookiesBanner', 'false');
    cookiesBanner.classList.add('hidden');
    // Implement logic for declining non-essential cookies, if necessary
});

// Animation
const animatedElements = document.querySelectorAll('.animation');

document.addEventListener("scroll", (event) => {
    if (animatedElements.length) {
        animatedElements.forEach((ae) => {
            const {top} = ae.getBoundingClientRect();
            if (top + 80 - window.innerHeight < 0) {
                ae.classList.add('animation-active');
            } else {
                ae.classList.remove('animation-active');
            }
        })
    }
});
