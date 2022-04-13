// Mobile Navigation

const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function(e) {
    header.classList.toggle("nav-open")
})

//Smooth Scrolling

const allLink = document.querySelectorAll("a:Link")

allLink.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const href = link.getAttribute("href");

        console.log(href)
            // Scroll back to top
        if (href === "#")
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })

        if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href)
            section.scrollIntoView({
                behavior: "smooth"
            })
        }

    })
})

// allLink.style.scrollBehavior = "smooth"


// Sticky Navigation


const heroSection = document.querySelector('.section-hero');

const observer = new IntersectionObserver(entries => {

    const ent = entries[0]
    if (!ent.isIntersecting) {
        document.body.classList.add('sticky').style.transition = "all 2s";
    }
    if (ent.isIntersecting) {
        document.body.classList.remove('sticky')
    }
}, {
    root: null,
    threshold: 0,
    rootMargin: '-80px'
})


observer.observe(heroSection)