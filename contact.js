const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;
  if (name && email && message) {
    alert("Thank you for contacting us!");
  } else {	
    alert("Please fill out all fields.");
  }
});
