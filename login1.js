function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "Boss" && password === "M202030") {
      alert("Login successful!");
      return true;
    } else {
      alert("Incorrect username or password.");
      return false;
    }
  }
  