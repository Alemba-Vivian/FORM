import './Styles/style.css';

    const validateForm =formSelector=>{
        const formElement = document.querySelector(formSelector);
         

        formElement.setAttribute('novalidate', '');


        Array.from(formElement.elements).forEach(element=>{
          element.addEventListener('blue', event=>{
            validateSingleFormGroup(event.srcElement);
          })
        })
        

        formElement.addEventListener('submit', (event)=>{
            event.preventDefault();
            validateAllFormGroups(formElement);

        });
    }


    const validateSingleFormGroup=formGroup=>{
        const validationOptions =[
            {
                attribute:'minlength',
                isValid:input => input.value && input.value.length >=parseInt(input.minLength, 10),
                errorMessage:(input, label) => `${label.textContent} needs to be at least ${input.minLength} characters`
            },
            {
                attribute:'pattern',
                isValid:input=>{
                  const patternRegex = new RegExp(input.pattern);
                  return patternRegex.test(input.value);
                },
                errorMessage:(input, label) => `Not a valid ${label.textContent}`

            },
            {
               attribute:'match',
               isValid: input=>{
                 const matchSelector = input.getAttribute('match');
                 const matchedElement =document.querySelector(`#${matchSelector}`);
                 return matchedElement && matchedElement.value.trim() === input.value.trim();
               },
               errorMessage:(input, label)=>{
                const matchSelector = input.getAttribute('match');
                const matchedElement =document.querySelector(`#${matchSelector}`);

                const matchedLabel = matchedElement.parentElement.parentElement.querySelector('.mylabel');
                return `${label.textContent} should match ${matchedLabel.textContent}`;

               }

            },
            {
                attribute:'required',
                isValid: input => input.value.trim() !=='',
                errorMessage:(input, label) => `${label.textContent} is required`,
            },
           
        ]


        const label =formGroup.querySelector('.mylabel');
        const input = formGroup.querySelector('input, select');
        const errorContainer = formGroup.querySelector('.errorMessage');
        const errorIcon = formGroup.querySelector('.error-icon');
        const successIcon = formGroup.querySelector('.success-icon');


       
          let formGroupError = false;
          for (const option of validationOptions) {
            if (
              input.hasAttribute(option.attribute) &&
              !option.isValid(input)
            ) {
              errorContainer.textContent = option.errorMessage(input, label);
              input.classList.add("border-red");
              input.classList.remove("border-green");
              errorIcon.style.display ="inline-block";
              successIcon.style.display ="none";
              formGroupError = true;
            }
          }
          if(!formGroupError){
            errorContainer.textContent = '';
            input.classList.add("border-green");
            input.classList.remove("border-red");
            successIcon.style.display ="block";
            errorIcon.style.display ="none";
          }
         
            

    }


    const validateAllFormGroups=formToValidate=>{
        const formGroups = Array.from(formToValidate.querySelectorAll('.control'));
        formGroups.forEach((formGroup,index)=>{
            validateSingleFormGroup(formGroup);
         

        })

    }
    validateForm('#form');








// DOM ELEMENTS
//referencing the elements with their relevant selcetors
// const form = document.getElementById("form");
// const firstName = document.getElementById("firstName");
// const lastName = document.getElementById("lastName");
// const email = document.getElementById("email");
// const ZIP = document.getElementById("ZIP");
// const country = document.getElementById("country");
// const state = document.getElementById("state");
// const phoneCode = document.getElementById("phoneCode");
// const phoneNumber = document.getElementById("phoneNumber");
// const password = document.getElementById("password");
// const confirmPassword = document.getElementById("confirmPassword");



//GETTING THE VALUES FROM THE INPUT AND STORING IN VARIABLES
// const firstNameInputField = firstName.value;
// const lastNameInputField = lastName.value;
// const emailInputField = email.value;
// const zipInputField = ZIP.value;
// const countryInputField = country.value;
// const stateInputField = state.value;
// const codeInputField = phoneCode.value;
// const numberInputField = phoneNumber.value;
// const passwordInputField = password.value;
// const confirmPassInputField = confirmPassword.value;


//when the button is clicked we listen to submit event
// form.addEventListener("submit", (e)=>{
//     e.preventDefault(e);
//     checkError();
   
  
// });

// function checkError(){
//     if((firstNameInputField === "" )||
//    ( lastNameInputField === "" )||
//    ( emailInputField === "") ||
//     zipInputField === "" ||
//   //   countryInputField === "" ||
//   //   stateInputField === "" ||
//   //   codeInputField === "" ||
//    ( numberInputField === "") ||
//     (passwordInputField === "") ||
//     (confirmPassInputField === ""))
//     {
//         alert("please input fields");
//     }else{
//         console.log(firstNameInputField);
//       alert("submitted correctly");
//     }
   
// }




//write a function that checks if the field inputs are empty
//if the inputs is empty, show the relavant error messages to the user so that the user
// user can in put those fields
//check relavant format the user should follow while writing in the fields
//listen to the input events, whenever the user type in the fields
//allow inline form validation as the user continues to write in the fields
