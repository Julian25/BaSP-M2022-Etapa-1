window.onload = function () {
        /* DOM elements */
    var logInInputs = document.querySelectorAll("form input");
    var nameLabel = document.getElementById('name-label');
    var name = document.getElementById('name');
    var nameMessage = document.getElementById('name-message');
    var surnameLabel = document.getElementById('surname-label');
    var surname = document.getElementById('surname');
    var surnameMessage = document.getElementById('surname-message')
    var idLabel = document.getElementById('id-label');
    var idNumber = document.getElementById('id-number');
    var idMessage = document.getElementById('id-message')
    var birthLabel = document.getElementById('birth-label');
    var birth = document.getElementById('birth-date');
    var phoneLabel = document.getElementById('phone-label');
    var phone = document.getElementById('phone-number');
    var phoneMessage = document.getElementById('phone-message');
    var adressLabel = document.getElementById('adress-label');
    var adress = document.getElementById('adress');
    var adressMesagge = document.getElementById('adress-mesagge');
    var cityLabel = document.getElementById('city-label');
    var city = document.getElementById('city');
    var cityMesagge = document.getElementById('city-mesagge');
    var zipLabel = document.getElementById('zip-label');
    var zip = document.getElementById('zip');
    var zipMesagge = document.getElementById('zip-mesagge')
    var emailLabel = document.getElementById('email-label');
    var email = document.getElementById('email');
    var emailMesagge = document.getElementById('email-mesagge');
    var passwordLabel = document.getElementById('password-label');
    var password = document.getElementById('password');
    var passwordMesagge = document.getElementById('password-mesagge');
    var rePasswordLabel = document.getElementById('repeat-label');
    var rePassword = document.getElementById('re-password');
    var rePasswordMesagge = document.getElementById('repeat-mesagge');

    /* validations */

    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    var numbers = ["0","1","2","3","4","5","6","7","8","9"];

    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];


    function lettersNumbers (input) {
        var inputValue = input;
        var numberOfLetters = 0
        for(var i= 0; i < inputValue.length; i++) {
            var inputName = inputValue[i];
            if (letters.indexOf(inputName) != -1) {
                numberOfLetters++;
            } else  {
                return false;
            }
        }
        return numberOfLetters;        
    }

    function checkNumbers (input) {
        var inputValue = input;
        var numericChar = 0;
        for(var i= 0; i < inputValue.length; i++) {
            var inputName = inputValue[i];
            if (numbers.indexOf(inputName) != -1) {
                numericChar++;
            } else  {
                return false;
            }
        }
        return numericChar;

    }

    function spaceBeforeNumber (input) {
        for(var i= 0; i < input.length; i++) {
            if(checkNumbers(input[i])){
                if(input[i-1] == " " && checkNumbers(input.substring(i+1))){
                    console.log(input[i-1]);
                    return true;
                } 
                
            }
        }
        return false;
    }

    

    function validateAdress (input) {
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
        
        if(numberOfLetters >= 5 && numericChar >= 5 && numberOfSymbols == 0) {
            if(spaceBeforeNumber(input)) {
                return true;
            }
        }
        return false
    }

    function validateCity (input) {
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
        
        if(numberOfLetters >3 && numericChar > 3 && numberOfSymbols == 0) {
            return true
        } else {
            return false
        }
        
    }

    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
        }
    }

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
    
    function validateForm(e) {
        switch(e.target.name) {
            case 'name':
                if(lettersNumbers(e.target.value) < 3) {
                    nameLabel.classList.add('label-error');
                    name.classList.add('input-error');
                    nameMessage.classList.add('message-error');
                }else {
                    nameLabel.classList.remove('label-error');
                    name.classList.remove('input-error');
                    nameMessage.classList.remove('message-error');
                }
            break;
            case 'surname': 
                if(lettersNumbers(e.target.value) < 3) {
                    surnameLabel.classList.add('label-error');
                    surname.classList.add('input-error');
                    surnameMessage.classList.add('message-error');
                }else {
                    surnameLabel.classList.remove('label-error');
                    surname.classList.remove('input-error');
                    surnameMessage.classList.remove('message-error');
                }
            break;
            case 'id-number':
                if(checkNumbers(e.target.value) < 7) {
                    idLabel.classList.add('label-error');
                    idNumber.classList.add('input-error');
                    idMessage.classList.add('message-error');
                } else {
                    idLabel.classList.remove('label-error');
                    idNumber.classList.remove('input-error');
                    idMessage.classList.remove('message-error');
                }
            break;
            case 'phone-number':
                if(checkNumbers(e.target.value) < 10  ||checkNumbers(e.target.value) > 12 ) {
                    phoneLabel.classList.add('label-error');
                    phone.classList.add('input-error');
                    phoneMessage.classList.add('message-error');
                } else {
                    phoneLabel.classList.remove('label-error');
                    phone.classList.remove('input-error');
                    phoneMessage.classList.remove('message-error');
                }
            break;
            case 'adress': 
                if (!(validateAdress(e.target.value))) {
                    adressLabel.classList.add('label-error');
                    adress.classList.add('input-error');
                    adressMesagge.classList.add('message-error');
                } else {
                    adressLabel.classList.remove('label-error');
                    adress.classList.remove('input-error');
                    adressMesagge.classList.remove('message-error');
                }
            break;
            case 'city':
                if(!(validateCity(e.target.value))) {
                    cityLabel.classList.add('label-error');
                    city.classList.add('input-error');
                    cityMesagge.classList.add('message-error');
                } else {
                    cityLabel.classList.remove('label-error');
                    city.classList.remove('input-error');
                    cityMesagge.classList.remove('message-error');
                }
            break;
            case'zip':
                if(checkNumbers(e.target.value) < 4  || checkNumbers(e.target.value) > 5){
                    zipLabel.classList.add('label-error');
                    zip.classList.add('input-error');
                    zipMesagge.classList.add('message-error');
                } else {
                    zipLabel.classList.remove('label-error');
                    zip.classList.remove('input-error');
                    zipMesagge.classList.remove('message-error');
                }
            break;
            case 'email':
                if(!(validateEmail(e.target.value))){
                    emailLabel.classList.add('label-error');
                    email.classList.add('input-error');
                    emailMesagge.classList.add('message-error');
                }else{
                    emailLabel.classList.remove('label-error');
                    email.classList.remove('input-error');
                    emailMesagge.classList.remove('message-error');
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
            case 're-password':
                if(rePassword.value !== password.value) {
                    rePasswordLabel.classList.add('label-error');
                    rePassword.classList.add('input-error');
                    rePasswordMesagge.classList.add('mesagge-error');
                } else {
                    rePasswordLabel.classList.remove('label-error');
                    rePassword.classList.remove('input-error');
                    rePasswordMesagge.classList.remove('mesagge-error')
                }
        }
    }

    

    function correctError(e) {
        switch(e.target.name) {
            case 'name':
                nameLabel.classList.remove('label-error');
                name.classList.remove('input-error');
                nameMessage.classList.remove('message-error');
            break; 
            case 'surname':
                surnameLabel.classList.remove('label-error');
                surname.classList.remove('input-error');
                surnameMessage.classList.remove('message-error');
            break;
            case 'id-number':
                idLabel.classList.remove('label-error');
                idNumber.classList.remove('input-error');
                idMessage.classList.remove('message-error');
            break;
            case 'phone-number':
                phoneLabel.classList.remove('label-error');
                phone.classList.remove('input-error');
                phoneMessage.classList.remove('message-error');
            break;
            case 'adress':
                adressLabel.classList.remove('label-error');
                adress.classList.remove('input-error');
                adressMesagge.classList.remove('message-error');
            break;
            case 'city':
                cityLabel.classList.remove('label-error');
                city.classList.remove('input-error');
                cityMesagge.classList.remove('message-error');
            break;
            case 'zip':
                zipLabel.classList.remove('label-error');
                zip.classList.remove('input-error');
                zipMesagge.classList.remove('message-error');
            break;
            case 'email':
                emailLabel.classList.remove('label-error');
                email.classList.remove('input-error');
                emailMesagge.classList.remove('message-error');
            break;
            case 'password':
                passwordLabel.classList.remove('label-error');
                password.classList.remove('input-error');
                passwordMesagge.classList.remove('mesagge-error');
            break;
            case 're-password':
                rePasswordLabel.classList.remove('label-error');
                rePassword.classList.remove('input-error');
                rePasswordMesagge.classList.remove('mesagge-error');
            break;

        }
    }


    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });
}