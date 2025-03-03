function validatePassword() {
    const password = document.getElementById('password');
    const strength = document.getElementById('strength');
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/;

    if (pattern.test(password.value)) {
        strength.textContent = 'Strong';
        strength.style.color = 'green';
    } else {
        strength.textContent = 'Weak';
        strength.style.color = 'red';
    }
}