class ProjectInput {
    constructor() {
        this.date = document.getElementById("date");
        this.navToggle = document.querySelector(".nav-toggle");
        this.linksContainer = document.querySelector(".links-container");
        this.links = document.querySelector(".links");
        this.navbar = document.getElementById("nav");
        this.topLink = document.querySelector(".top-link");
        this.scrollLinks = document.querySelectorAll(".scroll-link");
    }
}
const prj = new ProjectInput();
// set date
prj.date.innerHTML = new Date().getFullYear().toString();
// close links
prj.navToggle.addEventListener("click", function () {
    // prj.linksContainer.classList.toggle("show-links");
    const linksHeight = prj.links.getBoundingClientRect().height;
    // Element.getBoundingClientRect() method returns the size of an element
    // and its position relative to the viewport.
    const containerHeight = prj.linksContainer.getBoundingClientRect().height;
    if (containerHeight === 0) {
        prj.linksContainer.style.height = `${linksHeight}px`;
    }
    else {
        prj.linksContainer.style.height = '0';
    }
    // console.log(prj.linksContainer.getBoundingClientRect());
});
// fixed navbar
window.addEventListener("scroll", function () {
    // pageYOffset is a read - only window property that returns the number of pixels
    // the document has been scrolled vertically.
    const scrollHeight = window.pageYOffset;
    const navHeight = prj.navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        prj.navbar.classList.add("fixed-nav");
    }
    else {
        prj.navbar.classList.remove("fixed-nav");
    }
    // setup back to top link
    if (scrollHeight > 500) {
        console.log("hello");
        prj.topLink.classList.add("show-link");
    }
    else {
        prj.topLink.classList.remove("show-link");
    }
});
//smooth scroll
prj.scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        // slice extracts a section of a string without modifying original string
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navHeight = prj.navbar.getBoundingClientRect().height;
        const containerHeight = prj.linksContainer.getBoundingClientRect().height;
        const fixedNav = prj.navbar.classList.contains("fixed-nav");
        //offsetTop - A Number, representing the top position of the element, in pixels
        let position = element.offsetTop - navHeight;
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        });
        // close
        prj.linksContainer.style.height = '0';
    });
});
