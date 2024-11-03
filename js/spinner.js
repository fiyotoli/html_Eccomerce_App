const spinnerWrapperEl = document.querySelector('.spinner-wrapper'); // Fixed the assignment operator
window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0'; // Set opacity to 0
    setTimeout(() => { // Fixed the arrow function syntax
        spinnerWrapperEl.style.display = 'none'; // Set display to none after 200ms
    }, 200);
});




// Show or hide the back-to-top button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.getElementById('back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = 'flex'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
};

// Scroll to the top when the button is clicked
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
};
Summary
