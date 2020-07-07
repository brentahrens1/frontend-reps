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
        bar2.style.background = "black";
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