const emailform = document.querySelector('#email-form');
const input = document.querySelector('#email-address');
const errMsg = document.querySelector('#err-msg');
const feedback=document.querySelector('#Feedback');


//Email Validation
function ValidateEmail(mail) {
    var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    return !!pattern.test(mail);
}

function emailValid(e) {
    e.preventDefault();
    emailInput = input.value;
    if (emailInput === '') {
        errMsg.innerHTML = 'Valid email required';
        input.classList.add("border-Tomato");
    } else if (!ValidateEmail(input.value)) {
        errMsg.innerHTML = 'Valid email required';
        input.classList.add("border-Tomato");
    }else  {
       const MyWindow= window.open("./feedback.html", "MyWindow");
    }
}

function dismissBtn(){
   console.log('True');
}

emailform.addEventListener('submit', emailValid);
