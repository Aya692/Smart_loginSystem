
var loginBtn = document.getElementById('login-btn') ;
var required = document.getElementById('required') ;
var incorrect = document.getElementById('incorrect');
var success = document.getElementById('success')
var Name = document.getElementById('name');

var password = document.getElementById('password')
var nameAlert =document.querySelector('.Alert')
var Alert =document.querySelector('.alertt')
var email = document.getElementById('email');
var alertPass = document.querySelector('.alertPass')

function addUser () {
  
//    var email = Email.value;
    var allUsers = new Array();
    allUsers = JSON.parse(localStorage.getItem('allusersstorsge'))? JSON.parse(localStorage.getItem('allusersstorsge')):[];

    if(email.value == '' || password.value == '' || Name.value == '') {
        required.classList.remove('d-none') ;
        incorrect.classList.add('d-none');
        success.classList.add('d-none');
    }  
    
   else  if(email.value != '' && password.value != '' && Name.value != '' && 
   (allUsers.some((v) => {return v.email==email.value}))) {
    required.classList.add('d-none') ;
        incorrect.classList.remove('d-none')
        success.classList.add('d-none')

    }
    
       
    else{
        if(validateUserName() && validateemail() && validatePassword()) {
            allUsers.push({
                "name" :Name.value,
                "email" :email.value,
                "password":password.value
            })
            localStorage.setItem('allusersstorsge' , JSON.stringify(allUsers)) ;
            incorrect.classList.add('d-none')
            success.classList.remove('d-none');
            required.classList.add('d-none');
            
        }
    
    }
   
}
loginBtn.addEventListener('click' , addUser)

function validateUserName() {
    var userNameRegex = /^[A-Z][a-z ]{2,30}$/
    if(userNameRegex.test(Name.value)) {
        Name.classList.add('is-valid');
        Name.classList.remove('is-invalid');
        nameAlert.classList.add('d-none');
        Name.classList.add('form-control');
        return true
    }

    else {
        Name.classList.add('form-control');
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
        nameAlert.classList.remove('d-none');
        return false
    }
}
Name.addEventListener('blur' ,validateUserName)

function validateemail() {
    var userEmailRegex = /^[a-zA-Z]{2,30}[0-9]{2,10}(@)[a-z]{2,10}\.(com)$/;
    
    if(userEmailRegex.test(email.value)) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        email.classList.add('form-control');
       Alert.classList.add('d-none');
        return true
    }
    else {
        email.classList.add('form-control');
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
       Alert.classList.remove('d-none');
        return false
    }


 }
email.addEventListener('blur' , validateemail)

function validatePassword() {
    var userPasswordRegex = /[0-9]{5}$/
    if(userPasswordRegex.test(password.value)) {
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        password.classList.add('form-control');
        alertPass.classList.add('d-none');
        return true
    }
    else {
        password.classList.add('form-control');
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        alertPass.classList.remove('d-none');
        return false
    }

}
password.addEventListener('blur' , validatePassword)