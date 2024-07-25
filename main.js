const clock = document.getElementById("clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.textContent = `${hour}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = document.getElementById('swiper-container');
    let isDown = false;
    let startX;
    let scrollLeft;

    swiperContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        swiperContainer.classList.add('active');
        startX = e.pageX - swiperContainer.offsetLeft;
        scrollLeft = swiperContainer.scrollLeft;
    });

    swiperContainer.addEventListener('mouseleave', () => {
        isDown = false;
        swiperContainer.classList.remove('active');
    });

    swiperContainer.addEventListener('mouseup', () => {
        isDown = false;
        swiperContainer.classList.remove('active');
    });

    swiperContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - swiperContainer.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        swiperContainer.scrollLeft = scrollLeft - walk;
    });
});
