// Create and insert the <link> element
const link = document.createElement('link');
link.rel = 'stylesheet'
link.href = '/assets/styles/main.css';
document.head.appendChild(link);

// Create and insert the <script> element
const script = document.createElement('script');
script.src = '/assets/components/head.js';
script.type = 'text/javascript';
script.defer = true;
script.onload = function () {
    // Create and insert the <navbar-top> element after the script has loaded
    const navbarTop = document.createElement('navbar-top');
    document.body.prepend(navbarTop);
};
document.head.appendChild(script);