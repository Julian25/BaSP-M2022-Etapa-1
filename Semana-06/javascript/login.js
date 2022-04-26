window.onload = function () {
    /* DOM elements */
    var logInForm = document.getElementById("login-form");
    var logInInputs = document.querySelectorAll("form input");
    var emailLabel = document.getElementById('email-label');
    var email = document.getElementById('email');
    var passwordLabel = document.getElementById('password-label');
    var password = document.getElementById('password');
    var emailMesagge = document.getElementById('email-mesagge');
    var passwordMesagge = document.getElementById('password-mesagge');
    var logInButton = document.getElementById('btn');
    var logInTitle = document.querySelector('.container-form h2');
    var logInResult = document.createElement('div');
    
    /*Validations*/

    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                    "Q","R","S","T","U","V","W","X","Y","Z"];

    var numbers = ["0","1","2","3","4","5","6","7","8","9"];

    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];
    
    //Function to validate Email
    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
        }
    }
    
    //Function to validate password
    function validatePassword (input) {
        var inputValue = input;
        var numberOfLetters = 0;
        var numericChar = 0;
        var numberOfSymbols = 0;
        for(var i= 0; i < inputValue.length; i++) {
            var inputName = inputValue[i]
            if (letters.indexOf(inputName) != -1) {
                numberOfLetters++;
            }else if (numbers.indexOf(inputName) != -1){
                numericChar++;
            }else if (symbols.indexOf(inputName) != -1) {
                numberOfSymbols++;
            }
        }
        
        if(numberOfLetters > 4 && numericChar > 2 && numberOfSymbols === 0) {
            return true
        } else {
            return false
        }
        
    }
    
    // Fuction to validate each input on blur event
    function validateForm(e){
        switch(e.target.name) {
            case 'email':
                if(!(validateEmail(e.target.value))){
                    emailLabel.classList.add('label-error');
                    email.classList.add('input-error');
                    emailMesagge.classList.add('mesagge-error');
                }else{
                    emailLabel.classList.remove('label-error');
                    email.classList.remove('input-error');
                    emailMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'password':
                if(validatePassword(e.target.value) == false || e.target.value.length < 8 || e.target.value.length  > 10) {
                passwordLabel.classList.add('label-error');
                password.classList.add('input-error');
                passwordMesagge.classList.add('mesagge-error');
                }else {
                    passwordLabel.classList.remove('label-error');
                    password.classList.remove('input-error');
                    passwordMesagge.classList.remove('mesagge-error');
                }
            break;
        }
    }
    
    //Function for correcting state of wrong field in focus event
    function correctError(e) {
        switch(e.target.name) {
            case 'email':
                emailLabel.classList.remove('label-error');
                email.classList.remove('input-error');
                emailMesagge.classList.remove('mesagge-error');
            break; 
            case 'password':
                passwordLabel.classList.remove('label-error');
                password.classList.remove('input-error');
                passwordMesagge.classList.remove('mesagge-error');
            break;
        }
    }
    
    //Adding events blur and focus to every input in the form
    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });
    
    //Function to get data from inputs when click on create button
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
            logInTitle.parentNode.appendChild(logInResult);
        }
        
    }
    
    logInButton.addEventListener('click', function(e){
        e.preventDefault();
        logInData(e);
        
    },)
}