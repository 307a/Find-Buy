function validateLogin() {
    let email = document.getElementById('signInEmail').value; 
    let password = document.getElementById('signInPassword').value;
    let ve = "sam@gmail.com"; // Valid email
    let vp = "123456"; // Valid password

    if (email.trim() === "") {
        alert("Please enter your email.");
        return false;
    }
    if (password.trim() === "") {
        alert("Please enter your password.");
        return false;
    }
    if (email !== ve || password !== vp) {
        alert("Invalid email or password. Please try again.");
        return false;
    }

    alert("Login successful! Welcome!"); 
    return true; 
}