document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingCounter = document.getElementById('loading-counter');
    const mainContent = document.getElementById('main-content');
    let count = 0;

    const interval = setInterval(() => {
        if (count <= 100) {
            loadingCounter.textContent = count;
            count++;
        } else {
            clearInterval(interval);
            // Hide loading screen and show main content after 4 seconds total
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                    mainContent.style.opacity = '0'; // Start with opacity 0 for fade-in
                    setTimeout(() => {
                        mainContent.style.opacity = '1';
                        mainContent.style.transition = 'opacity 1s ease-in';
                    }, 50); // Small delay to ensure display:block applies before transition
                }, 500); // Wait for fade-out to complete
            }, 50); // Adjust this delay if needed, 4 seconds is approximate for 1-100 count + fade
        }
    }, 40); // 40ms * 101 counts = ~4 seconds for 0-100
});