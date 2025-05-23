// function validateForm(event) {
//     const email = document.querySelector('[name="login_email"]').value.trim();
//     const password = document.querySelector('[name="pass_us"]').value;
//     const errorMessage = document.querySelector('.error-message');
//     const termsAccepted = document.getElementById('agreeTerms').checked;
//     const termsError = document.querySelector('.terms-error');
     
//   // Updated  pattern: 
//   const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;
//   const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;


//     errorMessage.textContent = "";
//     termsError.textContent = "";
  
//     if (!emailPattern.test(email)) {
//       errorMessage.textContent = "Please enter a valid email address e.g user@gmail.com.";
//       event.preventDefault();
//       return false;
//     }
  
//     if (!passwordPattern.test(password)) {
//       errorMessage.textContent = "Password must be more than 6 characters, including uppercase, lowercase, a number, and a special character.";
//       event.preventDefault();
//       return false;
//     }
  
//     if (!termsAccepted) {
//       termsError.textContent = "You must agree to the Terms and Conditions.";
//       event.preventDefault();
//       return false;
//     }
  
//     return true;
//   }
  
//   document.getElementById('togglePassword').addEventListener('click', function () {
//     const passwordField = document.getElementById('password');
//     const icon = document.getElementById('togglePassword');
  
//     // Toggle password visibility
//     if (passwordField.type === 'password') {
//       passwordField.type = 'text'; // Show password
//       icon.innerHTML = '&#128065;'; // Change icon to "open eye"
//     } else {
//       passwordField.type = 'password'; // Hide password
//       icon.innerHTML = '&#128063;'; // Change icon to "closed eye"
//     }
//   });
  

//   // Show password reset modal
//   document.querySelector('.link_forgot_pass').addEventListener('click', function (event) {
//     event.preventDefault();
//     document.getElementById('resetModal').classList.remove('d_none');
//   });
  
//   // Close modal
//   function closeResetModal() {
//     document.getElementById('resetModal').classList.add('d_none');
//     document.querySelector('#reset_email').value = '';
//     document.querySelector('.reset_error').textContent = '';
//   }
  
//   // Handle reset request (frontend mockup)
//   function submitResetRequest() {
//     const email = document.getElementById('reset_email').value.trim();
//     const resetError = document.querySelector('.reset_error');
//     const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  
//     if (!emailPattern.test(email)) {
//       resetError.textContent = "Please enter a valid email address.";
//       return;
//     }
  
//     resetError.style.color = "green";
//     resetError.textContent = "A reset link has been sent to your email.";
  
//     setTimeout(() => {
//       closeResetModal();
//     }, 2500);
//   }
  
//   window.onload = function () {
//     const form = document.querySelector("#loginForm");
//     const submitBtn = document.getElementById("submitBtn");
//     const agreeTermsCheckbox = document.getElementById("agreeTerms");
  
//     form.addEventListener("submit", validateForm);
  
//     // Check if terms were accepted previously and enable the button if so
//     if (localStorage.getItem("termsAccepted") === "true") {
//       agreeTermsCheckbox.checked = true;
//       submitBtn.disabled = false;
//     }

//        // Uncheck the checkbox on page load (this ensures the checkbox is always unchecked on refresh)
//        agreeTermsCheckbox.checked = false;

//        // Enable or disable submit button based on checkbox state
//        agreeTermsCheckbox.addEventListener('change', function () {
//            if (this.checked) {
//                submitBtn.disabled = false;
//            } else {
//                submitBtn.disabled = true;
//            }
//        });
  
//     // Enable or disable submit button based on checkbox state
//     agreeTermsCheckbox.addEventListener('change', function () {
//       if (this.checked) {
//         submitBtn.disabled = false;
//         localStorage.setItem("termsAccepted", "true");
//       } else {
//         submitBtn.disabled = true;
//         localStorage.setItem("termsAccepted", "false");
//       }
//     });
//   };


//   // Show the 2FA modal after successful login (simulated)
// function show2FAModal() {
//     document.getElementById('twoFAModal').classList.remove('d_none');
//   }
  
//   // Close 2FA Modal
//   function closeTwoFAModal() {
//     document.getElementById('twoFAModal').classList.add('d_none');
//     document.querySelector('#twofa_code').value = ''; // Clear input
//     document.querySelector('.reset_error').textContent = ''; // Clear error message
//   }
  
//   // Mock function to simulate sending 2FA code to email
//   function send2FACodeToEmail(email) {
//     // In a real-world scenario, this would send an email via backend services.
//     // For now, we mock the behavior by generating a random 6-digit code.
//     const code = Math.floor(100000 + Math.random() * 900000);
//     console.log(`Sending 2FA code ${code} to ${email}`);
//     return code;
//   }
  
//   // Simulate user login and proceed to 2FA
//   function submitLoginForm(event) {
//     const email = document.querySelector('[name="login_email"]').value.trim();
//     const password = document.querySelector('[name="pass_us"]').value;
//     const errorMessage = document.querySelector('.error-message');
//     const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/;
    
//     errorMessage.textContent = "";
  
//     // Validate email and password
//     if (!emailPattern.test(email)) {
//       errorMessage.textContent = "Please enter a valid email address.";
//       event.preventDefault();
//       return false;
//     }
  
//     if (!passwordPattern.test(password)) {
//       errorMessage.textContent = "Password must be more than 6 characters, including uppercase, lowercase, a number, and a special character.";
//       event.preventDefault();
//       return false;
//     }
  
//     // Simulate sending 2FA code to the email
//     const twoFACode = send2FACodeToEmail(email);
//     localStorage.setItem("twoFACode", twoFACode);
  
//     // Show the 2FA modal after login validation
//     show2FAModal();
//     event.preventDefault(); // Prevent form submission
//     return false; // Stay on the login page
//   }
  
//   // Handle 2FA code submission
//   function submit2FACode() {
//     const enteredCode = document.getElementById('twofa_code').value.trim();
//     const resetError = document.querySelector('.reset_error');
//     const validCode = localStorage.getItem("twoFACode");
  
//     if (enteredCode !== validCode) {
//       resetError.textContent = "Incorrect code. Please try again.";
//       return;
//     }
  
//     resetError.style.color = "green";
//     resetError.textContent = "2FA Verified. You are logged in.";
  
//     setTimeout(() => {
//       // Close 2FA modal and clear any previous state
//       closeTwoFAModal();
//       // Redirect or perform actions after successful login
//       window.location.href = '/dashboard.html'; // Replace with the appropriate redirection
//     }, 2500);
//   }
  
//   // Bind the login form submission
//   document.querySelector("#loginForm").addEventListener("submit", submitLoginForm);
  




document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const submitBtn = document.getElementById("submitBtn");
  const agreeTermsCheckbox = document.getElementById("agreeTerms");
  const errorMessage = document.querySelector(".error-message");
  const termsError = document.querySelector(".terms-error");

  // Patterns
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{6,}$/;

  // Initial state
  agreeTermsCheckbox.checked = false;
  submitBtn.disabled = true;

  // Enable/Disable submit based on checkbox
  agreeTermsCheckbox.addEventListener("change", function () {
    submitBtn.disabled = !this.checked;
    localStorage.setItem("termsAccepted", this.checked.toString());
  });

  // Toggle password visibility
  document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const icon = this;
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
      icon.innerHTML = '&#128065;'; // open eye
    } else {
      passwordField.type = 'password';
      icon.innerHTML = '&#128063;'; // closed eye
    }
  });

  // Handle login form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    errorMessage.textContent = "";
    termsError.textContent = "";

    const email = form.login_email.value.trim();
    const password = form.pass_us.value;

    console.log("Sending credentials:", email, password);

    

    // Validation
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }

    if (!passwordPattern.test(password)) {
      errorMessage.textContent = "Password must include upper, lower, digit & special character.";
      return;
    }

    if (!agreeTermsCheckbox.checked) {
      termsError.textContent = "You must agree to the Terms and Conditions.";
      return;
    }

    // Send request to backend
fetch("http://localhost:5500/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ login_email: email, pass_us: password }),
})
  .then(res => res.json())
  .then(data => {
    if (data.message === "Login successful") {
      simulate2FA(email);
    } else {
      errorMessage.textContent = data.message || "Login failed.";
    }
  })
  .catch(err => {
    console.error("Fetch error:", err);
    errorMessage.textContent = "Server error.";
  });

    
  });

  // Simulated 2FA logic
  function simulate2FA(email) {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    localStorage.setItem("twoFACode", code);
    console.log(`2FA code sent to ${email}: ${code}`);
    document.getElementById('twoFAModal').classList.remove('d_none');
  }

  // Handle 2FA code submission
  window.submit2FACode = function () {
    const enteredCode = document.getElementById('twofa_code').value.trim();
    const resetError = document.querySelector('.reset_error');
    const validCode = localStorage.getItem("twoFACode");

    if (enteredCode !== validCode) {
      resetError.textContent = "Incorrect code. Please try again.";
      return;
    }

    resetError.style.color = "green";
    resetError.textContent = "2FA Verified. Redirecting...";

    setTimeout(() => {
      window.location.href = '/frontend/dashboard.html';
    }, 2000);
  };

  // Forgot password modal handling
  document.querySelector('.link_forgot_pass').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('resetModal').classList.remove('d_none');
  });

  window.closeResetModal = function () {
    document.getElementById('resetModal').classList.add('d_none');
    document.getElementById('reset_email').value = '';
    document.querySelector('.reset_error').textContent = '';
  };

  window.submitResetRequest = function () {
    const email = document.getElementById('reset_email').value.trim();
    const resetError = document.querySelector('.reset_error');

    if (!emailPattern.test(email)) {
      resetError.textContent = "Please enter a valid email.";
      return;
    }

    resetError.style.color = "green";
    resetError.textContent = "A reset link has been sent to your email.";

    setTimeout(() => {
      closeResetModal();
    }, 2500);
  };

  window.closeTwoFAModal = function () {
    document.getElementById('twoFAModal').classList.add('d_none');
    document.getElementById('twofa_code').value = '';
    document.querySelector('.reset_error').textContent = '';
  };
});


   
