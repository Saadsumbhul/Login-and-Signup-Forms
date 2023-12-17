// function signup() {
//     var fullName = document.getElementById('fullName').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     var password = document.getElementById('confirmPassword').value;

//     // Check if the password has at least 8 characters
//     if (password.length < 8) {
//         alert('Password must be at least 8 characters long.');
//     } else {
//         // Redirect to the login page
//         window.location.href = '../loginForm/login.html';
//     }
// }


var fullName1 = document.getElementById('fullName1');
var fullName2 = document.getElementById('fullName2');
var email = document.getElementById('email');
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

function signup() {
    // Validate password length

    if (password.value.length < 8) {
        alert("Your password should be at least 8 characters long.");
    }

    // Validate password match
    if (password.value != confirmPassword.value) {
        alert("Your password and confirm password do not match.");
    }

    // Save data to local storage
    const user = {
        firstName: fullName1.value,
        lastName: fullName2.value,
        email: email.value,
        password: password.value,
        cPassword: confirmPassword.value
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
    window.location.href = '../Loader/index.html';

}