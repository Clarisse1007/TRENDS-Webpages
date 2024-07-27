/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design Assignment
Case 1
   
Apparel Selling Web Site
Author: Clarisse Hooi Wai Leng
Date:   15/8/2023
   
Filename: top.js
*/

// Object to store image prices
const imagePrices = {
    'Screenshot_20230828_105457.jpg': 26.00,
    'Screenshot_20230828_105821.jpg': 30.00,
    'Screenshot_20230828_105611.jpg': 23.00,
    'Screenshot_20230828_105915.jpg': 20.00,
    'tb_image_share_1693192980253.jpg.png': 25.00,
    't2.jpg': 28.00
};

// Get references to all images in the gallery
const images = document.querySelectorAll('.top');
const priceDisplay = document.createElement('p');
priceDisplay.classList.add('price-display');

// Append the price display to the article
const article = document.querySelector('article');
article.appendChild(priceDisplay);