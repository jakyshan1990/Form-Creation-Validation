
document.addEventListener("DOMContentLoaded",(event) => {

    const form=document.getElementById("registration-form");
    const feedbackDiv=document.getElementById("form-feedback");

    form.addEventListener("submit",function(event){
        event.preventDefault();
        const username=document.getElementById("username");
        const userinput=username.value.trim;
        const email=document.getElementById("email");
        const eminput=email.value.trim;
        const password=document.getElementById("password");
        const passinput=password.value.trim;  
        let isVaild=true;
        let massages=[0];


        if(userinput.length<3){isVaild=false;
            massages=["user name too low",...massages];
        }
        if(eminput.includes("@",".")==false){
            isVaild=false;
            massages=["missing @ or dot",...massages];
        }
        if(passinput<8){
            isVaild=false;
            massages=["pass too low",...massages];
        }

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

    });

});