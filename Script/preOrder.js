var error;
function validate(){
    error = false;
    validate_Username();
    if(error){
        return;
    }
    validate_email();
    if(error){
        return;
    }
    validate_password();
    if(error){
        return;
    }
    validate_address();
    if(error){
        return;
    }
    validate_typeOfTheGame();
    if(error){
        return;
    }
    validate_numberOfCopies();
    if(error){
        return;
    }
    validate_terms();
    if(error){
        return;
    }
    window.alert("Pre Order successful!");
}



function validate_Username(){
    var text = document.getElementById("username").value;
    var flag = true;
    for(let i = 0; i<text.length;i++){
        var char = text.charCodeAt(i);
        if(!(char > 47 && char < 58) && !(char > 64 && char < 91) && !(char > 96 && char < 123)){
            flag = false;
            break;
        }
    }
    if(text  == ""){
        window.alert("Username must be filled");
        error = true;
    }
    else if(text.length < 6){
        window.alert("username must be at least 6 characters");
        error = true;
    }
    else if(flag == false){
        window.alert("Username must contain only letters and numbers");
        error = true;
    }
}

function validate_email(){
    var email = document.getElementById("email").value;
    if(email == ""){
        window.alert("email must be filled");
        error = true;
    }
    else if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        window.alert("email must contain '@' and '.'");
        error=true;
    }
    else if(email.indexOf("@") == 1 || email.indexOf(".") == email.length-1){
        window.alert("email must not start with '@' or email must not end with '.'");
        error=true;
    }
    else if(email.charAt(email.indexOf("@")+1) =="."){
        window.alert("email is invalid");
        error=true;
    }
}

function validate_password(){
    var password = document.getElementById("password").value;
    var alphanumeric = true;
    var capital = 0;
    var lower_case = 0;
    var number = 0;

    for(let i = 0; i<password.length;i++){
        var char = password.charCodeAt(i);
        if(password[i] === password[i].toUpperCase()){
            capital++
        }
        if(password[i] === password[i].toLowerCase()){
            lower_case++;
        }
        if(password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58){
            number++;
            capital=0;
            lower_case=0;
        }
    }

    if(password == ""){
        window.alert("Password must be filled");
        error = true;
    }
    else if(password.length < 5){
        window.alert("Password must be at least 5 characters");
        error = true;
    }
    else if(capital == 0){
        window.alert("Password must contain at least 1 uppercase");
        error = true;
    }
    else if(lower_case == 0){
        window.alert("Password must contain at least 1 lowercase");
        error = true;
    }
    else if(number == 0){
        window.alert("Password must contain at least 1 number");
        error = true;
    }
}

function validate_address(){
    var address = document.getElementById("address").value;
    if(address == ""){
        window.alert("Address must be filled");
        error = true;
    }
}

function validate_typeOfTheGame(){
    var text = document.getElementById("type").value;
    var r7s = "rainbow seven siege";
    var r7q = "rainbow seven quarantine";
    var compare_r7s = r7s.toUpperCase() === text.toUpperCase();
    var compare_r7q = r7q.toUpperCase() === text.toUpperCase();

    if(text ==""){
        window.alert("type of the game must be filled");
        error = true;
    }
    else if(compare_r7q === false && compare_r7s === false){
        window.alert("invalid type of the game");
        error = true;
    }
}

function validate_numberOfCopies(){
    var text = document.getElementById("copies").value;
    var flag = true;
    for(let i = 0; i < text.length; i++){
        if(!(text.charCodeAt(i) > 47 && text.charCodeAt(i) < 58)){
            flag = false;
            break;
        }
    }

    if(text == ""){
        window.alert("number of copies must be filled");
        error = true;
    }
    else if(flag === false){
        window.alert("number of copies only contain numbers");
        error = true;
    }
}

function validate_terms(){
    var agree = document.getElementById("terms");
    if(!(agree.checked)){
        window.alert("You must agree to the terms and service agreement first");
        error = true;
    }
}