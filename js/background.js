const images = ["4.jpeg","5.jpeg","6.jpeg","7.jpeg", "8.jpeg"];

const chosenImage= images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);