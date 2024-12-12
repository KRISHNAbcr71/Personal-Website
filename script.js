var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name =document.getElementById('contact-name').value;
    if(name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (!/^[0-9]*$/.test(phone)) {
        phoneError.innerHTML = 'Phone number must contain only digits';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateForm() {
    if(!validateName() || !validateEmail() || !validatePhone()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}
