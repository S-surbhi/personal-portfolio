// main.js

// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('para').addEventListener('click', function() {
//         this.classList.toggle('slide-right');
//     });
// });


// Select all anchor elements within the navigation bar
const navLinks = document.querySelectorAll('nav a');

// Loop through each anchor element
navLinks.forEach(link => {
    // Add a click event listener to each anchor element
    link.addEventListener('click', function(event) {
        // Prevent the default action of the click event
        event.preventDefault();
        
        // Get the value of the 'href' attribute of the clicked link
        // This will be something like '#about', '#skills', or '#contact'
        const targetId = this.getAttribute('href').substring(1);
        
        // Use the value to find the corresponding section element by its ID
        const targetSection = document.getElementById(targetId);
        
        // Smoothly scroll to the top of the target section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});


