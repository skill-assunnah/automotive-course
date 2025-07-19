function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

function toggleExpandableText() {
    const expandableContent = document.getElementById('expandable-content');
    expandableContent.classList.toggle('active');
    const button = document.querySelector('.read-more-btn');
    button.textContent = expandableContent.classList.contains('active') ? 'Read Less' : 'Read More';
}
