
document.addEventListener("DOMContentLoaded",(event) => {

    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");

let isVaild = true;
let massages = [];



    form.addEventListener("submit",function(event){
        event.preventDefault();
        
        const username = document.getElementById ('username').value;
const userinput = username.trim ();
const email = document.getElementById ('email').value;
const eminput = email.trim ();
const password = document.getElementById ('password').value;
const passinput = password.trim ();



        if(userinput.length<3){isVaild=false;
            massages=["user name too low",...massages];
        }
        if(eminput.includes("@",".")==false){
            isVaild=false;
            massages=["missing @ or dot",...massages];
        }
        if(passinput.length<8){
            isVaild=false;
            massages=["pass too low",...massages];
        }

        display();
    });


    function display(){
        feedbackDiv.style.display="block";
        if(isVaild==true){
            feedbackDiv.textContent="Registration successful!";
            feedbackDiv.style.color="#28a745";
        }
        else if(isVaild==false){
            massages=["<br>",...massages];
            feedbackDiv.innerHTML=massages;
            feedbackDiv.style.color="#dc3545";
        }

    }
});