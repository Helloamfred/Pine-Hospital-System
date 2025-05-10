function sign_up(event)  {
    event.preventDefault(); // ✅ Stop the link from reloading or jumping
    // ...rest of your code
    const inputs = document.querySelectorAll('.input_form_sign');
    const tabs = document.querySelectorAll('.ul_tabs > li');
    const forgotPassLink = document.querySelector('.link_forgot_pass');
    const termsBox = document.querySelector('.terms_and_cons');
    const signButton = document.querySelector('.btn_sign');
    const email = document.querySelector('[name="email_us"]').value.trim();

    // 🔹 Clear previous inputs
    inputs.forEach(input => input.value = "");


    tabs[0].classList.remove("active");
    tabs[1].classList.add("active");
  
     // Show all inputs except the password confirm input (optional)
  inputs.forEach((input, index) => {
    input.classList.remove("d_none");
    input.classList.add("d_block");
  });
  
    setTimeout(() => {
      inputs.forEach(input => input.classList.add("active_inp"));
    }, 100);
  
    forgotPassLink.style.opacity = "0";
    forgotPassLink.style.top = "-5px";
    signButton.innerHTML = "SIGN UP";
  
    setTimeout(() => {
      termsBox.style.opacity = "1";
      termsBox.style.top = "5px";
    }, 500);
  
    setTimeout(() => {
      forgotPassLink.classList.add("d_none");
      termsBox.classList.remove("d_none");
      termsBox.classList.add("d_block");
    }, 450);
  }
  
    //   Sign in
  function sign_in(event) {
    event.preventDefault();

    //  Clear previous inputs
  inputs.forEach(input => input.value = "");

    const inputs = document.querySelectorAll('.input_form_sign');
    const tabs = document.querySelectorAll('.ul_tabs > li');
    const forgotPassLink = document.querySelector('.link_forgot_pass');
    const termsBox = document.querySelector('.terms_and_cons');
    const signButton = document.querySelector('.btn_sign');
    const email = document.querySelector('[name="email_us"]').value.trim();

    // Toggle tabs
    tabs[0].classList.add("active");
    tabs[1].classList.remove("active");
  
    // Hide all inputs initially
    inputs.forEach((input) => {
      input.classList.remove("d_block", "active_inp");
      input.classList.add("d_none");
    });
  
    // Show only EMAIL and PASSWORD inputs
    const emailInput = document.querySelector('[name="email_us"]');
    const passwordInput = document.querySelector('[name="pass_us"]');
    [emailInput, passwordInput].forEach((input) => {
      input.classList.remove("d_none");
      input.classList.add("d_block", "active_inp");
    });
  
    // Hide terms
    termsBox.style.opacity = "0";
    termsBox.style.top = "-5px";
  
    setTimeout(() => {
      termsBox.classList.remove("d_block");
      termsBox.classList.add("d_none");
      forgotPassLink.classList.remove("d_none");
      forgotPassLink.classList.add("d_block");
    }, 500);
  
    setTimeout(() => {
      forgotPassLink.style.opacity = "1";
      forgotPassLink.style.top = "5px";
    }, 800);
  
    signButton.innerHTML = "SIGN IN";
  }
  
  


  function validateForm(event) {
    const email = document.querySelector('[name="email_us"]').value.trim();
    const password = document.querySelector('[name="pass_us"]').value;
    const confirmPasswordInput = document.querySelector('[name="conf_pass_us"]');
    const errorMessage = document.querySelector('.error-message');
    const isSignUp = document.querySelector('.btn_sign').innerHTML === "SIGN UP";
  
    const emailPattern =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{10}$/;

    errorMessage.textContent = ""; // Clear previous messages
  
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address e.g user@gmail.com .";
      event.preventDefault();
      return false;
    }
  
    if (!passwordPattern.test(password)) {
        errorMessage.textContent = "Password must be 10 characters, including uppercase, lowercase, a number, and a special character.";
        event.preventDefault();
        return false;
    }
  
    if (isSignUp && confirmPasswordInput) {
      const confirmPassword = confirmPasswordInput.value;
      if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        event.preventDefault();
        return false;
      }
    }
  
    return true;
  }
  
  window.onload = function () {
    document.querySelector('.cont_centrar').classList.add("cent_active");
    const form = document.querySelector("form");
    form.addEventListener("submit", validateForm);
  };
 
  