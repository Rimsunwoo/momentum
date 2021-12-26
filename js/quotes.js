const quotes = [
{
    quote: "God provides the wind, but man must raise the sails.", 
    author: "St. Augustine"
},
{
    quote: "The past can hurt, but you can either run from it, or learn from it",
    author: "Lion King"
},
{
    quote: "As some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you.",
    author: "Juan, Moonlight"
},
{
    quote: "All we have decide is what to do with the time that is given to us.",
    author: "Gandlaf, Lord of the rings."
},
{
    quote: "We are what we repeatedly do. Excellence, then is not an act, but a habit.",
    author: "Aristotle"
},
{
    quote: "If you want the rainbow, you gotta put up with the rain",
    author: "Dolly Parton"
},
{
    quote: "In order to be irreplaceable one must always be different.",
    author: "Coco chanel"
},
{
    quote: "I will always be ready. Then someday, I'll get an oppertunity.",
    author: "Abraham Lincoln"
},
{
    quote: "Life is either a great adventure",
    author: "Helen Keller"
},
{
    quote: "Life isn't about finding yourself. Life is about creating yourself.",
    author: "George Bernard Shaw"
},
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes =  quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;