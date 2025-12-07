document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let role = document.getElementById("role").value;

    const adminUser = "admin";
    const adminPass = "admin123";

    // Registered users (from signup)
    let storedUser = localStorage.getItem("username");
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
        if (username === storedUser && password === storedPass) {
            alert("User Login Successful!");
            window.location.href = "index.html";
        } else {
            alert("Invalid Username or Password!");
        }
    }
});
