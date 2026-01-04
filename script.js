document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    // Mobile Menu Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            const icon = menuToggle.querySelector('i');
            if (sidebar.classList.contains('open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Section Switching Logic
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            
            // Update Active Nav Item
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show Target Section
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === sectionId) {
                    section.classList.add('active');
                    // Reset scroll for new section
                    document.querySelector('.main-content').scrollTop = 0;
                }
            });

            // Close sidebar on mobile after selection
            if (window.innerWidth <= 1024) {
                sidebar.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Handle Scroll for Animations if needed
    const mainContent = document.querySelector('.main-content');
    mainContent.addEventListener('scroll', () => {
        // Optional: Add scroll animations or sticky effects
    });

    // Settings Button Logic (Placeholder)
    const settingsBtn = document.querySelector('.settings-btn');
    settingsBtn.addEventListener('click', () => {
        alert('Settings menu coming soon!');
    });
});
