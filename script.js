// script.js — lightweight interactivity for the link hub

// Wait until the entire page has loaded before running any code.
// This ensures all the HTML elements exist when we try to find them.
document.addEventListener('DOMContentLoaded', () => {

  // Select every link button on the page
  const buttons = document.querySelectorAll('.link-button');

  buttons.forEach(button => {
    // Add a small "ripple" click effect for visual feedback.
    // This creates a brief scale animation when a button is clicked.
    button.addEventListener('click', (e) => {
      button.style.transform = 'scale(0.97)';
      setTimeout(() => {
        button.style.transform = '';
      }, 150);
    });
  });

  // Log a friendly message so you can verify the script loaded.
  // Open your browser's DevTools (F12) → Console tab to see this.
  console.log('Link Hub loaded successfully!');
});
