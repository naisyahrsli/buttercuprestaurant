document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    const adminUser = " buttercupres@gmail.com";
    const adminPass = "admin123";

    // Registered users (from signup)
    let storedUser = localStorage.getItem("email");
    let storedPass = localStorage.getItem("password");

    if (role === "admin") {
        if (username === adminUser && password === adminPass) {
            alert("Admin Login Successful!");
            window.location.href = "index.html";  // redirect to homepage after login
        } else {
            alert("Invalid Admin credentials!");
        }
        return;
    }

    if (role === "user") {
        if (email === storedUser && password === storedPass) {
            alert("User Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid Username or Password!");
        }
    }
});
