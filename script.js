document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let username = document.getElementById('username').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let confirmPassword = document.getElementById('confirmPassword').value.trim();
  let message = document.getElementById('message');
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Clear all message classes
  message.className = '';

  if (username === '' || email === '' || password === '' || confirmPassword === '') {
    message.textContent = 'All fields are required.';
    message.classList.add('error');
  } else if (!email.match(emailPattern)) {
    message.textContent = 'Invalid email format.';
    message.classList.add('error');
  } else if (password.length < 6) {
    message.textContent = 'Password must be at least 6 characters.';
    message.classList.add('error');
  } else if (password !== confirmPassword) {
    message.textContent = 'Passwords do not match.';
    message.classList.add('error');
  } else {
    message.textContent = '';
    alert('Form submitted successfully!');
    document.getElementById('signupForm').reset(); // Clear form
  }
});

// Real-time email validation
document.getElementById('email').addEventListener('input', function() {
  let email = this.value.trim();
  let message = document.getElementById('message');
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    message.textContent = 'Email looks invalid.';
    message.className = 'warning';
  } else {
    message.textContent = '';
    message.className = '';
  }
});
