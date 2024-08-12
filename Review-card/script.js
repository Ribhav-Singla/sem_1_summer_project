// alert("Sign Up Page");
let signupform = document.getElementById('signupform');
signupform.addEventListener("submit", (e) => {
    e.preventDefault();
    let FullName = document.getElementById('FullName');
    let Image = document.getElementById('Image');
    let Satisfy = document.getElementById('Satisfy');
    let Review = document.getElementById('Review');

    if (FullName.value == '' || Image.value == '' || Review.value=='' ) {
        alert("empty fields");
    }
    else {
        alert("submitted!");
        console.log(`This form has a username of ${FullName.value} and ${Review.value}`);
        FullName.value = "";
        Image.value = "";
        Satisfy.value = "";
        Review.value = "";
    }
});

// satisfy value
function display_value(a){    
    // console.log(a);
    document.getElementById('value').innerHTML=a;
}