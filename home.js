let slideIndex = 0;
showSlides();

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function handleSearch() {
        const searchText = document.getElementById('searchInput').value.trim().toLowerCase();
        if (searchText !== '') {
            // Perform your search action here, e.g., filter content, navigate to search results page
            alert(`Searching for: ${searchText}`);
        } else {
            alert('Please enter a search term.');
        }
    }

    // Event listener for the search button click
    document.getElementById('searchButton').addEventListener('click', handleSearch);

    // Optional: Press Enter key in search input to trigger search
    document.getElementById('searchInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });