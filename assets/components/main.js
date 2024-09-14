if (!window.queryString) {
    window.queryString = window.location.search;
    window.urlParams = new URLSearchParams(queryString);
}

const link = document.createElement('link');
link.rel = 'stylesheet'
link.href = '/assets/styles/main.css';
document.head.appendChild(link);

const icn = document.createElement('link');
icn.rel = 'icon';
icn.href = '/favicon.ico';
icn.type = 'image/x-icon'
document.head.appendChild(icn);

const script = document.createElement('script');
script.src = '/assets/components/head.js';
script.type = 'text/javascript';
script.defer = true;
script.onload = function () {
    const navbarTop = document.createElement('navbar-top');
    document.body.prepend(navbarTop);
};
document.head.appendChild(script);