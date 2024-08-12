// contact btn
let LoginForm = document.getElementById('LoginForm');
LoginForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let Username = document.getElementById('Username');
    let Email = document.getElementById('Email');
    let Phonenumber = document.getElementById('Phonenumber');
    let Message = document.getElementById('Message');

    if(Username.value=="" || Email.value=="" || Phonenumber.value=="" || Message.value==""){
        alert("empty fields");
    }
    else{
        alert("message sent");
        console.log(`this message is from ${Username.value} email ${Email.value} phone ${Phonenumber.value} and message is ${Message.value}`);

        Username.value="";
        Email.value="";
        Phonenumber.value="";
        Message.value="";
    }
});

let shirtquantity = document.getElementsByClassName('shirt-quantity-button');
console.log(shirtquantity);

let shirtsize = document.getElementsByClassName('shirt-size-button');
console.log(shirtsize);

function cartfunction(i){
    console.log(shirtquantity[i].value);
    console.log(shirtsize[i].value);
    alert(`${shirtquantity[i].value} ${shirtsize[i].value} shirt added to cart`);
}