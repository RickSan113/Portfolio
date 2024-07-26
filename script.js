document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
    
        document.getElementById('form-message').innerHTML = '<p>Obrigado, sua mensagem foi enviada!</p>';
        
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-message').innerHTML = '<p>Por favor, preencha todos os campos.</p>';
    }
});
