const form = document.getElementById('bonusForm'); // Get the form element

// Validation functions
function validateNames(inputField, errorDiv) {
    if (inputField.value.match(/^[a-zA-Z ]+$/)) {
        errorDiv.innerText = ''; // Clear error if valid
        return true;
    } else {
        errorDiv.innerText = 'Only letters allowed.🤬    - solo caratteri! Forti😏';
        return false;
    }
}

function validateZipCode(inputField, errorDiv) {
    if (inputField.value.match(/^\d{5}$/)) {
        errorDiv.innerText = '';
        return true;
    } else {
        errorDiv.innerText = 'ZIP code must be 5 digits - CAP';
        return false;
    }
}

function validateGender(errorDiv) {
    if (document.querySelector('input[name="gender"]:checked')) {
        errorDiv.innerText = '';
        return true;
    } else {
        errorDiv.innerText = 'Gender is required.';
        return false;
    }
}

function validateUniversity(errorDiv) {
    if (document.getElementById('university').value) {
        errorDiv.innerText = '';
        return true;
    } else {
        errorDiv.innerText = 'University is required!';
        return false;
    }
}

function validateStudentWorker() {
    const jobDescription = document.getElementById('jobDescription');
    const jobDescriptionError = document.getElementById('jobDescriptionError');
    const isStudentWorker = document.getElementById('studentWorker').checked;

    if (isStudentWorker && !jobDescription.value.trim()) {
        jobDescriptionError.innerText = 'Job description is required U student worker';
        return false;
    } else {
        jobDescriptionError.innerText = '';
        return true;
    }
}

// Input field event listeners (validate as user types)
document.getElementById('firstName').addEventListener('input', (event) => {
    validateNames(event.target, document.getElementById('firstNameError'));
});

document.getElementById('lastName').addEventListener('input', (event) => {
    validateNames(event.target, document.getElementById('lastNameError'));
});

document.getElementById('zipCode').addEventListener('input', (event) => {
    validateZipCode(event.target, document.getElementById('zipCodeError'));
});

// Form Submit - Prevent default and validate all fields
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    let isFormValid = validateNames(document.getElementById('firstName'), document.getElementById('firstNameError')) &&
                      validateNames(document.getElementById('lastName'), document.getElementById('lastNameError')) &&
                      validateGender(document.getElementById('genderError')) &&
                      validateUniversity(document.getElementById('universityError')) &&
                      validateZipCode(document.getElementById('zipCode'), document.getElementById('zipCodeError')) &&
                      validateStudentWorker();

    if (isFormValid) {
        // If all fields valid, show success message
        const successMessage = document.createElement('div');
        successMessage.style.color = 'green';
        successMessage.innerText = 'Form submitted successfully! - trust me, ur data r safe🙀';
        form.parentNode.insertBefore(successMessage, form.nextSibling);
        form.reset(); // reset the form
    }
});

// Student Worker checkbox - enable/disable description
document.getElementById('studentWorker').addEventListener('change', () => {
    document.getElementById('jobDescription').disabled = !document.getElementById('studentWorker').checked;
});
