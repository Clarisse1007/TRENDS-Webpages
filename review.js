/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design Assignment
Case 1
   
Apparel Selling Web Site
Author: Clarisse Hooi Wai Leng
Date:   15/8/2023
   
Filename: review.js
*/

window.alert("Welcome to Trends Review Page");

function checkform() {
   var custName = document.getElementById("name").value;
   var custEmail = document.getElementById("email").value;
   var custReview = document.getElementById("review").value;

   if (custName.trim() === "") {
       alert("Please enter your name.");
       return false;
   }

   if (!validateEmail(custEmail)) {
       alert("Please enter a valid email address.");
       return false;
   }

   if (custReview.trim() === "") {
       alert("Please enter your review.");
       return false;
   }

   return true;
}

function validateEmail(email) {
   var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   return emailRegex.test(email);
}