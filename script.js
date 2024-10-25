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