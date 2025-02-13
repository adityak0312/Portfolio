// JavaScript for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);

    // Here you can implement an actual form submission using fetch() or XMLHttpRequest
    // Example using fetch:
    // fetch('/submit', { method: 'POST', body: new FormData(e.target) });
});
fetch('https://script.google.com/macros/s/AKfycbzp3-311rePNlDz5WIrHL9MqKemVIVEyfN7cd11AcCKAUkEsyB9T6pQhwhFjd__qPcm/exec', {
    method: 'POST',
    body: new URLSearchParams(formObject),
  })
  