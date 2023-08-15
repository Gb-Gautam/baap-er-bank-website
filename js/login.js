// step 1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click', function() {
  // step 2:get the email address inside the email input field
  const emailField = document.getElementById('user-email');
  const email = emailField.value 
  
  const passwordField = document.getElementById('user-password');
  const password = passwordField.value 
  // step 3:verify email and password
  if(email === 'sontan@baap.com' && password === 'secret') {
    window.location.href = 'bank.html';
  }else {
    alert('you are my tajjo sontan');
  }
})