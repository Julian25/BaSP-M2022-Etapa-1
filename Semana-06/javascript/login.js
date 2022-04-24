window.onload = function () {
    /* DOM elements */
    var logInForm = document.getElementById("login-form");
    var logInInputs = document.querySelectorAll("form input");
    var emailLabel = document.getElementById('email-label');
    var email = document.getElementById('email');
    var passwordLabel = document.getElementById('password-label');
    var password = document.getElementById('password');
    var emailMessage = document.getElementById('email-message');
    var passwordMessage = document.getElementById('password-message');
    var logInButton = document.getElementById('btn');
    var logInTitle = document.querySelector('.container-form h2');
    var logInResult = document.createElement('div');
    
    /*Validations*/
    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
        }
    }
    
    function stringContainNumber (input){
        for(var i = 0; i < input.length; i++){
            if(!isNaN(input.charAt(i)) && input.charAt(i) !== " "){
                return true;
            }
        }
        return false;
    }
    
    function validatePassword (input) {
        var letters = ["a","b","c","d","e","f","g","h","i","j","k",
        "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
        "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
        "Q","R","S","T","U","V","W","X","Y","Z"];
        for(var i= 0; i < input.length; i++){
            if(letters.indexOf(input.charAt(i)) !=- 1 && stringContainNumber(input)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    function validateForm(e){
        switch(e.target.name) {
            case 'email':
                if(!(validateEmail(e.target.value))){
                    emailLabel.classList.add('label-error');
                    email.classList.add('input-error');
                    emailMessage.classList.add('message-error');
                }else{
                    emailLabel.classList.remove('label-error');
                    email.classList.remove('input-error');
                    emailMessage.classList.remove('message-error');
                }
            break;
            case 'password':
                passwordLabel.classList.add('label-error');
                password.classList.add('input-error');
                if(validatePassword(e.target.value) == false || e.target.value.length < 8 || e.target.value.length  > 10) {
                    passwordMessage.classList.add('message-error');
                }else {
                    passwordLabel.classList.remove('label-error');
                    password.classList.remove('input-error');
                    passwordMessage.classList.remove('message-error');
                }
            break;
        }
        
    }
    
    function correctError(e) {
        switch(e.target.name) {
            case 'email':
                emailLabel.classList.remove('label-error');
                email.classList.remove('input-error');
                emailMessage.classList.remove('message-error');
            break; 
            case 'password':
                passwordLabel.classList.remove('label-error');
                password.classList.remove('input-error');
                passwordMessage.classList.remove('message-error');
            break;
        }
    }
    
    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });
    
    function logInData() {
        if(validateEmail(email.value) && validatePassword(password.value)) {
            logInResult.className = 'login-push';
            logInResult.innerHTML = 
            '<p> Email entered: '+ email.value + '</p>' +
            '<p> Password entered: '+ password.value + '</p>';
            logInTitle.parentNode.appendChild(logInResult)
        } else if(validateEmail(email.value) === false && validatePassword(password.value)) {
            logInResult.className = 'login-error';
            logInResult.innerHTML = 
            '<p> Please enter a valid Email adress</p>';
            logInTitle.parentNode.appendChild(logInResult)
        } else if (validateEmail(email.value) && validatePassword(password.value) == false) {
            logInResult.className = 'login-error';
            logInResult.innerHTML = 
            '<p> Please enter a valid Password</p>';
            logInTitle.parentNode.appendChild(logInResult)
        }else {
            logInResult.className = 'login-error';
            logInResult.innerHTML = 
            '<p>Please enter a valid Email adress and Password </p>';
            logInTitle.parentNode.appendChild(logInResult)
        }
        
    }
    
    logInButton.addEventListener('click', function(e){
        e.preventDefault();
        logInData(e);
        
    })


}