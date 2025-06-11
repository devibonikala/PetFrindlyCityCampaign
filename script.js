const users = {};

function showModal(type) {
  document.getElementById('loginModal').style.display = type === 'login' ? 'flex' : 'none';
  document.getElementById('signupModal').style.display = type === 'signup' ? 'flex' : 'none';
}

function hideModals() {
  document.getElementById('loginModal').style.display = 'none';
  document.getElementById('signupModal').style.display = 'none';
}

window.onclick = (e) => {
  if (e.target.classList.contains('modal')) hideModals();
};

function signup() {
  const user = document.getElementById('signupUser').value;
  const pass = document.getElementById('signupPass').value;
  if (user && pass) {
    users[user] = pass;
    alert('Signup successful! Now login.');
    hideModals();
  } else {
    alert('Enter username and password');
  }
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  if (users[user] && users[user] === pass) {
    sessionStorage.setItem('user', user);
    updateUI();
    hideModals();
    document.querySelector('.hero h1').style.display = 'none';
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  sessionStorage.removeItem('user');
  updateUI();
  document.querySelector('.hero h1').style.display = 'block';
}

function updateUI() {
  const user = sessionStorage.getItem('user');
  const welcome = document.getElementById('welcome');
  const logoutBtn = document.getElementById('logoutBtn');
  if (user) {
    welcome.textContent = `👋 Welcome, ${user}`;
    logoutBtn.style.display = 'inline-block';
  } else {
    welcome.textContent = '';
    logoutBtn.style.display = 'none';
  }
}

window.onload = updateUI;
