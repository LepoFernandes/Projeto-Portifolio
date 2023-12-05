const icons = document.querySelectorAll('.home-icons a');

icons.forEach(icon => {
    const tooltip = icon.querySelector('.tooltip');
    const iconName = icon.getAttribute('data-tooltip');

    icon.addEventListener('mouseover', () => {
        tooltip.textContent = iconName;
        tooltip.style.display = 'block';
    });

    icon.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });
});