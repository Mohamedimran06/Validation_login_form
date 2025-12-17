  const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    function validateForm() {
      let valid = true;

      // Name validation
      if (nameInput.value.trim() === "") {
        nameError.textContent = "Name cannot be empty.";
        valid = false;
      } else {
        nameError.textContent = "";
      }

      // Email validation (basic regex)
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
      } else {
        emailError.textContent = "";
      }

      // Password validation
      if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        valid = false;
      } else {
        passwordError.textContent = "";
      }

      // Enable/disable submit button
      submitBtn.disabled = !valid;
    }

    // Real-time validation
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);

    // Prevent form submission if invalid
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
      e.preventDefault();
      validateForm();
      if (!submitBtn.disabled) {
        alert("Form submitted successfully!");
      }
    });