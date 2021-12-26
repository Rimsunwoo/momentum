
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_LOCAL =  "username"

function onLoginSubmit(event) {
  event.preventDefault();
  const username_input = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_LOCAL, username_input);
  paintGreetings();
}



function paintGreetings() {
  const username = localStorage.getItem(USERNAME_LOCAL)
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_LOCAL)

if( savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
 } else {
         paintGreetings();
 }




