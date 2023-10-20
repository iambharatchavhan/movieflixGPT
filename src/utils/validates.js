export const checkValidate = (email, password, username) => {
    // this function for checking validation for email and password
    // if the email and password do not match any rules, it should give us an error
    // email regex
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    // password regex
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    // check for username only if it exists
    if (username) {
      const isUserNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(username);
      if (!isUserNameValid) return "Please enter a valid user name";
    }
  
    if (!isEmailValid) return "Email is not valid";
    // error message if email is not valid
    if (!isPasswordValid) return "Password is not valid";
    // error message if password is not valid
  
    // if everything is fine then return nothing
    return null;
  };
  