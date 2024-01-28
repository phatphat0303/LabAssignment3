function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default

    // Validation logic for each field
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        homeStatus: document.getElementById('homeStatus').value,
        kids: parseInt(document.getElementById('kids').value, 10) || 0,
        pets: parseInt(document.getElementById('pets').value, 10) || 0,
        hasFence: document.getElementById('fence').checked,
    };

    // Custom error messages
    const errors = validateFields(formData);

    // Display errors or submit the form
    if (errors.length > 0) {
        showErrors(errors);
    } else {
        alert('Application submitted successfully!');
    }
}

function validateFields(data) {
    const errors = [];

    // Validation for 'First Name'
    if (data.firstName === '') {
        errors.push('Please enter your first name.');
    } else if (!isValidName(data.firstName)) {
        errors.push('Invalid characters in the first name.');
    }

    // Validation for 'Email'
    if (data.email === '' || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address.');
    }

    // Validation for 'Phone Number'
    if (data.phone === '' || !isValidPhoneNumber(data.phone)) {
        errors.push('Please enter a valid phone number.');
    }

    // Validation for 'Home Status'
    if (data.homeStatus === '') {
        errors.push('Please select your home status.');
    }

    // Additional validations...

    return errors;
}
