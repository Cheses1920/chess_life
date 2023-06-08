function submit() {
    var Email_address = document.getElementById("input1").value;
    var Username = document.getElementById("input2").value;
    var password = document.getElementById("input3").value;
  
    var Email_c = "bumbi_oxie";
    var Username_c = "lenny";
    var password_c = "yuli1";
  
    if (
      Email_address === Email_c &&
      Username === Username_c &&
      password === password_c
    ) {
      alert("Account login was successful");
    } else {
      alert("Account login failed Check your email, username and password.");
    }
  }
  