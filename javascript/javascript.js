document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".reviews-carousel");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const cards = document.querySelectorAll(".review-card");
    const cardWidth = cards[0].offsetWidth + 20; // Card width + gap
    let currentIndex = 0;

    // Function to move the carousel
    function moveCarousel(index) {
        carousel.style.transform = `translateX(-${index * cardWidth * 3}px)`; // Move by 3 cards at a time
    }

    // Automatic carousel
    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % (cards.length / 3); // Loop through the cards
        moveCarousel(currentIndex);
    }, 5000); // Shift every 5 seconds

    // Left arrow click
    leftArrow.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + (cards.length / 3)) % (cards.length / 3); // Move left
        moveCarousel(currentIndex);
        clearInterval(autoSlide); // Stop auto-slide when manually controlled
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % (cards.length / 3);
            moveCarousel(currentIndex);
        }, 5000); // Restart auto-slide
    });

    // Right arrow click
    rightArrow.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % (cards.length / 3); // Move right
        moveCarousel(currentIndex);
        clearInterval(autoSlide); // Stop auto-slide when manually controlled
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % (cards.length / 3);
            moveCarousel(currentIndex);
        }, 5000); // Restart auto-slide
    });
});

