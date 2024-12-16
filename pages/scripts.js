document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.trim().toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const description = item.getAttribute('data-description').toLowerCase();
        if (description.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
