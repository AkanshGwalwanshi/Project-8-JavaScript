// sets error inside tag if id
const setError = (id, error) =>{

    element = document.getElementById(id);
    element.getElementsByClassName("form-error")[0].innerHTML = error;

};

const clearErrors = () =>{
    const errors = document.getElementsByClassName('form-error');
    for (let elem of errors) {
       elem.innerHTML = "";
    }
};

const validateForm = () =>{
    let returnVal = true;
    clearErrors();

    const name = document.forms['myForm']['fname'].value;
    if(name.length < 5){
        setError("name","*Length of name is too short!");
        returnVal = false;
    }

    const email = document.forms['myForm']['femail'].value;
    if(email.length > 20){
        setError("email","*Email is too long!");
        returnVal = false;
    }

    const phone = document.forms['myForm']['fphone'].value;
    if(phone.length!=10){
        setError("phone","*Phone Number should be of 10 digits!");
        returnVal = false;
    }

    const pass = document.forms['myForm']['fpass'].value;
    if(pass.length < 8){
        setError("pass","*Pssword should be minimum 8 characters long!");
        returnVal = false;
    }

    const cpass = document.forms['myForm']['fcpass'].value;
    if(pass!=cpass){
        setError("cpass","*Passwords does not match!");
        returnVal = false;
    }


    return returnVal;
};