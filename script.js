
document.addEventListener("DOMContentLoaded",(event) => {

    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");





    form.addEventListener("submit",function(event){
        event.preventDefault();
        
const username = document.getElementById ('username').value;
const userinput = username.trim ();
const email = document.getElementById ('email').value;
const eminput = email.trim ();
const password = document.getElementById ('password').value;
const passinput = password.trim ();
const messages=[];
let isValid = true;


        if(userinput.length<3){isValid=false;
            messages.push("user name too low");
        }
        if(eminput.includes("@"&&".")==false){
            isValid=false;
            messages.push("missing @ or dot");
        }
        if(passinput.length<8){
            isValid=false;
            messages.push("pass too low");
        }

feedbackDiv.style.display = 'block';
if (isValid === true) {
  feedbackDiv.textContent = 'Registration successful!';
  feedbackDiv.style.color = '#28a745';
} else if (isValid === false) {
  messages.push ('<br>');
  feedbackDiv.innerHTML = messages;
  feedbackDiv.style.color = '#dc3545';
}

});



});