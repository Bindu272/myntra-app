export const ValidateForm = (email, password) => {
    const validateEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const validatePassword = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(password);
    // const validateName = /^[^a-zA-Z]+/.test(Fullname)
   
    // if(!validateName) return 'Please Enter the valid Name'
    if (!validateEmail) return "Please Enter valid Credential";
    if (!validatePassword) return "Please Enter valid Credential";
    return null;
  };
   