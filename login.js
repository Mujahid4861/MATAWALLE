document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Fetch users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userFound = users.find(
      user => user.email === email && user.password === password
    );
  
    if (userFound) {
      alert("Login Successful 🎉");
      localStorage.setItem("loggedInUser", JSON.stringify(userFound));
      window.location.href = "dashboard.html"; // redirect
    } else {
      alert("Incorrect email or password ❌");
    }
  });
  document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault();
  
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const user = {
      name: fullName,
      email: email,
      password: password
    };
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Account created successfully!");
    window.location.href = "login.html";
  });