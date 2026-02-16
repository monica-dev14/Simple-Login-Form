const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validate()){
       showSuccessMessage(); 
    }
});

function validate(){
    let isValid = true;

    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const cpasswordval = cpassword.value.trim();

    if(usernameval === ''){
        setError(username,'Username is required');
        isValid = false;
    } else{
        setSuccess(username);
    }

    if(emailval === ''){
        setError(email,'Email is required');
        isValid = false;
    }
    else if(!validateemail(emailval)){
        setError(email,'Please enter a valid email');
        isValid = false;
    }
    else{
        setSuccess(email);
    }

    if(passwordval === ''){
        setError(password,'Password is required');
        isValid = false;
    }
    else if(passwordval.length < 8){
        setError(password,'Password must be at least 8 characters');
        isValid = false;
    }
    else{
        setSuccess(password);
    }

    if(cpasswordval === ''){
        setError(cpassword,'Confirm password is required');
        isValid = false;
    }
    else if(cpasswordval !== passwordval){
        setError(cpassword,'Passwords do not match');
        isValid = false;
    }
    else{
        setSuccess(cpassword);
    }

    return isValid;
}

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText = message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorelement = inputgroup.querySelector('.error');

    errorelement.innerText = "";
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}

const validateemail = (email)=>{
    return String(email)
    .toLowerCase()
    .match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/);
};

function showSuccessMessage(){
    const msg = document.getElementById("success-message");
    msg.innerText = "Successfully Logged In ✅";
    msg.style.color = "green";
}
