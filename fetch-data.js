async function fetchUserData() {
    const apiUrl="https://jsonplaceholder.typicode.com/users";
    const dataContainer=document.getElementById("api-data");
 
    try {
const response= await fetch(apiUrl);  
const users=await response.json();

dataContainer.innerHTML='';
const userList=document.createElement("ul"); 

users.forEach(myfunction);
function myfunction(item){
    const usr=document.createElement("li");
    usr.textContent=item;
    userList.append(usr);
} 

dataContainer.append(userList);
 } catch (error) {
    dataContainer.innerHTML='';
    dataContainer.textContent="Failed to load user data.";
    
 }
    


}