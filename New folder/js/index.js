/* start for control coding */
// var addBtn=document.querySelector("#add-btn");
// var modal=document.querySelector(".modal");

// addBtn.addEventListener("click",()=>{
//     console.log("yes this code is active");
//     modal.classList.toggle("active");
// })

// Wait for the DOM content to be fully loaded
/*document.addEventListener("DOMContentLoaded", function() {
    // Select the button with the ID "add-btn"
    var addBtn = document.querySelector("#add-btn");

    // Select the modal with the class "model"
    var modal = document.querySelector(".model");

    // Select the close button with the class "close-icon"
    var closeBtn = document.querySelector(".close-icon");

    // Check if the button, modal, and close button are found
    if (addBtn && modal && closeBtn) {
        // Add a click event listener to the button
        addBtn.addEventListener("click", function() {
            // Toggle the "active" class on the modal
            modal.classList.toggle("active");
        });

        // Add a click event listener to the close button
        closeBtn.addEventListener("click", function() {
            // Remove the "active" class from the modal
            modal.classList.remove("active");
        });
    } else {
        console.error("Button, modal, or close button not found. Check your HTML and JavaScript.");
    }
});
*/
/* start all global variable */
 /*var userData=[];
var id=document.getElementById("id");

var nameEl=document.querySelector("#name");
var l_nameEl=document.getElementById("l-name");
var emailEl=document.querySelector("#email");
var officeEl=document.querySelector("#office-code");
var jobTitleEl=document.querySelector("#job-title");
var registerBtn=document.querySelector("#register-btn");

*/
/* end all global variable */

/* start register coding */


/*registerBtn.onclick=function()
{
    registrationData();
}

function registrationData()
{
    userData.push({
        id:IdleDeadline.value,
        name:nameEl.value,
        l_name:l_nameEl.value,
        email:emailEl.value,
        officeCode:officeEl.value,
        jobTitle:jobTitleEl.value
    });
    var userString=JSON.stringify(userData);
    localStorage.setItem("userData",userString);
}
*/
document.addEventListener("DOMContentLoaded", function() {
    // Select the button with the ID "add-btn"
    var addBtn = document.querySelector("#add-btn");

    // Select the modal with the class "model"
    var modal = document.querySelector(".model");

    // Select the close button with the class "close-icon"
    var closeBtn = document.querySelector(".close-icon");

    // Check if the button, modal, and close button are found
    if (addBtn && modal && closeBtn) {
        // Add a click event listener to the button
        addBtn.addEventListener("click", function() {
            // Toggle the "active" class on the modal
            modal.classList.toggle("active");
        });

        // Add a click event listener to the close button
        closeBtn.addEventListener("click", function() {
            // Remove the "active" class from the modal
            modal.classList.remove("active");
        });
    } else {
        console.error("Button, modal, or close button not found. Check your HTML and JavaScript.");
    }
});

var userData = [];
var id = document.getElementById("id");

var nameEl = document.querySelector("#name");
var l_nameEl = document.getElementById("l-name");
var emailEl = document.querySelector("#email");
var officeEl = document.querySelector("#office-code");
var jobTitleEl = document.querySelector("#job-title");
var registerBtn = document.querySelector("#register-btn");
/* end all global variable */

/* start register coding */
registerBtn.onclick = function() {
    registrationData();
}

function registrationData() {
    userData.push({
        id: id.value, // Use id.value instead of IdleDeadline.value
        name: nameEl.value,
        l_name: l_nameEl.value,
        email: emailEl.value,
        officeCode: officeEl.value,
        jobTitle: jobTitleEl.value
    });
    var userString = JSON.stringify(userData);
    localStorage.setItem("userData", userString);
}









