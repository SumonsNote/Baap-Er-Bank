document.getElementById('user-button').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if (userEmail == 'sontan@bap.com' && userPassword == 'hello') {
        window.location.href = "bank.html";
    }
})