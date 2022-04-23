window.onload = function () {
    /* DOM elements */
    var logInForm = document.getElementById("login-form");
    var logInInputs = document.querySelectorAll("form input");
    
    /*Validations*/
    var regularExpresion = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    function validatePassword (input){
        var letters = "abcdefghyjklmnñopqrstuvwxyz"
        for(var i= 0; i < input.length; i++){
            if(letters.indexOf(input.charAt(i),0)!=-1){
                return true;
            }
        }
        return false;
    }
    //function validatePassword (input){
    //    for(var i = 0; i < input.length; i++){
    //        if(!isNaN(input.charAt(i)) && input.charAt(i) !== " " &&  input.charAt(i) !== '!'){
    //            return true;
    //        }
    //    }
    //    return false;
    //}

    function validateForm(e){
        switch(e.target.name) {
            case 'email':
                if(regularExpresion.test(e.target.value) && e.target.value !== " "){
                    console.log('bien ahi');
                }else{
                    console.log('escribi bien pelotudo');
                }
            break;
            case 'password':
                if(validatePassword(e.target.value)) {
                        console.log('buenas pass')
                }else {
                    console.log('te van a hackear por boludo')
                }
            break;
        }
        
    }

    logInInputs.forEach(function(input){
        input.addEventListener('blur', validateForm)
    });


    logInForm.addEventListener('submit', function(e){
        e.preventDefault;
    })


}