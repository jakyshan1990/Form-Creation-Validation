
document.addEventListener("DOMContentLoaded",(event) => {

    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");





    form.addEventListener("submit",function(event){
        event.preventDefault();
        
const userinput = document.getElementById ('username').value;
const username = userinput.trim ();
const eminput = document.getElementById ('email').value;
const email = eminput.trim ();
const passinput = document.getElementById ('password').value;
const password = passinput.trim ();
const messages=[];
let isValid = true;


        if(username.length<3){isValid=false;
            messages.push("user name too low");
        }
        if(email.includes("@"&&".")==false){
            isValid=false;
            messages.push("missing @ or dot");
        }
        if(password.length<8){
            isValid=false;
            messages.push("pass too low");
        }

feedbackDiv.style.display = 'block';
if (isValid === true) {
  feedbackDiv.textContent = 'Registration successful!';
  feedbackDiv.style.color = '#28a745';
} else if (isValid === false) {
  messages.join ('<br>');
  feedbackDiv.innerHTML = messages;
  feedbackDiv.style.color = '#dc3545';
}

});



});