class SiteNavbarTop extends HTMLElement {
  constructor() {
    super();
  };
  connectedCallback() {
    function isactive(t, page) {
      let active = page == location.pathname.split("/")[location.pathname.split("/").length-1] ? "active" : "inactive"
      //console.log(active, t, t.getAttribute("root")+page)
      return active
    }
    this.innerHTML = `
        <div class="site-banner">i might redesign this site soon</div>
        <script>
        function myFunction() {
          document.getElementById("myDropdown").classList.toggle("show");
        }
        window.onclick = function(event) {
          if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
              var openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        }
        </script>
        <header>
          <div class="topnav">
            <a class="${isactive(this, "index.html")}" href="${this.getAttribute("root")}index.html">Home</a>
            <a class="${isactive(this, "mingchat.html")}" href="${this.getAttribute("root")}mingchat.html">MingChat</a>
            <div class="dropdown">
              <button class="dropbtn">Documentation
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a href="${this.getAttribute("root")}w93/2.x/docs" class="${isactive(this, "w93/2.x/docs")}">Windows 93</a>
                <a href="${this.getAttribute("root")}w93/trollbox/2.1/docs" class="${isactive(this, "w93/trollbox/2.1/docs")}">Trollbox</a>
              </div>
            </div>
            <!--<a href="${this.getAttribute("root")}socialhub/index.html" class="${isactive(this, "socialhub/index.html")}">Social Hub</a>-->
            <!--<a href="SaveDecrypt.html">FS Save File</a>-->
            <!--<a href="#about">About</a>-->
          </div>
        </header>
        `;
  }
}
/**
 * 
 * @param {string} downloaddata 
 */

function download(downloaddata) {
  const dataArr = downloaddata.split(";", 2)
  const downloadType = dataArr[0]
  const downloadLink = dataArr[1]
  if (downloadType == "external") {
    window.location.href = downloadLink
  }
}
class SiteDownload extends HTMLElement {
  constructor() {
    super()
  }
  connectedCallback() {
    let reltype = this.getAttribute("latest") == "" ? "latest" : this.getAttribute("release") == "" ? "release" : this.getAttribute("beta") == "" ? "beta" : "alpha"
    console.log(reltype)
    this.innerHTML = `
    <div class="download-frame">
            <span style="color:${reltype == "latest" ? "lime" : reltype == "yellow" ? "blue" : reltype == "beta" ? "blue" : "red"}">${reltype.toUpperCase()}</span>
            <strong class="download-frame-name">${this.getAttribute("name")}</strong>
            <p class="download-frame-desc">${this.getAttribute("desc")}</p>
            <button class="downloadbtn" type="button" value="${this.getAttribute("ref")}" title="Download"  onclick="download(this.value)" >Download</button>
      </div>
    `
  }
}
customElements.define('download-frame', SiteDownload);
customElements.define('navbar-top', SiteNavbarTop);
