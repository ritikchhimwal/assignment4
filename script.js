document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');
    const form = document.getElementById('signupForm');
  
    emailInput.addEventListener('input', () => {
      const emailValue = emailInput.value;
      if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
        emailError.textContent = '';
        updateSuccessMessage();
      } else {
        emailError.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        successMessage.textContent = '';
      }
    });
  
    passwordInput.addEventListener('input', () => {
      const passwordValue = passwordInput.value;
      if (passwordValue.length > 8) {
        passwordError.textContent = '';
        updateSuccessMessage();
      } else {
        passwordError.textContent = 'Make sure password is more than 8 characters.';
        successMessage.textContent = '';
      }
    });
  
    function updateSuccessMessage() {
      if (!emailError.textContent && !passwordError.textContent) {
        successMessage.textContent = 'All good to go!';
      } else {
        successMessage.textContent = '';
      }
    }
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!emailError.textContent && !passwordError.textContent && emailInput.value && passwordInput.value) {
        const isConfirmed = window.confirm('Are you sure you want to submit?');
        if (isConfirmed) {
          alert('Successful Signup!');
          emailInput.value = '';
          passwordInput.value = '';
          successMessage.textContent = '';
        } else {
          emailInput.value = '';
          passwordInput.value = '';
        }
      }
    });
  });
  