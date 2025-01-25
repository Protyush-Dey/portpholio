let currentIndex = 0;

function slideProjects(direction) {
    const slider = document.querySelector('.slider');
    const projectWidth = document.querySelector('.project').offsetWidth;
    const projectsVisible = Math.floor(slider.parentElement.offsetWidth / projectWidth);
    const totalProjects = slider.children.length;

    currentIndex += direction;

    // Loop around if the index goes out of bounds
    if (currentIndex < 0) {
        currentIndex = totalProjects - projectsVisible;
    } else if (currentIndex > totalProjects - projectsVisible) {
        currentIndex = 0;
    }

    const offset = -currentIndex * projectWidth;
    slider.style.transform = `translateX(${offset}px)`;
}
function toggleMenu() {
    const menu = document.querySelector('#nav-bar1 ul');
    menu.classList.toggle('show-menu');
}
