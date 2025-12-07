// Your existing login code
const adminEmail = 'antonkrupinski0@gmail.com';
const adminPassword = '201309!';

// Load accounts
let accounts = JSON.parse(localStorage.getItem('accounts')) || {
  [adminEmail]: adminPassword
};
// Load banned accounts
let bannedAccounts = JSON.parse(localStorage.getItem('banned')) || {};

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  // Check if user is banned
  if (bannedAccounts[email]) {
    window.location.href = 'https://banned.antonkrupinski.com';
    return;
  }

  if (accounts[email] && accounts[email] === password) {
    if (email === adminEmail && password === adminPassword) {
      window.location.href = 'admin-dashboard.html'; // your admin dashboard
    } else {
      window.location.href = 'dashboard.html'; // user dashboard
    }
  } else {
    alert('Invalid credentials');
  }
});
