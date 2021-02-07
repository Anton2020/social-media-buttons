function signUpFunc() {
let name = prompt("What is your name?")
prompt("What is your email address?")
alert ("Thank you, "+ name + ". We'll be in touch! 🌻 ") 
}
let signUpp = document.querySelector(".signUp")
signUpp.addEventListener("click", signUpFunc)
