import personArray from './persons.js';
import placeArray from './places.js';
const wikipediaBaseURL = "https://en.wikipedia.org/wiki/";
function getRandomElement(anArray){
    const numElements = anArray.length;
    const arrayIdx = Math.floor(Math.random() * (numElements-1));
    return anArray[arrayIdx];
}
const aPerson = getRandomElement(personArray);
const personName = aPerson.name;
const personURL = wikipediaBaseURL + aPerson.URL;
const personHTML = `<h1><a href=${personURL} target="_blank">${personName}</a></h1>`;
const aPlace = getRandomElement(placeArray);
const placeName = aPlace.name;
const placeURL = wikipediaBaseURL + aPlace.URL;
const placeHTML = `<h1><a href=${placeURL} target="_blank">${placeName}</a></h1>`;
// Function to generate a random product argument
function randomProductArg(minArg, maxArg) {
    return Math.floor(Math.random() * (maxArg - minArg) + minArg);
}
const maxArg = 25;
const minArg = 7;
const arg1 = randomProductArg(minArg,maxArg);
const arg2 = randomProductArg(minArg,maxArg);
const aProduct = arg1 * arg2;
let productHTML = `<h2>${arg1} * ${arg2} = </h2><input type="text" id="productGuess"><button onclick="showAnswer()">Check</button>`;
document.getElementById("personspan").innerHTML = personHTML;
document.getElementById("placespan").innerHTML = placeHTML;
document.getElementById("productspan").innerHTML = productHTML;
function showAnswer(){
  productHTML = `<h2>${arg1} * ${arg2} = ${aProduct} </h2> `;
  document.getElementById("productspan").innerHTML = productHTML;
}
