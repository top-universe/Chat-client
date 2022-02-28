const login = document.querySelector(".login");
const reglink = document.querySelector("#reg-toggle");
const loginPass = document.querySelector("#pass");
const loginUser = document.querySelector("#username");
const btnSend = document.querySelector(".btnlog");
const logError = document.querySelector(".loginError");

const register = document.querySelector(".reg");
const loginlink = document.querySelector("#login-toggle");



//login 
login.addEventListener('submit',(e) =>{
  e.preventDefault();
});
localStorage.setItem('username',"pope francis");
localStorage.setItem("password","user1234");

btnSend.addEventListener('click', () =>{
  if(loginUser.value ==="" || loginPass === ""){
    logError.textContent= "Invalid Input";
    logError.classList.add('errorMsg');
  }else{
    let appUser = localStorage.getItem('username');
    let userPass = localStorage.getItem('password');

    if(loginUser.value.toLowerCase() === appUser.toLocaleLowerCase() && loginPass.value.toLocaleLowerCase()===
      userPass.toLocaleLowerCase()){
        alert("you're loggedIn!");
        location.assign('/chat.html');
      }else{
        logError.classList.add('erroMsg');
        logError.textContent="Invalid username and password."
      }
    
  }
});


register.addEventListener('submit',(e) =>{
  e.preventDefault();
})


reglink.addEventListener('click',() =>{
  login.classList.add('hide');
  register.classList.remove('hide');
});
loginlink.addEventListener('click',() =>{
  register.classList.add('hide');
  login.classList.remove('hide');
});

//session and localstorage 
