const checkValidData = (email , password) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPwdValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    {if(!isEmailValid)  return "Email ID is not valid"};
    {if(!isPwdValid)  return "Password is not valid"};
     return null;
}
export default checkValidData;