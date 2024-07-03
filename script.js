//your code here
function validateForm() {
    let isValid = true;

    const firstNameInput = document.getElementById('first-name-input');
    const lastNameInput = document.getElementById('last-name-input');
    const emailInput = document.getElementById('email-input');
    const collegeInput = document.getElementById('college-input');
    const rollNoInput = document.getElementById('roll-no-input');
    const graduationYearInput = document.getElementById('graduation-year-input');
    const conditionsCheckbox = document.getElementById('conditions-checkbox');

    // First Name validation
    if (!firstNameInput.value.trim()) {
        firstNameInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        firstNameInput.nextElementSibling.style.display = 'none';
    }

    // Last Name validation
    if (!lastNameInput.value.trim()) {
        lastNameInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        lastNameInput.nextElementSibling.style.display = 'none';
    }

    // Email validation
    if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        emailInput.nextElementSibling.style.display = 'none';
    }

    // College Name validation
    if (!collegeInput.value.trim()) {
        collegeInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        collegeInput.nextElementSibling.style.display = 'none';
    }

    // Roll No validation
    if (!rollNoInput.value.trim()) {
        rollNoInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        rollNoInput.nextElementSibling.style.display = 'none';
    }

    // Graduation Year validation
    if (!graduationYearInput.value.trim()) {
        graduationYearInput.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        graduationYearInput.nextElementSibling.style.display = 'none';
    }

    // Conditions Checkbox validation
    if (!conditionsCheckbox.checked) {
        conditionsCheckbox.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        conditionsCheckbox.nextElementSibling.style.display = 'none';
    }

    return isValid;
}