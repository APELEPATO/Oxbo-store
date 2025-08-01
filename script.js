document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');

    // Set a timeout to redirect after 5 seconds
    setTimeout(() => {
        // Add a fade-out effect to the loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';

        // After fade-out, redirect to home.html
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 500); // Wait for the fade-out transition to complete
    }, 5000); // 5000 milliseconds = 5 seconds
});
