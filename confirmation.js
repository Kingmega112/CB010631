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

// // Function to retrieve user input values from localStorage and update the content
// function displayUserDetails() {
//     // Retrieve user input values from localStorage
//     const fullName = localStorage.getItem('userFullName');
//     const mobileNumber = localStorage.getItem('userMobileNumber');
//     const email = localStorage.getItem('userEmail');

//     // Update the content on the new page with the retrieved values
//     const dynamicTable = document.getElementById("dynamicTable");
//     dynamicTable.innerHTML += `
//         <tr>
//             <td>Full Name</td>
//             <td>${fullName}</td>
//         </tr>
//         <tr>
//             <td>Mobile Number</td>
//             <td>${mobileNumber}</td>
//         </tr>
//         <tr>
//             <td>Email Address</td>
//             <td>${email}</td>
//         </tr>`;
// }

// payment.js


// Function to create and display the dynamic table with booking details and user input values
function displayConfirmationDetails() {
    // Retrieve booking details from localStorage
    const hotelCost = localStorage.getItem('hotelBookingTotalCost');
    const adventureCost = localStorage.getItem('adventureBookingTotalCost');
    const totalCost = localStorage.getItem('totalCost');

    // Retrieve user input values from localStorage
    const fullName = localStorage.getItem('userFullName');
    const mobileNumber = localStorage.getItem('userMobileNumber');
    const email = localStorage.getItem('userEmail');

    // Get the table element to display the confirmation details
    const confirmationTable = document.getElementById("overallSummaryTable");

    // Update the table with the retrieved values
    confirmationTable.innerHTML = `
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
        </tr>
        <tr>
            <td>Full Name</td>
            <td>${fullName}</td>
        </tr>
        <tr>
            <td>Mobile Number</td>
            <td>${mobileNumber}</td>
        </tr>
        <tr>
            <td>Email Address</td>
            <td>${email}</td>
        </tr>`;
}

// Call the function to display the confirmation details when the page loads
document.addEventListener('DOMContentLoaded', displayConfirmationDetails);







