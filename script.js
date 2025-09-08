// Greet user
document.getElementById('greetBtn').onclick = function() {
  const name = document.getElementById('nameInput').value;
  if (name) {
    document.getElementById('greeting').innerText = 'Hello, ' + name + '!';
  } else {
    alert('Please enter your name.');
  }
};

// Change background color
document.getElementById('colorBtn').onclick = function() {
  document.body.style.backgroundColor = 'lightyellow';
};

// Print numbers 1 to 5
const list = document.getElementById('numberList');
for (let i = 1; i <= 5; i++) {
  const li = document.createElement('li');
  li.innerText = i;
  list.appendChild(li);
}

// Show/hide secret message
document.getElementById('toggleMsgBtn').onclick = function() {
  const msg = document.getElementById('secretMsg');
  if (msg.style.display === 'none') {
    msg.style.display = 'block';
  } else {
    msg.style.display = 'none';
  }
};
