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
    var logInResult = document.getElementById('log-data');
    var btnClose = document.getElementById('btn-close')
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
        
        if(numberOfLetters != 0 && numericChar != 0 && numberOfSymbols === 0) {
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
                if(validatePassword(e.target.value) == false || e.target.value.length < 8 ) {
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
            var pMail = document.createElement('p');
            var pPassword = document.createElement('p');
            pMail.innerText = 'Email entered: '+ email.value;
            pPassword.innerText = 'Password entered: '+ password.value;
            logInResult.appendChild(pMail);
            logInResult.appendChild(pPassword);
            logInResult.classList.add('sign-push')
            fetch("https://basp-m2022-api-rest-server.herokuapp.com/login?email="+email.value+"&password="+password.value)
                .then(function(data){
                    return data.json();
                })
                .then(function(jsonData){
                    alert(jsonData.msg + " " + JSON.stringify(jsonData))
                })
                .catch(function(error){
                    alert('The request was not successful' + error)
                })
            
        } else if(validateEmail(email.value) === false && validatePassword(password.value)) {
            var pMail = document.createElement('p');
            pMail.innerText = 'Please enter a valid email adress';
            logInResult.appendChild(pMail);
            logInResult.classList.add('sign-push');
            emailLabel.classList.add('label-error');
            email.classList.add('input-error');
            emailMesagge.classList.add('mesagge-error');
        } else if (validateEmail(email.value) && validatePassword(password.value) == false) {
            var pPassword = document.createElement('p');
            pPassword.innerText = 'Please enter a valid password';
            logInResult.appendChild(pPassword);
            logInResult.classList.add('sign-push');
            passwordLabel.classList.add('label-error');
            password.classList.add('input-error');
            passwordMesagge.classList.add('mesagge-error');
        }else {
            var pMail = document.createElement('p');
            var pPassword = document.createElement('p');
            pMail.innerText = 'Please enter a valid email adress';
            pPassword.innerText = 'Please enter a valid password';
            logInResult.appendChild(pMail);
            logInResult.appendChild(pPassword);
            logInResult.classList.add('sign-push');
            emailLabel.classList.add('label-error');
            email.classList.add('input-error');
            emailMesagge.classList.add('mesagge-error');
            passwordLabel.classList.add('label-error');
            password.classList.add('input-error');
            passwordMesagge.classList.add('mesagge-error');
        }
        
        btnClose.addEventListener('click',function (e) {
            logInResult.classList.remove('sign-push');
            pMail.parentNode.removeChild(pMail);
            pPassword.parentNode.removeChild(pPassword);

        })
    }
    
    logInButton.addEventListener('click', function(e){
        e.preventDefault();
        logInData(e);
        
    },)
}