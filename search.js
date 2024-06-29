const searchInput = document.querySelector('#search');
const searchResults = document.querySelector('#search-results');
const pages = [
  { title: 'Home', url: '/' },
  { title: 'About Us', url: '/about' },
  { title: 'Contact Us', url: '/contact' },
  { title: 'Privacy Policy', url: '/privacy-policy' },
  { title: 'Terms and Conditions', url: '/terms-and-conditions' },
];
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const results = [];

  pages.forEach(page => {
    if (page.title.toLowerCase().includes(searchTerm) || page.url.includes(searchTerm)) {
      results.push(page);
    }
  });
searchResults.innerHTML = '';

  results.forEach(page => {
    const resultHTML = `
      <div>
        <h2>${page.title}</h2>
        <p><a href="${page.url}">${page.url}</a></p>
      </div>
    `;
    searchResults.innerHTML += resultHTML;
  });
});
