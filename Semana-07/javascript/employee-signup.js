window.onload = function () {
        /* DOM elements */
    var signUpInputs = document.querySelectorAll("form input");
    var nameLabel = document.getElementById('name-label');
    var name = document.getElementById('name');
    var nameMesagge = document.getElementById('name-mesagge');
    var surnameLabel = document.getElementById('surname-label');
    var surname = document.getElementById('surname');
    var surnameMesagge = document.getElementById('surname-mesagge');
    var idLabel = document.getElementById('id-label');
    var idNumber = document.getElementById('id-number');
    var idMesagge = document.getElementById('id-mesagge')
    var birthLabel = document.getElementById('birth-label');
    var birth = document.getElementById('birth-date');
    var birthMesagge = document.getElementById('birth-mesagge')
    var phoneLabel = document.getElementById('phone-label');
    var phone = document.getElementById('phone-number');
    var phoneMesagge = document.getElementById('phone-mesagge');
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
    var createButton = document.getElementById('btn');
    var signUpDataBox = document.getElementById('sign-data');
    var btnClose = document.getElementById('btn-close')
    
    /* validations */
    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
                "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
                "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
                "Q","R","S","T","U","V","W","X","Y","Z"];
    
    var numbers = ["0","1","2","3","4","5","6","7","8","9"];

    var symbols = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-",".", "@"];

    // Function to get only letters and their number
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

    // Function to check if there are only numbers
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

    // Function to obtain Name input value in a p tag
    function inputNameData (input) {
        var pName = document.createElement('p');
        if(lettersNumbers(input) > 3) {
            pName.innerText ='Name: ' + input;;
            return pName;
        }else {
            pName.innerText = 'Enter a valid Name please';
            return pName;
        }
    }

    // Function to obtain surname input value in a p tag
    function surnameInpurData (input) {
        var pSurname = document.createElement('p');
        if (lettersNumbers(input) > 3) {
            pSurname.innerText ='Surname: ' + input;
            return pSurname;
        } else {
            pSurname.innerText = 'Enter a valid surame please';
            return pSurname;
        }
    }

    // // Function to obtain ID input value in a p tag
    function idInputData (input) {
        var pIdNumber = document.createElement('p')
        if(checkNumbers(input) > 7 ) {
            pIdNumber.innerText = 'ID number ' + input;
            return pIdNumber;
        } else {
            pIdNumber.innerText = 'Enter a valid ID number please';
            return pIdNumber;
        }
    }
    // Function to validate birth date
    function validateBirhtDate(input){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy  + '-' + mm + '-' + dd ;
        var dateValue = input;
        if(checkNumbers(dateValue) !== 0 && dateValue < today){
            return true
        } else {
            return false
        }
    }


    // Function to obtain Birth date input value in a p tag
    function birthInputData (input) {
        var pBirth = document.createElement('p');
        if(validateBirhtDate(input) === true ) {
            pBirth.innerHTML = 'Birth date: ' + input;
            return pBirth;
        } else {
            pBirth.innerHTML = 'Enter a  valid birth date please';
            return pBirth;
        }
    }

    // Function to obtain Name input value in a p tag
    function phoneInputData (input) {
        var pPhone = document.createElement('p');
        if(checkNumbers(input) === 10 ) {
            pPhone.innerHTML = 'Phone number: ' + input;
            return pPhone;
        } else {
            pPhone.innerHTML = 'Enter a valid phone number please';
            return pPhone;
        }
    }
    //Function to chek if there is a space beffore a string of numbers
    function spaceBeforeNumber (input) {
        for(var i= 0; i < input.length; i++) {
            if(checkNumbers(input[i])){
                if(input[i-1] == " " && checkNumbers(input.substring(i+1))){
                    return true;
                } 
            }
        }
        return false;
    }

    //Function to validate adress field
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
    }

    // Function to obtain adress input value in a p tag
    function adressInputData (input) {
        var pAdress = document.createElement('p');
        if(validateAdress(input) === true ) {
            pAdress.innerHTML = 'Adress: ' + input;
            return pAdress;
        } else {
            pAdress.innerHTML = 'Enter a valid adress please';
            return pAdress;
        }
    }

    //Function to validate city field
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

        if(numberOfLetters > 3 && numericChar > 2 && numberOfSymbols == 0) {
            return true
        } else {
            return false
        }
    }

    // Function to obtain city input value in a p tag
    function cityInputData (input) {
        var pCity = document.createElement('p');
        if(validateCity(input) === true ) {
            pCity.innerHTML = 'City: ' + input;
            return pCity;
        } else {
            pCity.innerHTML = 'Enter a valid city please';
            return pCity;
        }
    }

    //Function to validate Zip code
    function validateZip (input) {
        if(checkNumbers(input) >= 4 && checkNumbers(input) <= 5) {
            return true;
        } else {
            return false
        }
    }

    // Function to obtain zip input value in a p tag
    function zipInputData (input) {
        var pZip = document.createElement('p');
        if(validateZip(input) === true ) {
            pZip.innerHTML = 'Zip: ' + input;
            return pZip;
        } else {
            pZip.innerHTML = 'Enter a valid Zip code please';
            return pZip;
        }
    }

    //Function to validate email
    function validateEmail (input) {
        var regularExpresion = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (regularExpresion.test(input)) {
            return true;
        } else {
            return false;
        }
    }
    // Function to obtain email input value in a p tag
    function emailInputData (input) {
        var pEmail = document.createElement('p');
        if(validateEmail(input) === true ) {
            pEmail.innerHTML = 'Email: ' + input;
            return pEmail;
        } else {
            pEmail.innerHTML = 'Enter a valid Email please';
            return pEmail;
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
            return true;
        } else {
            return false;
        }
    }

    //Function to obtain pasword input value in a p tag
    function passwordInputData (input) {
        var pPassword = document.createElement('p');
        if(validatePassword(input) === true ) {
            pPassword.innerHTML = 'Password: ' + input;
            return pPassword;
        } else {
            pPassword.innerHTML = 'Enter a valid password please';
            return pPassword;
        }
    }

    // Function to validate repeat password
    function validateRePassword (input) {
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
            if( inputValue === password.value && inputValue !== " " ){
                return true;
            }
        }
        return false;
    }

    //Function to obtain pepeat pasword input value in a p tag
    function rePasswordInputData (input) {
        var pRePassword = document.createElement('p');
        if (validateRePassword(input) === true) {
            pRePassword.innerHTML = 'Password: ' + input;
            return pRePassword;
        } else {
            pRePassword.innerHTML = 'Repeat the password please';
            return pRePassword;
        }
    }

    // Fuction to validate each input on blur event
    function validateForm(e) {
        switch(e.target.name) {
            case 'name':
                if(lettersNumbers(e.target.value) < 3) {
                    nameLabel.classList.add('label-error');
                    name.classList.add('input-error');
                    nameMesagge.classList.add('mesagge-error');
                }else {
                    nameLabel.classList.remove('label-error');
                    name.classList.remove('input-error');
                    nameMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'surname': 
                if(lettersNumbers(e.target.value) < 3) {
                    surnameLabel.classList.add('label-error');
                    surname.classList.add('input-error');
                    surnameMesagge.classList.add('mesagge-error');
                }else {
                    surnameLabel.classList.remove('label-error');
                    surname.classList.remove('input-error');
                    surnameMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'id-number':
                if(checkNumbers(e.target.value) < 7) {
                    idLabel.classList.add('label-error');
                    idNumber.classList.add('input-error');
                    idMesagge.classList.add('mesagge-error');
                } else {
                    idLabel.classList.remove('label-error');
                    idNumber.classList.remove('input-error');
                    idMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'birth-date':
                if(!(validateBirhtDate(e.target.value))) {
                    birthLabel.classList.add('label-error');
                    birth.classList.add('input-error');
                    birthMesagge.classList.add('mesagge-error');
                } else {
                    birthLabel.classList.remove('label-error');
                    birth.classList.remove('input-error');
                    birthMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'phone-number':
                if(checkNumbers(e.target.value) !== 10 ) {
                    phoneLabel.classList.add('label-error');
                    phone.classList.add('input-error');
                    phoneMesagge.classList.add('mesagge-error');
                } else {
                    phoneLabel.classList.remove('label-error');
                    phone.classList.remove('input-error');
                    phoneMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'adress': 
                if (!(validateAdress(e.target.value))) {
                    adressLabel.classList.add('label-error');
                    adress.classList.add('input-error');
                    adressMesagge.classList.add('mesagge-error');
                } else {
                    adressLabel.classList.remove('label-error');
                    adress.classList.remove('input-error');
                    adressMesagge.classList.remove('mesagge-error');
                }
            break;
            case 'city':
                if(!(validateCity(e.target.value))) {
                    cityLabel.classList.add('label-error');
                    city.classList.add('input-error');
                    cityMesagge.classList.add('mesagge-error');
                } else {
                    cityLabel.classList.remove('label-error');
                    city.classList.remove('input-error');
                    cityMesagge.classList.remove('mesagge-error');
                }
            break;
            case'zip':
                if(!(validateZip(e.target.value))) {
                    zipLabel.classList.add('label-error');
                    zip.classList.add('input-error');
                    zipMesagge.classList.add('mesagge-error');
                } else {
                    zipLabel.classList.remove('label-error');
                    zip.classList.remove('input-error');
                    zipMesagge.classList.remove('mesagge-error');
                }
            break;
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
                if(!(validatePassword(e.target.value))) {
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
                if(!(validateRePassword(e.target.value))) {
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

    //Function for correcting state of wrong field in focus event
    function correctError(e) {
        switch(e.target.name) {
            case 'name':
                nameLabel.classList.remove('label-error');
                name.classList.remove('input-error');
                nameMesagge.classList.remove('mesagge-error');
            break; 
            case 'surname':
                surnameLabel.classList.remove('label-error');
                surname.classList.remove('input-error');
                surnameMesagge.classList.remove('mesagge-error');
            break;
            case 'id-number':
                idLabel.classList.remove('label-error');
                idNumber.classList.remove('input-error');
                idMesagge.classList.remove('mesagge-error');
            break;
            case 'birth-date':
                birthLabel.classList.remove('label-error');
                birth.classList.remove('input-error');
                birthMesagge.classList.remove('mesagge-error');
            break;
            case 'phone-number':
                phoneLabel.classList.remove('label-error');
                phone.classList.remove('input-error');
                phoneMesagge.classList.remove('mesagge-error');
            break;
            case 'adress':
                adressLabel.classList.remove('label-error');
                adress.classList.remove('input-error');
                adressMesagge.classList.remove('mesagge-error');
            break;
            case 'city':
                cityLabel.classList.remove('label-error');
                city.classList.remove('input-error');
                cityMesagge.classList.remove('mesagge-error');
            break;
            case 'zip':
                zipLabel.classList.remove('label-error');
                zip.classList.remove('input-error');
                zipMesagge.classList.remove('mesagge-error');
            break;
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
            case 're-password':
                rePasswordLabel.classList.remove('label-error');
                rePassword.classList.remove('input-error');
                rePasswordMesagge.classList.remove('mesagge-error');
            break;
        }   
    }
        // Function to get data from inputs when click on create button
        function signUpnData () {
            var nameData = inputNameData(name.value);
            var surnameData = surnameInpurData(surname.value);
            var idData = idInputData(idNumber.value);
            var birthData = birthInputData(birth.value);
            var phoneData = phoneInputData(phone.value);
            var adressData = adressInputData(adress.value);
            var cityData = cityInputData(city.value);
            var zipData = zipInputData(zip.value);
            var emailData = emailInputData(email.value);
            var passwordData = passwordInputData(password.value);
            var rePasswordData = rePasswordInputData(rePassword.value);
            signUpDataBox.appendChild(nameData);
            signUpDataBox.appendChild(surnameData);
            signUpDataBox.appendChild(idData);
            signUpDataBox.appendChild(birthData);
            signUpDataBox.appendChild(phoneData);
            signUpDataBox.appendChild(adressData);
            signUpDataBox.appendChild(cityData);
            signUpDataBox.appendChild(zipData);
            signUpDataBox.appendChild(emailData);
            signUpDataBox.appendChild(passwordData);
            signUpDataBox.appendChild(rePasswordData);
            signUpDataBox.classList.add('sign-push');
            btnClose.addEventListener('click',function (e) {
            signUpDataBox.classList.remove('sign-push');
            nameData.parentNode.removeChild(nameData);
            surnameData.parentNode.removeChild(surnameData);
            idData.parentNode.removeChild(idData);
            birthData.parentNode.removeChild(birthData);
            phoneData.parentNode.removeChild(phoneData);
            adressData.parentNode.removeChild(adressData);
            cityData.parentNode.removeChild(cityData);
            zipData.parentNode.removeChild(zipData);
            emailData.parentNode.removeChild(emailData);
            passwordData.parentNode.removeChild(passwordData);
            rePasswordData.parentNode.removeChild(rePasswordData);

            })
            var date = birth.value
            var year = date.substring (0,4);
            var month = date.substring (5,7);
            var day = date.substring(8,10);
            var newDate = month +"/" + day + "/" + year;

            var signUpUrl = "https://basp-m2022-api-rest-server.herokuapp.com/signup"
            signUpUrl = signUpUrl + "?name=" + name.value + "&lastName=" + surname.value + "&dni=" + idNumber.value + 
            "&dob=" + newDate + "&phone=" + phone.value + "&address=" + adress.value + "&city=" + city.value + 
            "&zip=" + zip.value + "&email=" + email.value + "&password=" + password.value;        
            if(lettersNumbers(name.value) > 3 && lettersNumbers(surname.value) > 3 && checkNumbers(idNumber.value) > 7 &&
                validateBirhtDate(birth.value) && checkNumbers(phone.value) === 10 && validateAdress(adress.value) && 
                validateCity(city.value) && validateZip(zip.value)  && validateEmail(email.value) && validatePassword(password.value) 
                && validateRePassword(rePassword.value) ) {
                    fetch(signUpUrl)
                        .then(function(data){
                            var myJson = data.json();
                            return myJson
                        })
                        .then(function(jsonData){
                            localStorage.setItem('Name',JSON.stringify(jsonData.data.name));
                            localStorage.setItem('Surname',JSON.stringify(jsonData.data.lastName));
                            localStorage.setItem('Employee',JSON.stringify(jsonData.data.name));
                            localStorage.setItem('Id number',JSON.stringify(jsonData.data.dni));
                            localStorage.setItem('Date of birth',JSON.stringify(jsonData.data.dob));
                            localStorage.setItem('Phone',JSON.stringify(jsonData.data.phone));
                            localStorage.setItem('Address',JSON.stringify(jsonData.data.address));
                            localStorage.setItem('City',JSON.stringify(jsonData.data.city));
                            localStorage.setItem('Zip number',JSON.stringify(jsonData.data.zip));
                            localStorage.setItem('Email',JSON.stringify(jsonData.data.email));
                            localStorage.setItem('Password',JSON.stringify(jsonData.data.password));
                            alert(jsonData.msg +" " + JSON.stringify(jsonData));
                        })
                        .catch(function(error){
                            alert('The request was not successful' + error)
                        })
            }else {
                console.log('sos un boludo')
            }
        }
    

    //Adding events blur and focus to every input in the form
    signUpInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });

    //Adding envent click to create button
    createButton.addEventListener('click', function(e){
        e.preventDefault();
        signUpnData(e);
    })

    
}

