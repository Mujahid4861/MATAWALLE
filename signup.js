document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const matric = document.getElementById("matric").value;
  
    // Save to localStorage
    localStorage.setItem("fullname", fullname);
    localStorage.setItem("email", email);
    localStorage.setItem("matric", matric);
  
    // Redirect to profile
    window.location.href = "profile.html";
  });
  