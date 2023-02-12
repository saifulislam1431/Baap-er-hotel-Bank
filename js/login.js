document.getElementById('login-btn').addEventListener('click', function() {
    const userEmail = document.getElementById('email');
    const email = userEmail.value;
    const userPassword = document.getElementById('password');
    const password = userPassword.value;
    if (email === 'shontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    } else {
        alert('Invalid Info')
    }
})