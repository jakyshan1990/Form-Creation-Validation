async function fetchUserData() {
    const apiUrl="https://jsonplaceholder.typicode.com/users";
    const dataContainer=document.getElementById("api-data");
 try {
const response= await fetch(apiUrl);  
const users=await response.json();

dataContainer.innerHTML='';
const userList=document.createElement("ul"); 

users.forEach((elmnt) => {
const usr=document.createElement("li");
usr.textContent=elmnt;
userList.appendChild(usr);
}); 

dataContainer.append(userList);
 } catch (error) {
    
 }
    


}