// var email = document.getElementById('email');
var name = document.getElementById('name');
var local =JSON.parse( localStorage.getItem("user"));
var email = document.getElementById('loginEmail');

console.log(local.email);


function login() {
    // var fullName = document.getElementById('fullName');
    var password = document.getElementById('loginPassword');

    // Check if the password has at least 8 characters
    if(local.password !== password.value || local.email !== email.value){
        alert('signUp password/email is not same');
    }
    else if (password.valuelength < 8) {
        alert('Password must be at least 8 characters long.');
    } else {

        const user = {
            email: email.value,
            password: password.value
        };
        localStorage.setItem("logInUser", JSON.stringify(user));
        // Redirect to the login page
        window.location.href = '../home/home.html';
    }
    
    
}
