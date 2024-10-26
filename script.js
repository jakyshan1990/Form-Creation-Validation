
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
const massages=[];
let isVaild = true;


        if(userinput.length<3){isVaild=false;
            massages.push("user name too low");
        }
        if(eminput.includes("@"&&".")==false){
            isVaild=false;
            massages.push("missing @ or dot");
        }
        if(passinput.length<8){
            isVaild=false;
            massages.push("pass too low");
        }

feedbackDiv.style.display = 'block';
if (isVaild == true) {
  feedbackDiv.textContent = 'Registration successful!';
  feedbackDiv.style.color = '#28a745';
} else if (isVaild == false) {
  massages.push ('<br>');
  feedbackDiv.innerHTML = massages;
  feedbackDiv.style.color = '#dc3545';
}

});



});