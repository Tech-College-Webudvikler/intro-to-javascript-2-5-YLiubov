// MATH
const firstNumber = 5;
const secondNumber = 12;

let result = firstNumber + secondNumber;
result *= 7;

console.log(result);

// Hovedforskellen mellem const og let er muligheden for at tilsidesætte værdien af ​​en variabel, efter den er deklareret.
// Nøgleordet const forhindrer, at værdien af ​​en variabel tilsidesættes.
// Nøgleordet let tillader, at værdien af ​​en variabel ændres, efter den er deklareret.


// CITY
let city = "Kyiv";
let cityLength = city.length;
let citySentence = city + " have " + cityLength + " letters.";

console.log(citySentence);

// NAME
// let fullName = "Yakymenko Liubov";
// let firstName = fullName.substring(10);
// let secondName = fullName.substring(0, 9);

// console.log(firstName);
// console.log(secondName);

// bonus
let fullName = "Yakymenko Liubov";

let parts = fullName.split(" "); 

let firstName = parts[1];
let lastName = parts[0];

console.log(firstName);
console.log(lastName);
// .split(" ") automatically splits the string by spaces

// DISH
const mainSection = document.getElementById("mainSection");

let favDish1 = "Borscht";
let favDish2 = "Varenyky";
let favDish3 = "Deruny";

let paragraph1 = document.createElement("p");
let paragraph2 = document.createElement("p");
let paragraph3 = document.createElement("p");

paragraph1.textContent = favDish1;
paragraph2.textContent = favDish2;
paragraph3.textContent = favDish3;

paragraph1.classList.add("styleParagraph");
paragraph2.classList.add("styleParagraph");
paragraph3.classList.add("styleParagraph");

mainSection.appendChild(paragraph1);
mainSection.appendChild(paragraph2);
mainSection.appendChild(paragraph3);