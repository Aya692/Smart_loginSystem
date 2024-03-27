
var email = document.getElementById('email');
var password = document.getElementById('password');
var incorrect = document.getElementById('incorrect');
var loginBtn = document.getElementById('login-btn')
var required = document.getElementById('required');





function adduser() {
    var email ,password ;
    email = document.getElementById('email').value ;
    password = document.getElementById('password').value ;

    var allUsers = new Array();
    allUsers = JSON.parse(localStorage.getItem('allusersstorsge'))? JSON.parse(localStorage.getItem('allusersstorsge')):[];
    
    
    if(email == '' && password == '')  {
        required.classList.remove('d-none') ;
    }

    else if (email != '' && password != ''  && allUsers.some((v) => {
        return v.email==email && v.password==password
})){
        required.classList.add('d-none') ;
        incorrect.classList.add('d-none')
       
       var currentUser =allUsers.filter((v) =>{
        return v.email==email && v.password==password
       })[0]
       localStorage.setItem('name', currentUser.name)
       window.location.href = "home.html" ;
    }
    else {
        required.classList.add('d-none') ;
        incorrect.classList.remove('d-none')

    }

}

loginBtn.addEventListener('click' , adduser)