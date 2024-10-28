// Add event listeners for navigation links
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Add animation for project cards
document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.classList.add('animate');
    });

    card.addEventListener('mouseout', () => {
        card.classList.remove('animate');
    });
});

function filterTools(category) {
    const tools = document.querySelectorAll('#tools-list li');
    tools.forEach(tool => {
        if (category === 'all') {
            tool.style.display = 'inline-block';
        } else {
            tool.classList.contains(category) ? tool.style.display = 'inline-block' : tool.style.display = 'none';
        }
    });
}
document.querySelectorAll('header a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        // Scroll to the target element, adjusting for header height
        const headerOffset = document.querySelector('header').offsetHeight;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth" // Optional: for smooth scrolling
        });
    });
});
