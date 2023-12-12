let hamburger = document.querySelector(".ham");
let navlist = document.querySelector(".nav-list");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
})

// navigation bar scroll script 
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


//                      COUNTRY CODE AND FLAGS SCRIPT

// Handle international prefixes, format phone input field
// Uses intl-tel-input plugin
const moblNoInputField = document.querySelector("#moblNo");
const moblNoInput = window.intlTelInput(moblNoInputField, {
  // https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  preferredCountries: ["lk", "us", "gb", "in"],
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
});

// Function to process the form submission
function processForm(event) {
  event.preventDefault();

  const phoneNumber = moblNoInput.getNumber();

  // Display the phone number in E.164 format
  // You can replace this with your own logic to handle the phone number
  console.log(`Phone number in E.164 format: ${phoneNumber}`);
}

// Add an event listener to the form that contains your input field
document.querySelector("#moblNo").form.addEventListener("submit", processForm);



// This file listens for changes in localStorage and updates the table accordingly

// Function to update the table with values from localStorage
function updateTableFromStorage() {
    const hotelCost = localStorage.getItem('hotelBookingTotalCost');
    const adventureCost = localStorage.getItem('adventureBookingTotalCost');
    const totalCost = localStorage.getItem("totalCost");

    

    // Update the table with the retrieved values
    const overallSummaryTable = document.getElementById("overallSummaryTable");
    overallSummaryTable.innerHTML = `
        <tr>
            <th>Your Booking Summary</th>
            <th>Charges</th>
        </tr>
        <tr>
            <td>Hotel Booking Total Cost</td>
            <td>LKR ${hotelCost}</td>     
        </tr>
        <tr>
            <td>Adventure Booking Total Cost</td>
            <td>LKR ${adventureCost}</td>
        </tr>
        <tr>
            <th>Total Cost</th>
            <th>LKR ${totalCost}</th>
        </tr>`;

        // Update the amount span with the total cost
        const amountSpan = document.getElementById("amount");
        amountSpan.textContent = `LKR ${totalCost}`;
}

// Listen for changes in localStorage
window.addEventListener('storage', (event) => {
    if (event.key === 'hotelBookingTotalCost' || event.key === 'adventureBookingTotalCost' || event.key === 'totalCost') {
        updateTableFromStorage();
    }
});

// Call the function to initialize the table
updateTableFromStorage();



// // Getting References to the input fields
// const form = document.querySelector("form");
// const fNameInput = document.getElementById("fName");
// const mobNoInput = document.getElementById("moblNo");
// const emailInput = document.getElementById("email");
// const cardNoInput = document.getElementById("cardNumber");
// const expiryDateInput = document.getElementById("expiryDate");
// const cvvInput = document.getElementById("cvc-cvv");
// const nameOnCardInput = document.getElementById("cardName");
// const payBtn = document.getElementById("payButton");

// // // Adding event listeners to the input fields for validation 
// // fNameInput.addEventListener("input", validateFullName);
// // mobNoInput.addEventListener("input", validateMobile);
// // emailInput.addEventListener("input", validateEmail);


// // Adding event listener to the form for overall validation
// const detailsForm = document.getElementById("detailsForm");
// // detailsForm.addEventListener("input", checkFormValidity);

// detailsForm.addEventListener("input", function() {
//     checkFormValidity();
// })

// fNameInput.addEventListener("input", function() {
//     validateFullName();
// });

// moblNoInput.addEventListener("input", function() {
//     validateMobile();
// });

// emailInput.addEventListener("input", function() {
//     validateEmail();
// });

// cardNoInput.addEventListener("input", function() {
//     validateCardNumber();
// });

// expiryDateInput.addEventListener("input", function() {
//     validateExpiryDate();
// });

// cvvInput.addEventListener("input", function() {
//     validateCVC();
// });

// nameOnCardInput.addEventListener("input", function() {
//     validateCardName();
// });


// payBtn.addEventListener("click", function(event) {
//     event.preventDefault(); 

//     //Performing the validations when the button is clicked
//     validateFullName();
//     validateMobile();
//     validateEmail();
//     checkFormValidity();
//     validateCardNumber();
//     validateExpiryDate();
//     validateCVC();
//     validateCardName();

//     //Checking if any validation errors exist
//     if (!isFormValid()) 
//     {
//         return; //Don't proceed if there are errors
//     } 
//     else 
//     {
//     //Saving the form data as an array in local storage
//     const formData = {
//     fullName: fNameInput.value.trim(),
//     mobileNumber: iti.getNumber(),
//     email: emailInput.value.trim(),

//     };

//     localStorage.setItem("formData", JSON.stringify(formData));
    
//     //Redirect the user to the Payment page
//     window.location.href = "payment.html";
//     }
// });


// //Function to validate the full name
// function validateFullName() 
// {
//   //Getting references to the elements
//   const fullNameInput = document.getElementById("fName");
//   const fullNameError = document.getElementById("fNameError");
//   const fullNameValue = fullNameInput.value.trim();

//   //Regular expression to allow only letters and spaces
//   const fullNamePattern = /^[A-Za-z\s]+$/; 

//   if (fullNameValue === "") 
//   {
//     fullNameError.textContent = "Please add the full name"; //Displaying error message
//     fullNameInput.classList.add("error-border");
//   } 
//   else if (!fullNamePattern.test(fullNameValue)) 
//   {
//     fullNameError.textContent = "Full name can only contain letters and spaces"; //Displaying error message
//     fullNameInput.classList.add("error-border");
//   } 
//   else 
//   {
//     fullNameError.textContent = "";  //Remove error message
//     fullNameInput.classList.remove("error-border");
//   }
    
//   checkFormValidity();
// }


// //Function to validate the mobile number input
// function validateMobile() 
// {
//   //Getting references to elements
//   const mobileInput = document.getElementById("moblNo");
//   const mobileError = document.getElementById("moblError");
//   const mobileValue = mobileInput.value.trim();

//   if (!iti.isValidNumber()) 
//   {
//     mobileError.textContent = "Add a valid mobile number";  //Displaying error message
//     mobileInput.classList.add("error-border");
//   } 
//   else 
//   {
//     mobileError.textContent = "";  //Remove error message
//     mobileInput.classList.remove("error-border");
//   }

//   checkFormValidity();
// }


// //Function to check the validity of the email
// function validateEmail() 
// {
//   //Getting references to elements
//   const emailInput = document.getElementById("email");
//   const emailError = document.getElementById("emailError");
//   const emailValue = emailInput.value.trim();

//   //Regular expression pattern to validate the email addresse
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (!emailPattern.test(emailValue)) 
//   {
//     emailError.textContent = "Add a valid email ID"; //Displaying error message
//     emailInput.classList.add("error-border");
//   } 
//   else 
//   {
//     emailError.textContent = "";  //Remove error message
//     emailInput.classList.remove("error-border");
//   }

//   checkFormValidity();
// }






// // Functions to validate card number
// function validateCardNumber() {
//     // Getting refereneces to elements
//     const cardNumber = cardNoInput.value.replace(/\s/g, "");
//     const isValid = /^\{16}$/.test(cardNumber);

//     // Set the validations
//     setValidationStatus(cardNoInput, isValid, "Incomplete field!");
//     return isValid;
// }

// // Functions to validate the expiry date
// function validateExpiryDate() {
//     // Getting references to elements
//     const expiryDate = expiryDateInput.value;
//     const [month, year] = expiryDate.split(" / ");
//     const currenDate = new Date();
//     const enteredDate = new Date(`20${year}, month -1`);

//     let isValid = /^\d{2} \/ \d{2}$/.test(expiryDate);
//     if (isValid) {
//         isValid =enteredDate >= currenDate;
//     }

//     setValidationStatus(
//         expiryDateInput,
//         isValid,
//         isValid ? "" : (enteredDate < currenDate ? "Card too old" : "Incomplete field")
//     );

//     $(document).ready(function () {
//         $("expiryDate").inputmask("99/99");
//     });

//     return isValid;
// }


// // Function to check the validity of the cvv number 
// function validateCVC() {
//     // Getting references to elements
//     const cvc = cvvInput.value;

//     // set validation
//     const isValid = /^\d{3}$/.test(cvc);
//     setValidationStatus(cvvInput, isValid, "Incomplete field!");
//     return isValid;
// }

// //Function to check the validity of the name on card field
// function validateCardName() 
// {
//   //Getting references to elements
//   const name = nameOnCardInput.value;

//   //Set validations
//   const isValid = /^[a-zA-Z\s]+$/.test(name);
//   setValidationStatus(
//     nameInput,
//     isValid,
//     isValid ? "" : "Name contains invalid characters"
//   );
//   return isValid;
// }




// //Function to check validations and add error messages and highlight the border
// function setValidationStatus(input, isValid, errorMessage) {
//     if (isValid) {
//         input.classList.remove("error");
//         input.classList.remove("error-border");
//         input.nextElementSibling.textContent = "";
//         payBtn.disabled = false;
//     } else {
//         input.classList.add("error");
//         input.classList.add("error-border"); //Add the error-border class
//         input.nextElementSibling.textContent = errorMessage;
//         payBtn.disabled = true;
//     }
// }




// // Adding event listeners to submit the card details
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     if (validateCardNumber() && validateExpiryDate() && validateCVC() && validateCardName()) {
//         window.location.href = "confirmation.html"; // get into confirmation.html
//     }
// });




// Getting References to the input fields
const form = document.querySelector("form");
const fNameInput = document.getElementById("fName");
const mobNoInput = document.getElementById("moblNo");
const emailInput = document.getElementById("email");
const cardNoInput = document.getElementById("cardNumber");
const expiryDateInput = document.getElementById("expiryDate");
const cvvInput = document.getElementById("cvc-cvv");
const nameOnCardInput = document.getElementById("cardName");
const payBtn = document.getElementById("payButton");

// Function to validate the full name
function validateFullName() {
    const fullNameError = document.getElementById("fNameError");
    const fullNamePattern = /^[A-Za-z\s]+$/;
    const isValid = fullNamePattern.test(fNameInput.value.trim());
    setValidationStatus(fNameInput, isValid, "Full name can only contain letters and spaces");
}

// Function to validate the mobile number input
function validateMobile() {
    const mobileError = document.getElementById("moblError");
    const mobilePattern = /^\d{3}-\d{3}-\d{4}$/;
    const isValid = mobilePattern.test(mobNoInput.value.trim());
    setValidationStatus(mobNoInput, isValid, "Invalid mobile number format");
}

// Function to check the validity of the email
function validateEmail() {
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(emailInput.value.trim());
    setValidationStatus(emailInput, isValid, "Invalid email address");
}

// Function to validate card number
function validateCardNumber() {
    const cardNumberPattern = /^\d{16}$/;
    const isValid = cardNumberPattern.test(cardNoInput.value.replace(/\s/g, ""));
    setValidationStatus(cardNoInput, isValid, "Card number must be 16 digits");
}

// Function to validate the expiry date
function validateExpiryDate() {
    const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    const isValid = expiryDatePattern.test(expiryDateInput.value.trim());
    setValidationStatus(expiryDateInput, isValid, "Invalid expiry date format");
}

// Function to check the validity of the cvv number
function validateCVC() {
    const cvcPattern = /^\d{3}$/;
    const isValid = cvcPattern.test(cvvInput.value.trim());
    setValidationStatus(cvvInput, isValid, "CVC must be 3 digits");
}

// Function to check the validity of the name on card field
function validateCardName() {
    const namePattern = /^[a-zA-Z\s]+$/;
    const isValid = namePattern.test(nameOnCardInput.value.trim());
    setValidationStatus(nameOnCardInput, isValid, "Name contains invalid characters");
}

// Function to check validations and add error messages and highlight the border
function setValidationStatus(input, isValid, errorMessage) {
    // Find the error message element, which might not be the next sibling
    const errorElement = document.getElementById(input.id + "Error");
    if (errorElement) {
        if (isValid) {
            input.classList.remove("error-border");
            errorElement.textContent = "";
        } else {
            input.classList.add("error-border");
            errorElement.textContent = errorMessage;
        }
    } else {
        console.error("Error element not found for input: " + input.id);
    }
    checkFormValidity();
}

// Function to check overall form validity and enable/disable the pay button
function checkFormValidity() {
    const isValid = fNameInput.checkValidity() && mobNoInput.checkValidity() &&
                    emailInput.checkValidity() && cardNoInput.checkValidity() &&
                    expiryDateInput.checkValidity() && cvvInput.checkValidity() &&
                    nameOnCardInput.checkValidity();
    payBtn.disabled = !isValid;
}

// Adding event listeners to the input fields for validation
fNameInput.addEventListener("input", validateFullName);
mobNoInput.addEventListener("input", validateMobile);
emailInput.addEventListener("input", validateEmail);
cardNoInput.addEventListener("input", validateCardNumber);
expiryDateInput.addEventListener("input", validateExpiryDate);
cvvInput.addEventListener("input", validateCVC);
nameOnCardInput.addEventListener("input", validateCardName);


// Adding event listener to the form for overall validation
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (checkFormValidity()) {

        // Save user input values to localStorage
        localStorage.setItem('userFullName', fNameInput.value.trim());
        localStorage.setItem('userMobileNumber', mobNoInput.value.trim());
        localStorage.setItem('userEmail', emailInput.value.trim());

        // Perform any additional actions before redirecting
        window.location.href = "confirmation.html";
    }
});

// Initial call to set the form to its default valid state
checkFormValidity();


