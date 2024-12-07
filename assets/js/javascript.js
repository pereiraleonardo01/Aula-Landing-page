document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector('#gallery .grid');
    for (let i = 0; i < gallery.children.length; i++) {
        const img = gallery.children[i].querySelector('img');
        img.src = `https://unsplash.com/photos/random`;
    }
});
