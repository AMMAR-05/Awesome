// Select Landing Page Element
let landingPage = document.querySelector(".header");

// Get Array from Images
let imagesArray = ["01.jpg", "02.jpg", "03.jpg"];

// Get Random Number
let randomNumber = Math.floor(Math.random() * imagesArray.length);

setInterval(() => {
    
    // Get Random Number
    let randomNumber = Math.floor(Math.random() * imagesArray.length);

    // Change Backgorund Image by url
    landingPage.style.backgroundImage = 'url("images/' + imagesArray[randomNumber] + '")';
   

}, 10000);