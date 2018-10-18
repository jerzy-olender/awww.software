function checkName() {
    var myName = document.getElementById('name').value;

    if ((myName.length) < 3) {
        document.getElementById("name").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("name").style.borderBottom = "2px solid green";
    }
}

function checkEmail() {

    var myEmail = document.getElementById('email').value;
    if ((myEmail.charAt(0) == '@') || (myEmail.charAt(myEmail.length - 1)) == '@') {
        document.getElementById("email").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("email").style.borderBottom = "2px solid green";
    }
}


function checkPhone() {

    var myPhone = document.getElementById('phone').value;
    if (isNaN(myPhone) || (myPhone.length) < 9) {
        document.getElementById("phone").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("phone").style.borderBottom = "2px solid green";
    }
}


function checkSubject() {

    var mySubject = document.getElementById('subject').value;
    if ((mySubject.length) < 3) {
        document.getElementById("subject").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("subject").style.borderBottom = "2px solid green";
    }

}

function checkMessage() {
    var myMessage = document.getElementById('message').value;
    if ((myMessage.length) < 3) {
        document.getElementById("message").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("message").style.borderBottom = "2px solid green";
    }
}
