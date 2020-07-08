const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const bar1 = document.querySelector(".one");
const bar2 = document.querySelector(".two");
const bar3 = document.querySelector(".three");
let mainContainerPast = document.querySelector(".main-container-past");
let mainContainerUpcoming = document.querySelector(".main-container-upcoming");
let upcoming = document.querySelector(".upcoming");
let past = document.querySelector(".past");
let open = false;
let mainToggle = document.querySelector(".main-inner");
let mainNav = document.querySelector("nav");
let navLink = document.querySelectorAll(".nav-list__link");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".scroll")

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-120px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mainNav.classList.add("nav");
            mainNav.classList.remove("nav2");
            navLink.forEach(link => {
                link.classList.add("link-white");
                link.classList.remove("link-black");
            })
        } else {
            mainNav.classList.remove("nav");
            mainNav.classList.add("nav2");
            navLink.forEach(link => {
                link.classList.remove("link-white");
                link.classList.add("link-black");
            })
        }
    })
},options);

observer.observe(mainToggle);

const scrollOptions = {
    rootMargin: "0px 0px -50px 0px"
}

const appearonScroll = new IntersectionObserver((entries, appearonScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("appear");
            appearonScroll.unobserve(entry.target);
        }
    })
}, scrollOptions)

faders.forEach(fader => {
    appearonScroll.observe(fader)
})

sliders.forEach(slider => {
    appearonScroll.observe(slider);
})

function doOpen() {
    open = !open;
    if (open) {
        overlay.style.opacity = 1;
        overlay.style.width = `${100}%`;
        bar2.style.background = "transparent";
        bar1.style.transform = 'rotate(45deg)';
        bar3.style.transform = 'rotate(-45deg)';
        bar1.style.top = `${14}px`;
        bar3.style.top = `${14}px`;
    } else {
        overlay.style.opacity = 0;
        overlay.style.width = 0;
        bar2.style.background = "white";
        bar1.style.transform = 'rotate(0)';
        bar3.style.transform = 'rotate(0)';
        bar1.style.top = `${8}px`;
        bar3.style.top = `${20}px`;
    } 
}

hamburger.addEventListener("click", doOpen);

function doPastToggle() {
    mainContainerUpcoming.style.display = "none";
    mainContainerPast.style.display = "block";
}

function doUpcomingToggle() {
    mainContainerUpcoming.style.display = "block";
    mainContainerPast.style.display = "none";
}

past.addEventListener("click", doPastToggle)
upcoming.addEventListener("click", doUpcomingToggle)