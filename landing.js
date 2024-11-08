document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Terima kasih, pesan Anda telah dikirim!');
        form.reset();
    });
});