document.addEventListener('DOMContentLoaded', function () {
    // Get references to the mobile menu elements
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link'); // All links within the mobile menu

    // Toggle mobile menu visibility when the menu button is clicked
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when the close button is clicked
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    }

    // Close mobile menu when a link inside it is clicked (for smooth scrolling)
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });

    // Handle smooth scrolling for all navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href'); // Get the target section's ID
            const targetElement = document.querySelector(targetId); // Find the target element

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling (for the contact form)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone);
            console.log('Message:', message);

            // Display a success message to the user (instead of alert)
            const submitButton = contactForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Message Sent!';
                submitButton.classList.remove('bg-indigo-900', 'hover:bg-indigo-800');
                submitButton.classList.add('bg-green-500', 'cursor-not-allowed');
                submitButton.disabled = true; // Disable button after submission

                // Optionally, reset the form after a short delay
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.textContent = 'Send Message';
                    submitButton.classList.remove('bg-green-500', 'cursor-not-allowed');
                    submitButton.classList.add('bg-indigo-900', 'hover:bg-indigo-800');
                    submitButton.disabled = false;
                }, 3000); // Reset after 3 seconds
            }
        });
    }
});
