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
document.head.insertAdjacentHTML("afterbegin",`<meta property="og:title" content="ming736's site" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ming736.github.io${location.pathname}" />
        <meta property="og:description" content="welcome to my site!" />
        <meta property="og:site_name" content="ming736's site" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ming736's site" />
        <meta name="twitter:description" content="welcome to my site!" />
        <meta name="twitter:site" content="@ming736_" />`)
document.head.appendChild(script);