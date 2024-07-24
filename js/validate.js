//For Error messages
function clearErrorMessage(err) {
    err.innerHTML = "";
    err.style.display = "none";
}
function displayErrorMessage(err, message) {
    err.innerHTML = message;
    err.style.display = "inline";
    err.style.fontWeight = "bold";
    err.style.color = "red";
}
//validate subscribe page
function validateSubscribeForm() {
    let validtext = validateText('street');
    let validname = validateName('name', 'err1');
    let validusername = validateName('user-name', 'err2');
    let validpass = validatePassword();
    let confirmpass = validateConfirmPassword();
    let validMail = validateEmail();
    let confirmMail = validateConfirmEmail();
    let validphone = validatePhone();
    let validage = validateAge();
    let validbldg = validatebldg();
    let validForm = false;
    if (validtext == true && validname == true && validusername == true && validpass == true && confirmpass == true && validMail == true && confirmMail == true && validphone == true && validage == true && validbldg == true) {
        validForm = true;
    }
    return validForm;
}
function validateText(textID) {
    let text = document.getElementById(textID);
    if (text.value != "") {
        text.style.border = "";
        text.placeholder = "";
        return true;
    }
    else {
        text.style.borderColor = "red";
        text.placeholder = "Enter text here!";
        return false;
    }
}
function validateName(nameID, errID) {
    let name = document.getElementById(nameID);
    let err = document.getElementById(errID)
    var isletters = /^[A-Z\s]+$/i;
    if (name.value != "" && name.value.match(isletters)) {
        name.style.border = "";
        name.placeholder = "";
        clearErrorMessage(err);
        return true;
    } else {
        name.style.borderColor = "red";
        if (name.value == "") {
            name.placeholder = "Enter name here!";
            err.innerHTML = "";
        } else {
            displayErrorMessage(err, "Enter letters only!");
        }
        return false;
        
    }
}
function validatePassword() {
    let pass = document.getElementById("pass");
    let err1 = document.getElementById("lengthErr");
    let err2 = document.getElementById("letterErr");
    let err3 = document.getElementById("digitErr");
    let err4 = document.getElementById("specialErr");
    passPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])/i;
    
    // Clear all error messages and reset styles initially
    clearErrorMessage(err1);
    clearErrorMessage(err2);
    clearErrorMessage(err3);
    clearErrorMessage(err4);

    if (pass.value != "" && pass.value.length >= 8 && passPattern.test(pass.value)) {
        pass.style.border = "";
        pass.placeholder = "";
        return true;
    } else {
        pass.style.borderColor = "red";
        
        if (pass.value == "") {
            pass.placeholder = "Enter password here!";

        } else {
            if (pass.value.length < 8) {
                displayErrorMessage(err1, "Enter at least 8 characters!");
            }
            if (!pass.value.match(/[A-Z]/i)) {
                displayErrorMessage(err2, "Enter at least 1 letter!");
            }
            if (!pass.value.match(/\d/)) {
                displayErrorMessage(err3, "Enter at least 1 numerical digit!");
            }
            if (!pass.value.match(/[@#$!%*?&]/)) {
                displayErrorMessage(err4, "Enter at least 1 special character!");
            }
        }
        return false;
    }
}
function showPassword() {
    let show = document.getElementById("showpass");
    let pass = document.getElementById("pass");
    if (show.checked) {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }
}
function validateConfirmPassword() {
    let confirmPass = document.getElementById("confirm-pass");
    let err5 = document.getElementById("err5");
    clearErrorMessage(err5);
    if (confirmPass.value != "" && confirmPass.value == pass.value) {
        confirmPass.style.border = "";
        confirmPass.placeholder = "";
        return true;
    }
    else {
        confirmPass.style.borderColor = "red";

        if (confirmPass.value == ""){
            confirmPass.placeholder = "Confirm password here!"
        }
        else {
            displayErrorMessage(err5, "Original and Confirmed Passwords must be the same! ");
        }
        return false;
        }

}
function validateEmail() {
    let mail = document.getElementById("e-mail");
    var enteredMail = mail.value;
    let sub = enteredMail.slice(enteredMail.indexOf('@') + 1)
    console.log(sub);
    let arr = sub.split(".");
    console.log(arr);

    let err6 = document.getElementById("@-char");
    let err7 = document.getElementById("add2other");
    let err8 = document.getElementById("correct-end");
    
    // Clear all error messages and reset styles initially
    clearErrorMessage(err6);
    clearErrorMessage(err7);
    clearErrorMessage(err8);


    if (mail.value != ""
        && ((enteredMail.indexOf('@')) != -1)
        && (arr[0] != "")
        && (arr[0].length >= 2)
        && (enteredMail.lastIndexOf('.edu.qa') == enteredMail.length - 7)
        && ((enteredMail.lastIndexOf('.edu.qa')) != -1)) {
        mail.style.border = "";
        mail.placeholder = "";
        return true;
    }
    else {
        mail.style.borderColor = "red";

        if (mail.value == "") {
            mail.placeholder = "Enter email here!";
        }
        else{
            if (enteredMail.indexOf('@') == -1){
                displayErrorMessage(err6, "Enter the '@' character!");
            }
            if (arr[0] == "" ||  arr[0].length < 2){
                displayErrorMessage(err7, "Add atleast two character after '@'!")
            }
            if(enteredMail.lastIndexOf('.edu.qa') != enteredMail.length - 7 || (enteredMail.lastIndexOf('.edu.qa')) == -1){
                displayErrorMessage(err8, "Add '.edu.qa' at the end!")
            }
        }
        return false;
    }
}
function validateConfirmEmail() {
    let confirmMail = document.getElementById("confirm-email");
    let mail = document.getElementById("e-mail");
    let err9 = document.getElementById("err9");
    clearErrorMessage(err9);
    if (confirmMail.value != "" && confirmMail.value == mail.value) {
        confirmMail.style.border = "";
        confirmMail.placeholder = "";
        return true;
    }
    else {
        confirmMail.style.borderColor = "red";

        if(mail.value == ""){
            confirmMail.placeholder = "Confirm email here!";
        }
        else{
            displayErrorMessage(err9, "Original and confirmed email must be the same!");
        }
        return false;
    }
}
function validatePhone() {
    let phone = document.getElementById("phone");
    let err10 = document.getElementById("err10")
    let err11 = document.getElementById("err11")
    clearErrorMessage(err10);
    clearErrorMessage(err11);
    if (phone.value != "" && phone.value.length == 12 && phone.value.startsWith("+974") && isNaN(phone.value) == false) {
        phone.style.border = "";
        phone.placeholder = "";
        return true;
    }
    else {
        phone.style.borderColor = "red";

        if(phone.value == ""){
            phone.placeholder = "Enter phone number here!";
        }
        else {
            if(phone.value.length != 12 || isNaN(phone.value) == true){
                displayErrorMessage(err10, "Enter exactly 12 digits!");
            }
            if(phone.value.startsWith("+974") == false){
                displayErrorMessage(err11, "Only Qatari country code (+974) accepted!");
            }
        }
        return false;
    }
}
function validateAge() {
    let age = document.getElementById("age");
    let dob = document.getElementById("birth");
    let err12 = document.getElementById("err12");
    let err13 = document.getElementById("err13");
    var birthdate = new Date(dob.value);
    console.log(birthdate);
    var currentdate = new Date();
    console.log(currentdate);
    var calculateAge = currentdate.getFullYear() - birthdate.getFullYear();
    console.log(calculateAge);

    clearErrorMessage(err12);
    clearErrorMessage(err13);

    if (age.value != "" && (age.value >= 18 && age.value <= 100) && (age.value == calculateAge)) {
        age.style.border = "";
        age.placeholder = "";
        return true;
    }
    else {
        age.style.borderColor = "red";
        dob.style.borderColor = "red";

        if(age.value == ""){
            age.placeholder = "Enter age here!";
        }
        else{
            if(age.value < 18 || age.value > 100){
                displayErrorMessage(err12, "Enter an age between 18 and 100!");
            }
            if(age.value != calculateAge){
                displayErrorMessage(err13, "Make sure the date of birth entered aligns with the age!");
            }
        }
        return false;
    }

}

function validatebldg() {
    validateText('bldg');
    let bldg = document.getElementById("bldg");
    let err14 = document.getElementById("err14");

    clearErrorMessage(err14);

    if (bldg.value != "" && (isNaN(bldg.value)) == false && (bldg.value >= 1 && bldg.value <= 666)) {
        bldg.value = parseInt(bldg.value);
        bldg.style.border = "";
        bldg.placeholder = "";
        return true;
    }
    else {
        bldg.style.borderColor = "red";

        if(bldg.value == ""){
            bldg.placeholder = "Enter building number here!";
        }
        else{
            if(bldg.value < 1 || bldg.value > 666 || isNaN(bldg.value) == true){
                displayErrorMessage(err14, "Enter a number between 1 and 666!")
            }
        }
        return false;
    }
}

//validate contact us page
function validateContactForm() {
    let validuser = validateUser();
    let validmessage = validateMessage();
    let validcontact = validateContact();
    let validate_email_phone = validateEmail_Phone();
    let validForm = false;
    if (validuser && validmessage && validcontact && validate_email_phone) {
        validForm = true;
    }
    return validForm;
}
function validateUser() {
    let usr = document.getElementById("user");
    if (usr.value != "") {
        usr.style.border = "";
        usr.placeholder = "";
        return true;
    }
    else {
        usr.style.borderColor = "red";
        usr.placeholder = "Enter name here!";
        return false;
    }
}
function validateEmail_Phone(){
    let e_p = document.getElementById("prefer");
    if (e_p.value != "") {
        e_p.style.border = "";
        e_p.placeholder = "";
        return true;
    }
    else {
        e_p.style.borderColor = "red";
        e_p.placeholder = "Enter Email/Phone here!";
        return false;
    }
}
function validateMessage() {
    let msg = document.getElementById("message");
    if (msg.value != "") {
        msg.style.border = "";
        msg.placeholder = "";
        return true;
    }
    else {
        msg.style.borderColor = "red";
        msg.placeholder = "Enter message here!";
        return false;
    }
}
function validateContact() {
    let phoneRadio = document.getElementById("phone");
    let emailRadio = document.getElementById("email");
    let error = document.getElementById("error-msg");
    preferContact = document.getElementById("prefer");
    if (phoneRadio.checked) {
        //change prefer field to tel
        preferContact.type = "tel";
        preferredContact.innerHTML = "Phone Number";
    }
    else {
        preferContact.type = "email";
        preferredContact.innerHTML = "Email Address";
    }
    if (phoneRadio.checked != true && emailRadio.checked != true) {
        error.innerHTML = "Please select your preferred method of contact";
        error.style.fontWeight = "bold";
        error.style.display = "inline"
        error.style.color = "red";
        return false;
    }
    else {
        error.innerHTML = "";
        error.style.display = "none";
        return true;
    }
}

