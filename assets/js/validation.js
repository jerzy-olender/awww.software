function myfunction() {
    var myname = document.getElementById('name').value;
    var myemail = document.getElementById('email').value;
    var myphone = document.getElementById('phone').value;
    var mysubject = document.getElementById('subject').value;
    var mymessage = document.getElementById('message').value;

    if ((myname.length) < 3) {
        document.getElementById("name").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("name").style.borderBottom = "2px solid green";
    }

    if ((mysubject.length) < 3) {
        document.getElementById("subject").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("subject").style.borderBottom = "2px solid green";
    }

    if ((mymessage.length) < 3) {
        document.getElementById("message").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("message").style.borderBottom = "2px solid green";
    }

    if ((myemail.charAt(0) == '@') || (myemail.charAt(myemail.length - 1)) == '@') {
        document.getElementById("email").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("email").style.borderBottom = "2px solid green";
    }

    if (isNaN(myphone) || (myphone.length) < 9) {
        document.getElementById("phone").style.borderBottom = "2px solid red";
    } else {
        document.getElementById("phone").style.borderBottom = "2px solid green";
    }

}
