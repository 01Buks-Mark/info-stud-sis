 const container = document.querySelector('.cards');

    function scrollLeft() {
        container.scrollBy({ left: -300, behavior: 'smooth' });
    }

    function scrollRight() {
        container.scrollBy({ left: 300, behavior: 'smooth' });
    }