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



//If The User Refresh The page clearing function
window.onload = function() {
    //Select All Input Elements
    const inputs = document.querySelectorAll("input");
    const selects = document.querySelectorAll("select");
    const checks = document.querySelectorAll('input[type="checkbox"]');

    const htlTables = document.getElementById("bookingSummaryTable");
    const advTables = document.getElementById("currentBookingSummaryTable");

    const crntHtlBookingCost = document.getElementById("currentHotelBookingCost");
    const crntAdvBookingCost = document.getElementById("currentAdventureCost");
    const smryTable = document.getElementById("overallSummaryTable");


        
    const addBtn = document.querySelector(".add");
    const deductBtn = document.querySelector(".deduct");
    const inputField = document.querySelectorAll("input")

    addBtn.addEventListener("click", function() {
        inputField.value = parseInt(inputField.value, 10) + 1;
    });

    deductBtn.addEventListener("click", function() {
        let currentValue = parseInt(inputField.value, 10);
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
        }
    });

    // const clrBtn = document.getElementById("clearFavBtn");
    // const ttlHtlBkngCost = document.getElementById("totalHotelBooking");
    // const ttlAdvBkngCost = document.getElementById("totalAdventureBooking");
    
    // const smryTable = document.getElementById("overallSummaryTable");

    checks.forEach(function(checkbox) {
        checkbox.checked = false;
    });
    // Iterate each input elements and clear its value
    inputs.forEach(input => {
        input.value = "";
    });
    selects.forEach(input => {
        input.value = "";
    });
    // Clear the Hotel Booking Table Elemets
    htlTables.innerHTML = "";
    advTables.innerHTML = "";
    // Clear the cost text
    crntHtlBookingCost.innerHTML = "";
    crntAdvBookingCost.innerHTML = "";
    smryTable.innerHTML = "";

};




//GETTING REFERENCES TO HOTEL BOOKING INTERACTIVE ELEMENTS
const hotelSelect = document.getElementById("slctHotels");
const checkInDate = document.getElementById("checkInDate")
const checkOutDate = document.getElementById("checkOutDate");
const numOfSingleRooms = document.getElementById("numOfSingleRooms");
const numOfDoubleRooms = document.getElementById("numOfDoubleRooms");
const numofTripleRooms = document.getElementById("numOfTripleRooms");
const numOfAdults = document.getElementById("adults");
const numOfChild = document.getElementById("child");
const numOfExtraBed = document.getElementById("numOfExtraBed");
const numOfExtraMeals = document.getElementById("numOfExtraMeals");
const checkBoxWiFi = document.getElementById("wifi");
const checkBoxPoolView = document.getElementById("poolView");
const checkBoxGardenView = document.getElementById("gardenView");
const promoCode = document.getElementById("promoCode");
const btnLoyality = document.getElementById("loyality");
const btnBookingNow = document.getElementById("bookingNow");


//Getting refrence to the Current Hotel Booking table
const currentHotelBookingSummaryTable = document.getElementById("bookingSummaryTable");

const discountText = document.getElementById("currentHotelBookingDiscountPrice");

const hotelBookingForm = document.querySelectorAll("#bookingForm input");


// Assuming hotelBookingForm is a collection of input elements
hotelBookingForm.forEach(input => { 
    input.addEventListener("input", currentHotelBooking);
}); 

// Assuming hotelSelect is a reference to select element
hotelSelect.addEventListener("change", currentHotelBooking);

function currentHotelBooking() {
    let tableContent = `
                        <tr>
                            <th>Categories</th>
                            <th>Details/Quantity</th>
                        </tr> `;
    
    // Check if the the hotelSelect value is not empty
    if (hotelSelect.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td> Your Hotel/Resort </td>
                            <td>${hotelSelect.value}</td>
                        </tr>`;
    }


    // Check if the the checkInDate value is not empty
    if (checkInDate.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Check In Date </td>
                        <td>${checkInDate.value}</td>
                        </tr>`;
    }


    //Check if the the checkOutDate value is not empty
    if (checkOutDate.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Check Out Date </td>
                        <td>${checkOutDate.value}</td>
                        </tr>`;
    }
    //Check if the the Number of Single Rooms value is not empty
    if (numOfSingleRooms.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Single Rooms </td>
                        <td>${numOfSingleRooms.value}</td>
                        </tr>`;
    }
    //Check if the the Number of Double Rooms value is not empty
    if (numOfDoubleRooms.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Double Rooms </td>
                        <td>${numOfDoubleRooms.value}</td>
                        </tr>`;
    }
    //Check if the the Number of Triple Rooms value is not empty
    if (numofTripleRooms.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Triple Rooms </td>
                        <td>${numofTripleRooms.value}</td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (numOfAdults.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Adults </td>
                        <td>${numOfAdults.value}</td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (numOfChild.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Child </td>
                        <td>${numOfChild.value}</td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (numOfExtraBed.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Extra Bed </td>
                        <td>${numOfExtraBed.value}</td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (numOfExtraMeals.value.trim() !== "") {
        tableContent += `
                        <tr>
                        <td> Extra Meals </td>
                        <td>${numOfExtraMeals.value}</td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (checkBoxWiFi.checked) {
        tableContent += `
                        <tr>
                        <td> WiFi </td>
                        <td><i class="material-symbols-outlined">
                        check
                        </i></td>
                        </tr>`;
    }
    //Check if the the checkOutDate value is not empty
    if (checkBoxPoolView.checked) {
        tableContent += `
                        <tr>
                        <td> Pool View </td>
                        <td><i class="material-symbols-outlined">
                        check
                        </i></td>
                        </tr>`;
    }
    if (checkBoxGardenView.checked) {
        tableContent += `
                        <tr>
                        <td> Garden View </td>
                        <td><i class="material-symbols-outlined">
                        check
                        </i></td>
                        </tr>`;
    }
    if (promoCode.value.trim() !== "" ) {
        tableContent += `
                        <tr>
                        <td> Promo Code </td>
                        <td>${promoCode.value}</td>
                        </tr>`;
    };

    // Update the innerHTML of the Summary Table
    currentHotelBookingSummaryTable.innerHTML = tableContent;
}   



//                  HOTEL BOOKING CALCULATIONS

// Prices and Discount Rate
const singleRoomPrice = 25000.00;
const doubleRoomPrice = 35000.00;
const TripleRoomPrice = 40000.00;
const kidsExtraForMealsPrice = 5000.00;
const extraBedPrice = 8000.00;
const discountRate = 0.05; // 5% discount
const validPromoCode = "Promo123"; // The valid Promo Code

// Event listener for inputs and Promo Code
document.querySelectorAll('.booking-details input[type="number"], input [type="text"]').forEach(input => {
    input.addEventListener("input", updateBookingCost);
});

document.getElementById("promoCode").addEventListener("keyup", updateBookingCost)


// Function to calculate and update the booking cost
function updateBookingCost() {
    const numberOfSingleRooms = parseInt(document.getElementById("numOfSingleRooms").value) || 0; // || 0 ; This ensures that parseInt() always has a valid string to parse.
    const numberOfDoubleRooms = parseInt(document.getElementById("numOfDoubleRooms").value) || 0;
    const numberOfTripleRooms = parseInt(document.getElementById("numOfTripleRooms").value) || 0;
    const numberOfExtraBed = parseInt(document.getElementById("numOfExtraBed").value) || 0;
    const numberOfKidsExtraMeals = parseInt(document.getElementById("numOfExtraMeals").value) || 0;
    

    const enteredPromoCode = document.getElementById("promoCode").value;

    const promoCodeError = document.getElementById("promoCodeError"); // Element to Display Prom Code Error


    let currentTotalCost = 0;
    let discountedPrice = null;

    // Calculate cost only for user Entered Inputs
    if (numberOfSingleRooms > 0) {
        currentTotalCost += numberOfSingleRooms * singleRoomPrice;
    }
    if (numberOfDoubleRooms > 0) {
        currentTotalCost += numberOfDoubleRooms * doubleRoomPrice;
    }
    if (numberOfTripleRooms > 0) {
        currentTotalCost += numberOfTripleRooms * TripleRoomPrice;
    }
    if (numberOfExtraBed > 0) {
        currentTotalCost += numberOfExtraBed * extraBedPrice;
    }
    if (numberOfKidsExtraMeals > 0) {
        currentTotalCost += numberOfKidsExtraMeals * kidsExtraForMealsPrice;
    }
    if (enteredPromoCode === validPromoCode) {
        discountedPrice = currentTotalCost - (currentTotalCost * discountRate);
    }




    // Apply Discount only if the entered promo code is valid
    if (enteredPromoCode === validPromoCode) {
        discountedPrice =  currentTotalCost - (currentTotalCost * discountRate);
        promoCodeError.textContent = ""; // Clear any previous error message
    } else if (enteredPromoCode.trim() !== "") {
        promoCodeError.textContent = "You have entered the wrong Promo Code"; // Display Error Message
        // currentTotalCost = currentTotalCost; // No Discount Applied
    } else {
        promoCodeError.textContent = ""; //Clear any Preveious Error Message
    }

    // Update the Display
    document.getElementById("currentHotelBookingCost").innerText = `Current Hotel Booking Cost: LKR ${currentTotalCost.toFixed(2)}`;

    if (enteredPromoCode.trim() === validPromoCode) {
        document.getElementById("currentHotelBookingDiscountPrice").innerText = `Current Hotel Booking Discounted Price: LKR ${discountedPrice.toFixed(2)}`; 
    }

}
// Initialize the booking cost display
updateBookingCost()

// document.addEventListener("DOMContentLoaded", updateBookingCost);



//                       ADVENTURE BOOKING SUMMARY TABLE UPDATING REAL TIME

//GETTING REFERENCES TO ADVENTURE BOOKING INTERACTIVE ELEMENTS
const adventureSelect = document.getElementById("slctAdventures");
const advNumOfLocalAdults = document.getElementById("advNumOfLocalAdults");
const advNumOfLocalKids = document.getElementById("advNumOfLocalKids");
const advNumOfForeignAdults = document.getElementById("advNumOfForeignAdults");
const advNumOfForeignKids = document.getElementById("advNumOfForeignKids");
const advAdultGuide = document.getElementById("advAdultGuide");
const advKidsGuide = document.getElementById("advKidsGuide");

// const guideChoices = document.getElementsByName("guide");

// Getting Reference to Adventure Form
const adventureBookingForm = document.querySelectorAll("#adventuresForm input");



//Getting refrence to the Current Adventure Booking table
const currentAdventureSummaryTable = document.getElementById("currentBookingSummaryTable");

// Adventure Booking Price
let divingForLocalAdults = 5000.00;
let divingForLocalKids = 2000.00;
let divingForForeignAdults = 10000.00; 
let divingForForeignKids = 5000.00;
let divingExtraGuideForAdultsPrice = 1000.00;
let divingExtraGuideForKidsPrice = 500.00;




// Assuming AdventureBookingForm is a collection of input elements
adventureBookingForm.forEach(input => { 
    input.addEventListener("input", currentAdventureBooking);
}); 

// Assuming hotelSelect is a reference to select element
adventureSelect.addEventListener("change", currentAdventureBooking);

// parseInt function to the integer user inputs
 


function currentAdventureBooking() {


    let tableContent = `
                        <tr>
                            <th>Categories</th>
                            <th>Charges</th>
                        </tr>`;
    
    // Check if the the hotelSelect value is not empty
    if (adventureSelect.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> Your Adventure Type </td>
                            <td class="currency-coloumn">${adventureSelect.value}</td>
                        </tr>`;
    }
    if (advNumOfLocalAdults.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> ${advNumOfLocalAdults.value} Local Adult</td>
                            <td class="currency-coloumn"> LKR ${divingForLocalAdults * advNumOfLocalAdults.value}</td>
                        </tr>`;
    }
    if (advNumOfLocalKids.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> ${advNumOfLocalKids.value} Local Kid</td>
                            <td class="currency-coloumn"> LKR ${divingForLocalKids * advNumOfLocalKids.value}</td>
                        </tr>`;
    }
    if (advNumOfForeignAdults.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> ${advNumOfForeignAdults.value} Foreign Adult </td>
                            <td class="currency-coloumn"> LKR ${divingForForeignAdults * advNumOfForeignAdults.value}</td>
                        </tr>`;
    }
    if (advNumOfForeignKids.value.trim() !== "") {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> ${advNumOfForeignKids.value} Foreign Kid </td>
                            <td class="currency-coloumn"> LKR ${divingForForeignKids * advNumOfForeignKids.value}</td>
                        </tr>`;
    }
    if (advAdultGuide.checked) {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> Guide for Adult </td>
                            <td class="currency-coloumn"> LKR ${divingExtraGuideForAdultsPrice * advAdultGuide.checked}</td>
                        </tr>`;
    }
    if (advKidsGuide.checked) {
        tableContent += `
                        <tr>
                            <td class="details-coloumn"> Guide for Kids </td>
                            <td class="currency-coloumn"> LKR ${divingExtraGuideForKidsPrice * advKidsGuide.checked}</td>
                        </tr>`;
    }

    // Update the innerHTML of the Summary Table
    currentAdventureSummaryTable.innerHTML = tableContent;
}   




//                       ADVENTURE BOOKING CALCULATION

// Event listener for inputs and Promo Code
document.querySelectorAll('.aventures-details input[type="number"], [type="checkbox"]').forEach(input => {
    input.addEventListener("input", updateAdventureCost);
});



function updateAdventureCost() {
    const numberOfLocalAdults = parseInt(advNumOfLocalAdults.value) || 0;
    const numberOfLocalKids = parseInt(advNumOfLocalKids.value) || 0;
    const numberOfForeinAdults = parseInt(advNumOfForeignAdults.value) || 0;
    const numberOfForeinKids = parseInt(advNumOfForeignKids.value) || 0;
    const numberOfExtraGuideForAdults = parseInt(advAdultGuide.value) || 0;
    const numberOfExtraGuideForKids = parseInt(advKidsGuide.value) || 0;

    

    let currentAdventureCost = 0;

    // Calculate cost only for user Entered Inputs
    if (numberOfLocalAdults > 0) {
        currentAdventureCost += numberOfLocalAdults * divingForLocalAdults;
    }
    if (numberOfLocalKids > 0) {
        currentAdventureCost += numberOfLocalKids * divingForLocalKids;
    }
    if (numberOfForeinAdults > 0) {
        currentAdventureCost += numberOfForeinAdults * divingForForeignAdults;
    }
    if (numberOfForeinKids > 0) {
        currentAdventureCost += numberOfForeinKids * divingForForeignKids;
    }
    if (numberOfExtraGuideForAdults > 0) {
        currentAdventureCost += numberOfExtraGuideForAdults * divingExtraGuideForAdultsPrice;
    }
    if (numberOfExtraGuideForKids > 0) {
        currentAdventureCost += numberOfExtraGuideForKids * divingExtraGuideForKidsPrice;
    }

    

    // Update the Display
    document.getElementById("currentAdventureCost").innerText = `Current Adventure Booking Cost: LKR ${currentAdventureCost.toFixed(2)}`;

    // Overall Adventure Booking Cost
    // document.getElementById("totalAdventureBooking").innerHTML = `Adventure Booking Total Cost: <span></span>`;

    // document.querySelector("#totalAdventureBooking span").innerText = ` LKR ${currentAdventureCost.toFixed(2)}`;
    
    // return currentAdventureCost;

}
updateAdventureCost()



//                          OVERALL BOOKING TABLE

// Add event listeners to the input elements that affect the booking costs
document.querySelectorAll('.booking-details input, .aventures-details input').forEach(input => {
    input.addEventListener('input', () => {
        // Call the functions to update the costs
        updateBookingCost();
        updateAdventureCost();
        // Update the summary table
        createSummaryTable();
    });
});

function createSummaryTable() {
    // Get the table element to display the Overall Summary
    const overallSummaryTable = document.getElementById("overallSummaryTable");

    // Get the elements that to get the cost values
    const hotelBkngTotalCostElem = document.getElementById("currentHotelBookingCost");
    const hotelBkngDiscountedTotalCostElem = document.getElementById("currentHotelBookingDiscountPrice");
    const adventureBkngTotalCostElem = document.getElementById("currentAdventureCost");

    // Extract the numerical values from the elements text content
    const hotelBkngTotalCost = parseFloat(hotelBkngTotalCostElem.textContent.replace(/[^0-9.]/g, ''));
    const hotelBkngDiscountedTotalCost = parseFloat(hotelBkngDiscountedTotalCostElem.textContent.replace(/[^0-9.]/g, ''));
    const adventureBkngTotalCost = parseFloat(adventureBkngTotalCostElem.textContent.replace(/[^0-9.]/g, ''));

    // Determine which hotel cost to display
    const hotelCostToDisplay = !isNaN(hotelBkngDiscountedTotalCost) && hotelBkngDiscountedTotalCost < hotelBkngTotalCost
        ? hotelBkngDiscountedTotalCost
        : hotelBkngTotalCost;


    // Store the calculated values in localStorage
    localStorage.setItem('hotelBookingTotalCost', hotelCostToDisplay.toFixed(2));
    localStorage.setItem('adventureBookingTotalCost', adventureBkngTotalCost.toFixed(2));
    localStorage.setItem("totalCost", (hotelCostToDisplay + adventureBkngTotalCost).toFixed(2));   

    // Update the innerHTML of the overallSummaryTable with the calculated values
    overallSummaryTable.innerHTML = `
        <tr>
            <th>Your Booking Summary</th>
            <th>Charges</th>
        </tr>
        <tr>
            <td>Hotel Booking Total Cost</td>
            <td>LKR ${hotelCostToDisplay.toFixed(2)}</td>     
        </tr>
        <tr>
            <td>Adventure Booking Total Cost</td>
            <td>LKR ${adventureBkngTotalCost.toFixed(2)}</td>
        </tr>
        <tr>
            <th>Total Cost</th>
            <th>LKR ${(hotelCostToDisplay + adventureBkngTotalCost).toFixed(2)}</th>
        </tr>`;
}

// Calling the function to update the table
createSummaryTable();



//                            JSON Method to store Booking Data

// // Function to save booking details to localStorage in JSON format
// function saveToFavourites() {
//     const bookingDetails = {
//         numberOfSingleRooms: parseInt(document.getElementById("numOfSingleRooms").value) || 0,
//         numberOfDoubleRooms: parseInt(document.getElementById("numOfDoubleRooms").value) || 0,
//         numberOfTripleRooms: parseInt(document.getElementById("numOfTripleRooms").value) || 0,
//         numberOfExtraBed: parseInt(document.getElementById("numOfExtraBed").value) || 0,
//         numberOfKidsExtraMeals: parseInt(document.getElementById("numOfExtraMeals").value) || 0,
//         currentTotalCost: parseFloat(document.getElementById("currentHotelBookingCost").innerText.replace(/[^0-9.]/g, '')),
//         discountedPrice: parseFloat(document.getElementById("currentHotelBookingDiscountPrice").innerText.replace(/[^0-9.]/g, '')) || null
//     };

//     // Convert the booking details object to a JSON string and save it to localStorage
//     localStorage.setItem('favouriteBooking', JSON.stringify(bookingDetails));
// }

// // Function to display favourite booking details from localStorage
// function showFavourites() {
//     // Retrieve the JSON string from localStorage and parse it into an object
//     const favouriteBooking = JSON.parse(localStorage.getItem('favouriteBooking'));

//     if (favouriteBooking) {
//         // Display the favourite booking details in a summary table
//         const summaryTable = document.createElement('table');
//         summaryTable.innerHTML = `
//             <tr><th>Single Rooms</th><td>${favouriteBooking.numberOfSingleRooms}</td></tr>
//             <tr><th>Double Rooms</th><td>${favouriteBooking.numberOfDoubleRooms}</td></tr>
//             <tr><th>Triple Rooms</th><td>${favouriteBooking.numberOfTripleRooms}</td></tr>
//             <tr><th>Extra Beds</th><td>${favouriteBooking.numberOfExtraBed}</td></tr>
//             <tr><th>Kids Extra Meals</th><td>${favouriteBooking.numberOfKidsExtraMeals}</td></tr>
//             <tr><th>Total Cost</th><td>LKR ${favouriteBooking.currentTotalCost.toFixed(2)}</td></tr>
//             <tr><th>Discounted Price</th><td>LKR ${favouriteBooking.discountedPrice ? favouriteBooking.discountedPrice.toFixed(2) : 'N/A'}</td></tr>
//         `;
//         document.body.appendChild(summaryTable); // Append the summary table to the body or another element of your choice
//     } else {
//         alert('No favourite booking details found.');
//     }
// }

// // Add event listener to the "Add to Fav" button
// document.querySelector('.addfav-button button').addEventListener('click', saveToFavourites);

// // Add event listener to the "See your Favourite" button
// document.querySelector('.show-favourites button').addEventListener('click', showFavourites);





// // Function to save booking details to localStorage in JSON format
// function saveToFavourites() {
//     const bookingDetails = {
//         numberOfSingleRooms: parseInt(document.getElementById("numOfSingleRooms").value) || 0,
//         numberOfDoubleRooms: parseInt(document.getElementById("numOfDoubleRooms").value) || 0,
//         numberOfTripleRooms: parseInt(document.getElementById("numOfTripleRooms").value) || 0,
//         numberOfExtraBed: parseInt(document.getElementById("numOfExtraBed").value) || 0,
//         numberOfKidsExtraMeals: parseInt(document.getElementById("numOfExtraMeals").value) || 0,
//         currentTotalCost: parseFloat(document.getElementById("currentHotelBookingCost").innerText.replace(/[^0-9.]/g, '')),
//         discountedPrice: parseFloat(document.getElementById("currentHotelBookingDiscountPrice").innerText.replace(/[^0-9.]/g, '')) || null
//     };

//     // Convert the booking details object to a JSON string and save it to localStorage
//     localStorage.setItem("favouriteBooking", JSON.stringify(bookingDetails));
// }

// // Function to display favourite booking details from localStorage
// function showFavourites() {
//     // Retrieve the JSON string from localStorage and parse it into an object
//     const favouriteBooking = JSON.parse(localStorage.getItem("favouriteBooking"));

//     if (favouriteBooking) {
//         // Display the favourite booking details in the table with id="showFavTable"
//         const showFavTable = document.getElementById("showFavTable");
//         showFavTable.innerHTML = `
//         <tr>
//             <th>Category</th>
//             <th>Details/Quantity</th>
//         </tr>
//             <tr>
//                 <td>Single Rooms</td>
//                 <td>${favouriteBooking.numberOfSingleRooms}</td>
//             </tr>
//             <tr>
//                 <td>Double Rooms</td>
//                 <td>${favouriteBooking.numberOfDoubleRooms}</td>
//             </tr>
//             <tr>
//                 <td>Triple Rooms</td>
//                 <td>${favouriteBooking.numberOfTripleRooms}</td>
//             </tr>
//             <tr>
//                 <td>Extra Beds</td>
//                 <td>${favouriteBooking.numberOfExtraBed}</td>
//             </tr>
//             <tr>
//                 <td>Kids Extra Meals</td>
//                 <td>${favouriteBooking.numberOfKidsExtraMeals}</td>
//             </tr>
//             <tr>
//                 <td>Total Cost</td>
//                 <td>LKR ${favouriteBooking.currentTotalCost.toFixed(2)}</td>
//             </tr>
//             <tr>
//                 <td>Discounted Price</td>
//                 <td>LKR ${favouriteBooking.discountedPrice ? favouriteBooking.discountedPrice.toFixed(2) : 'N/A'}</td>
//             </tr>
//         `;
//         // Show the "show-favourites" section
//         document.querySelector('.show-favourites').style.display = "block";
//     } else {
//         alert("No favourite booking details found.");
//     }
// }

// // Function to clear favourite booking details from the table and localStorage
// function clearFavourites() {
//     localStorage.removeItem("favouriteBooking");
//     const showFavTable = document.getElementById("showFavTable");
//     showFavTable.innerHTML = ""; // Clear the table content
//     // document.querySelector('.show-favourites').style.display = 'none';
// }

// // Add event listener to the "Add to Fav" button
// document.querySelector(".addfav-button button").addEventListener("click", saveToFavourites);

// // Add event listener to the "See your Favourite" button
// document.querySelector(".show-favourites button").addEventListener("click", showFavourites);

// // Add event listener to the "Clear Favourite" button
// document.getElementById("clearFavBtn").addEventListener("click", clearFavourites);










// // Function to save booking details to localStorage in JSON format
// function saveToFavourites() {
//     const bookingDetails = {

//         numberOfSingleRooms: parseInt(document.getElementById("numOfSingleRooms").value) || 0,
//         numberOfDoubleRooms: parseInt(document.getElementById("numOfDoubleRooms").value) || 0,
//         numberOfTripleRooms: parseInt(document.getElementById("numOfTripleRooms").value) || 0,
//         numberOfExtraBed: parseInt(document.getElementById("numOfExtraBed").value) || 0,
//         numberOfKidsExtraMeals: parseInt(document.getElementById("numOfExtraMeals").value) || 0,
//         enteredPromoCode: document.getElementById("promoCode").value,




//         currentTotalCost: parseFloat(document.getElementById("currentHotelBookingCost").innerText.replace(/[^0-9.]/g, '')),
//         discountedPrice: parseFloat(document.getElementById("currentHotelBookingDiscountPrice").innerText.replace(/[^0-9.]/g, '')) || null,
//         currentAdventureCost: parseFloat(document.getElementById("currentHotelBookingCost").innerText.replace(/[^0-9.]/g, '')),


//     };

//     // Convert the booking details object to a JSON string and save it to localStorage
//     localStorage.setItem("favouriteBooking", JSON.stringify(bookingDetails));
// }

// // Function to display favourite booking details from localStorage
// function showFavourites() {
//     // Retrieve the JSON string from localStorage and parse it into an object
//     const favouriteBooking = JSON.parse(localStorage.getItem("favouriteBooking"));

//     if (favouriteBooking) {
//         // Display the favourite booking details in the table with id="showFavTable"
//         const showFavTable = document.getElementById("showFavTable");
//         let tableContent = `
//                             <tr>
//                                 <th>Category</th>
//                                 <th>Details/Quantity</th>
//                             </tr>`;

//                             if (favouriteBooking.numberOfSingleRooms > 0) {
//                                 tableContent += `
//                                 <tr>
//                                     <td>Single Rooms</td>
//                                     <td>${favouriteBooking.numberOfSingleRooms}</td>
//                             </tr>`;
//                             }

//         showFavTable.innerHTML = tableContent;                  
            
          
//         // Show the "show-favourites" section
//         document.querySelector(".show-favourites").style.display = "block";
//     } else {
//         alert("No favourite booking details found.");
//     }
// }

// // Function to clear favourite booking details from the table and localStorage
// function clearFavourites() {
//     localStorage.removeItem("favouriteBooking");
//     const showFavTable = document.getElementById("showFavTable");
//     showFavTable.innerHTML = ""; // Clear the table content
//     // document.querySelector('.show-favourites').style.display = 'none';
// }

// // Add event listener to the "Add to Fav" button
// document.querySelector(".addfav-button button").addEventListener("click", saveToFavourites);

// // Add event listener to the "See your Favourite" button
// document.querySelector(".show-favourites button").addEventListener("click", showFavourites);

// // Add event listener to the "Clear Favourite" button
// document.getElementById("clearFavBtn").addEventListener("click", clearFavourites);





// Function to save user inputs to localStorage as a JSON string
function saveToFavourites() {
    const userInputDetails = {
        hotel: hotelSelect.value,
        checkIn: checkInDate.value,
        checkOut: checkOutDate.value,
        singleRooms: numOfSingleRooms.value,
        doubleRooms: numOfDoubleRooms.value,
        tripleRooms: numofTripleRooms.value,
        adults: numOfAdults.value,
        children: numOfChild.value,
        extraBed: numOfExtraBed.value,
        extraMeals: numOfExtraMeals.value,
        wifi: checkBoxWiFi.checked,
        poolView: checkBoxPoolView.checked,
        gardenView: checkBoxGardenView.checked,
        promoCode: promoCode.value,

        
    };



    const hotelBkngTotalCostElem = document.getElementById("currentHotelBookingCost");
    const adventureBkngTotalCostElem = document.getElementById("currentAdventureCost");

    const hotelBkngDiscountedTotalCostElem = document.getElementById("currentHotelBookingDiscountPrice");

    // Extract the numerical values from the elements text content
    const hotelBkngTotalCost = parseFloat(hotelBkngTotalCostElem.textContent.replace(/[^0-9.]/g, ''));
    const hotelBkngDiscountedTotalCost = parseFloat(hotelBkngDiscountedTotalCostElem.textContent.replace(/[^0-9.]/g, ''));
    const adventureBkngTotalCost = parseFloat(adventureBkngTotalCostElem.textContent.replace(/[^0-9.]/g, ''));
    


    // Add the total costs to the userInputDetails object
    userInputDetails.hotelBookingTotalCost = hotelBkngTotalCost;

    userInputDetails.hotelBookingDiscountedTotalCost = hotelBkngDiscountedTotalCost;

    userInputDetails.adventureBookingTotalCost = adventureBkngTotalCost;

    localStorage.setItem("favouriteBooking", JSON.stringify(userInputDetails));

    // // Convert the object to a JSON string
    // const userInputJSON = JSON.stringify(userInputDetails);

    // // Store the JSON string in localStorage
    // localStorage.setItem("favouriteBooking", userInputJSON);

}

// Add event listener to the Add to Favourite button
document.getElementById("addFAv").addEventListener("click", saveToFavourites);

function showFavourites() {
    const favouriteBooking = JSON.parse(localStorage.getItem("favouriteBooking"));

    if (favouriteBooking) {

        let tableContent = `<tr>
                                <th>Category</th>
                                <th>Details/Quantity</th>
                            </tr>`;
        
        if (favouriteBooking.hotel) {
            tableContent += `
                            <tr>
                                <td> Your Hotel/Resort </td>
                                <td>${favouriteBooking.hotel}</td>
                            </tr>`;
        }
    
    
        // Check if the the checkInDate value is not empty
        if (favouriteBooking.checkIn) {
            tableContent += `
                            <tr>
                            <td> Check In Date </td>
                            <td>${favouriteBooking.checkIn}</td>
                            </tr>`;
        }
    
    
        //Check if the the checkOutDate value is not empty
        if (favouriteBooking.checkOut) {
            tableContent += `
                            <tr>
                            <td> Check Out Date </td>
                            <td>${favouriteBooking.checkOut}</td>
                            </tr>`;
        }

        if (favouriteBooking.singleRooms > 0) {
            tableContent += `
                            <tr>
                                <td>Single Rooms</td>
                                <td> ${favouriteBooking.singleRooms} </td>
                            </tr>`;
            };
        if (favouriteBooking.doubleRooms > 0) {
            tableContent += `
                            <tr>
                                <td>Double Rooms</td>
                                <td> ${favouriteBooking.doubleRooms} </td>
                            </tr>`;
            };
        if (favouriteBooking.tripleRooms > 0) {
            tableContent += `
                            <tr>
                                <td>Triple Rooms</td>
                                <td> ${favouriteBooking.tripleRooms} </td>
                            </tr>`;
            };
        if (favouriteBooking.adults > 0) {
            tableContent += `
                            <tr>
                                <td>Adults</td>
                                <td> ${favouriteBooking.adults} </td>
                            </tr>`;
            };
        if (favouriteBooking.children > 0) {
            tableContent += `
                            <tr>
                                <td>Kids</td>
                                <td> ${favouriteBooking.children} </td>
                            </tr>`;
            };
        if (favouriteBooking.extraBed > 0) {
            tableContent += `
                            <tr>
                                <td>Extra Bed</td>
                                <td> ${favouriteBooking.extraBed} </td>
                            </tr>`;
            };
        if (favouriteBooking.extraMeals > 0) {
            tableContent += `
                            <tr>
                                <td>Extra Meals</td>
                                <td> ${favouriteBooking.extraMeals} </td>
                            </tr>`;
            };
        if (favouriteBooking.wifi) {
            tableContent += `
                            <tr>
                                <td>WiFi</td>
                                <td> <i class="material-symbols-outlined">
                                check
                                </i></td>
                            </tr>`;
            };
        if (favouriteBooking.poolView) {
            tableContent += `
                            <tr>
                                <td>Pool View</td>
                                <td> <i class="material-symbols-outlined">
                                check
                                </i></td>
                            </tr>`;
            };
        if (favouriteBooking.gardenView) {
            tableContent += `
                            <tr>
                                <td>Garden View</td>
                                <td> <i class="material-symbols-outlined">
                                check
                                </i></td>
                            </tr>`;
            };

            // tableContent += `
            //                 <tr>
            //                     <td>Hotel Booking Total Cost</td>
            //                     <td> LKR ${favouriteBooking.hotelBookingTotalCost.toFixed(2)}</td>
            //                 </tr>
            //                 <tr>
            //                     <td>Adventure Booking Total Cost</td>
            //                     <td>LKR ${favouriteBooking.adventureBookingTotalCost.toFixed(2)}</td>
            //                 </tr>`

            // // Determine the lowest hotel booking cost to display
            // const hotelCostToDisplay = !isNaN(favouriteBooking.hotelBookingDiscountedTotalCost) && favouriteBooking.hotelBookingDiscountedTotalCost < favouriteBooking.hotelBookingTotalCost
            // ? favouriteBooking.hotelBookingDiscountedTotalCost
            // : favouriteBooking.hotelBookingTotalCost;


            // Check if hotelBookingTotalCost and hotelBookingDiscountedTotalCost exist and are numbers
            const hotelBookingTotalCost = !isNaN(favouriteBooking.hotelBookingTotalCost) ? favouriteBooking.hotelBookingTotalCost : 0;
            const hotelBookingDiscountedTotalCost = !isNaN(favouriteBooking.hotelBookingDiscountedTotalCost) ? favouriteBooking.hotelBookingDiscountedTotalCost : 0;

            // Determine the lowest hotel booking cost to display
            const hotelCostToDisplay = hotelBookingDiscountedTotalCost && hotelBookingDiscountedTotalCost < hotelBookingTotalCost
                ? hotelBookingDiscountedTotalCost
                : hotelBookingTotalCost;

        // Display the lowest hotel booking cost
        if (document.getElementById("showHotelBookingcost")) {
            document.getElementById("showHotelBookingcost").innerText = `Current Hotel Booking Cost: LKR ${hotelCostToDisplay.toFixed(2)}`;
        }


            // // Display the lowest hotel booking cost
            // document.getElementById("showHotelBookingcost").innerText = `Current Hotel Booking Cost: LKR ${hotelCostToDisplay.toFixed(2)}`;
        
            document.getElementById("showFavTable").innerHTML = tableContent;

            document.getElementById("showFavTable").style.display = "block";
        
    } else {
        alert("No favourite bookings");
    }

}
// Add event listener to the "Clear Favourite" button
document.getElementById("clearFavBtn").addEventListener("click", clearFavourites);

// Function to clear favourite booking details from the table and localStorage
function clearFavourites() {
    localStorage.removeItem("favouriteBooking");
    const showFavTable = document.getElementById("showFavTable");
    showFavTable.innerHTML = ""; // Clear the table content
}

// Add event listner to the See your Favourite button
document.getElementById("seeFav").addEventListener("click", showFavourites);


