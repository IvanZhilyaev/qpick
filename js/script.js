const menuBtn = document.querySelector(".menu-btn");
const menuForBtn = document.querySelector(".menu-for-btn");

menuBtn.onclick = () => {
    menuForBtn.classList.toggle('active');
}