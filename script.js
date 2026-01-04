document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

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
