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
btnSend.addEventListener('click', () =>{
  if(loginUser.value ==="" || loginPass === ""){
    logError.textContent= "Invalid Input";
    logError.classList.add('errorMsg');
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
})