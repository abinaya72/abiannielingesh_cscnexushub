setTimeout(function () {
    // Hide the welcome screen with a fade-out animation
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.transition = "opacity 1s ease-out";
    welcomeScreen.style.opacity = 0;
    // Wait for the fade-out animation to complete (1 second)
    setTimeout(function () {
        // Remove the welcome screen completely from the DOM
        welcomeScreen.parentNode.removeChild(welcomeScreen);
        // Show the main content and animate its fade-in
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('d-none');
        mainContent.style.opacity = 1; // Make the main content visible
    }, 1000); // Wait for fade-out animation to complete
}, 5000); // Wait 5 seconds before hiding the welcome screen