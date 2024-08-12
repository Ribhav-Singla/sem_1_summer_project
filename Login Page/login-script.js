// alert("Sign Up Page");
let signupform = document.getElementById('signupform');
signupform.addEventListener("submit", (e) => {
    e.preventDefault();
    let FullName = document.getElementById('FullName');
    let YourEmail = document.getElementById('YourEmail');
    let YourNewPassword = document.getElementById('YourNewPassword');

    if ((FullName.value == '' || YourEmail.value == '' || YourNewPassword.value == '')) {
        alert("empty fields");
    }
    else {
        alert("This form has been successfully submitted!");
        console.log('This form has a username of ${FullName.value} , email ${YourEmail.value} and password of ${YourNewPassword.value}');
        FullName.value = "";
        YourEmail.value = "";
        YourNewPassword.value = "";
    }
});

