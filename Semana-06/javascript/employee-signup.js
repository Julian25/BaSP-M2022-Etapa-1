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
    var adressLabel = document.getElementById('adress-label');
    var adress = document.getElementById('adress');
    var cityLabel = document.getElementById('city-label');
    var city = document.getElementById('city');
    var zipLabel = document.getElementById('zip-label');
    var zip = document.getElementById('zip');
    var emailLabel = document.getElementById('email-label');
    var email = document.getElementById('email');
    var passwordLabel = document.getElementById('password-label');
    var password = document.getElementById('password');
    var passwordLabel = document.getElementById('repeat-label');
    var password = document.getElementById('re-password');

    /* validations */

    var letters = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X","Y","Z"];

    var numbers = [0,1,2,3,4,5,6,7,8,9];

    var lettersAndNumbers = ["a","b","c","d","e","f","g","h","i","j","k",
    "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    0,1,2,3,4,5,6,7,8,9];


    function stringContainNumber (input){
        for(var i = 0; i < input.length; i++){
            if(!isNaN(input.charAt(i)) && input.charAt(i) !== " "){
                return true;
            }
        }
        return false;
    }


    
    function onlyLetters (input) {
        for(var i= 0; i < input.length; i++){
            if(letters.indexOf(input.charAt(i)) != -1 && stringContainNumber(input) == false) {
                return true;
            } else {
                return false;
            }
        }
    }

    function onlyNumbers (input) {
        var inputValue = Number(input);
        if(!isNaN(inputValue)) {
            return true;
        }else {
            return false;
        }
    }
    
    var caca =onlyNumbers('41235345');
    console.log(caca)
    

    function validateForm(e) {
        switch(e.target.name) {
            case 'name':
                if(!(onlyLetters(e.target.value))) {
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
                if(!(onlyLetters(e.target.value))) {
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
                if(!(onlyNumbers(e.target.value))|| e.target.value.length < 8 ) {
                    idLabel.classList.add('label-error');
                    idNumber.classList.add('input-error');
                    idMessage.classList.add('message-error');
                } else {
                    idLabel.classList.remove('label-error');
                    idNumber.classList.remove('input-error');
                    idMessage.classList.remove('message-error');
                }
            break;

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
            break:
        }
    }


    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
        input.addEventListener('focus', correctError)
    });
}