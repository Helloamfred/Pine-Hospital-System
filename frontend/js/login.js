function validateForm(event) {
    const email = document.querySelector('[name="email_us"]').value.trim();
    const password = document.querySelector('[name="pass_us"]').value;
    const errorMessage = document.querySelector('.error-message');
    const termsAccepted = document.getElementById('agreeTerms').checked;
    const termsError = document.querySelector('.terms-error');
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    
  // Updated password pattern: minimum length of 6 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;


    errorMessage.textContent = "";
    termsError.textContent = "";
  
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address e.g user@gmail.com.";
      event.preventDefault();
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      errorMessage.textContent = "Password must be more than 6 characters, including uppercase, lowercase, a number, and a special character.";
      event.preventDefault();
      return false;
    }
  
    if (!termsAccepted) {
      termsError.textContent = "You must agree to the Terms and Conditions.";
      event.preventDefault();
      return false;
    }
  
    return true;
  }
  
  document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = document.getElementById('togglePassword');
  
    // Toggle password visibility
    if (passwordField.type === 'password') {
      passwordField.type = 'text'; // Show password
      icon.innerHTML = '&#128065;'; // Change icon to "open eye"
    } else {
      passwordField.type = 'password'; // Hide password
      icon.innerHTML = '&#128063;'; // Change icon to "closed eye"
    }
  });
  

  // Show password reset modal
  document.querySelector('.link_forgot_pass').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('resetModal').classList.remove('d_none');
  });
  
  // Close modal
  function closeResetModal() {
    document.getElementById('resetModal').classList.add('d_none');
    document.querySelector('#reset_email').value = '';
    document.querySelector('.reset_error').textContent = '';
  }
  
  // Handle reset request (frontend mockup)
  function submitResetRequest() {
    const email = document.getElementById('reset_email').value.trim();
    const resetError = document.querySelector('.reset_error');
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
    if (!emailPattern.test(email)) {
      resetError.textContent = "Please enter a valid email address.";
      return;
    }
  
    resetError.style.color = "green";
    resetError.textContent = "A reset link has been sent to your email.";
  
    setTimeout(() => {
      closeResetModal();
    }, 2500);
  }
  
  window.onload = function () {
    const form = document.querySelector("#loginForm");
    const submitBtn = document.getElementById("submitBtn");
    const agreeTermsCheckbox = document.getElementById("agreeTerms");
  
    form.addEventListener("submit", validateForm);
  
    // Check if terms were accepted previously and enable the button if so
    if (localStorage.getItem("termsAccepted") === "true") {
      agreeTermsCheckbox.checked = true;
      submitBtn.disabled = false;
    }

       // Uncheck the checkbox on page load (this ensures the checkbox is always unchecked on refresh)
       agreeTermsCheckbox.checked = false;

       // Enable or disable submit button based on checkbox state
       agreeTermsCheckbox.addEventListener('change', function () {
           if (this.checked) {
               submitBtn.disabled = false;
           } else {
               submitBtn.disabled = true;
           }
       });
  
    // Enable or disable submit button based on checkbox state
    agreeTermsCheckbox.addEventListener('change', function () {
      if (this.checked) {
        submitBtn.disabled = false;
        localStorage.setItem("termsAccepted", "true");
      } else {
        submitBtn.disabled = true;
        localStorage.setItem("termsAccepted", "false");
      }
    });
  };


  // Show the 2FA modal after successful login (simulated)
function show2FAModal() {
    document.getElementById('twoFAModal').classList.remove('d_none');
  }
  
  // Close 2FA Modal
  function closeTwoFAModal() {
    document.getElementById('twoFAModal').classList.add('d_none');
    document.querySelector('#twofa_code').value = ''; // Clear input
    document.querySelector('.reset_error').textContent = ''; // Clear error message
  }
  
  // Mock function to simulate sending 2FA code to email
  function send2FACodeToEmail(email) {
    // In a real-world scenario, this would send an email via backend services.
    // For now, we mock the behavior by generating a random 6-digit code.
    const code = Math.floor(100000 + Math.random() * 900000);
    console.log(`Sending 2FA code ${code} to ${email}`);
    return code;
  }
  
  // Simulate user login and proceed to 2FA
  function submitLoginForm(event) {
    const email = document.querySelector('[name="email_us"]').value.trim();
    const password = document.querySelector('[name="pass_us"]').value;
    const errorMessage = document.querySelector('.error-message');
    const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;
    
    errorMessage.textContent = "";
  
    // Validate email and password
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      event.preventDefault();
      return false;
    }
  
    if (!passwordPattern.test(password)) {
      errorMessage.textContent = "Password must be more than 6 characters, including uppercase, lowercase, a number, and a special character.";
      event.preventDefault();
      return false;
    }
  
    // Simulate sending 2FA code to the email
    const twoFACode = send2FACodeToEmail(email);
    localStorage.setItem("twoFACode", twoFACode);
  
    // Show the 2FA modal after login validation
    show2FAModal();
    event.preventDefault(); // Prevent form submission
    return false; // Stay on the login page
  }
  
  // Handle 2FA code submission
  function submit2FACode() {
    const enteredCode = document.getElementById('twofa_code').value.trim();
    const resetError = document.querySelector('.reset_error');
    const validCode = localStorage.getItem("twoFACode");
  
    if (enteredCode !== validCode) {
      resetError.textContent = "Incorrect code. Please try again.";
      return;
    }
  
    resetError.style.color = "green";
    resetError.textContent = "2FA Verified. You are logged in.";
  
    setTimeout(() => {
      // Close 2FA modal and clear any previous state
      closeTwoFAModal();
      // Redirect or perform actions after successful login
      window.location.href = '/dashboard.html'; // Replace with the appropriate redirection
    }, 2500);
  }
  
  // Bind the login form submission
  document.querySelector("#loginForm").addEventListener("submit", submitLoginForm);
  
  