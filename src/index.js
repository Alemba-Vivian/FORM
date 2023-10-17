import './Styles/style.css';

window.addEventListener('DOMContentLoaded', ()=>{

// DOM ELEMENTS
//referencing the elements with their relevant selcetors
const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const ZIP = document.getElementById("ZIP");
const country = document.getElementById("country");
const state = document.getElementById("state");
const phoneCode = document.getElementById("phoneCode");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");



//GETTING THE VALUES FROM THE INPUT AND STORING IN VARIABLES
const firstNameInputField = firstName.value;
const lastNameInputField = lastName.value;
const emailInputField = email.value;
const zipInputField = ZIP.value;
const countryInputField = country.value;
const stateInputField = state.value;
const codeInputField = phoneCode.value;
const numberInputField = phoneNumber.value;
const passwordInputField = password.value;
const confirmPassInputField = confirmPassword.value;


//when the button is clicked we listen to submit event
form.addEventListener("submit", (e)=>{
    e.preventDefault(e);
    checkError();
   
  
});

function checkError(){
    if((firstNameInputField === "" )||
   ( lastNameInputField === "" )||
   ( emailInputField === "") ||
    zipInputField === "" ||
  //   countryInputField === "" ||
  //   stateInputField === "" ||
  //   codeInputField === "" ||
   ( numberInputField === "") ||
    (passwordInputField === "") ||
    (confirmPassInputField === ""))
    {
        alert("please input fields");
    }else{
        console.log(firstNameInputField);
      alert("submitted correctly");
    }
   
}


});

//write a function that checks if the field inputs are empty
//if the inputs is empty, show the relavant error messages to the user so that the user
// user can in put those fields
//check relavant format the user should follow while writing in the fields
//listen to the input events, whenever the user type in the fields
//allow inline form validation as the user continues to write in the fields
