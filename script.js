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
const mainSection = document.getElementById("mainSection"); // (1)

// let favDish1 = "Borscht";
// let favDish2 = "Varenyky";
// let favDish3 = "Deruny";

// let paragraph1 = document.createElement("p");
// let paragraph2 = document.createElement("p");
// let paragraph3 = document.createElement("p");

// paragraph1.textContent = favDish1;
// paragraph2.textContent = favDish2;
// paragraph3.textContent = favDish3;

// paragraph1.classList.add("styleParagraph");
// paragraph2.classList.add("styleParagraph");
// paragraph3.classList.add("styleParagraph");

// mainSection.appendChild(paragraph1);
// mainSection.appendChild(paragraph2);
// mainSection.appendChild(paragraph3);

// BONUS

const favDishes = ["Borscht", "Varenyky", "Deruny"]; // (2)
favDishes.forEach((dish) => { // (3)
    const p = document.createElement("p"); // (4)
    p.textContent = dish; // (5)
    p.classList.add("styleParagraph") // (6)
    mainSection.appendChild(p) // (7)
});

// (1) Находим, куда вставлять. Берём <section id="mainSection"> из HTML.
// (2) Делаем список (массив) блюд. Три строки — это элементы массива. Массив = список
// (3) Запускаем forEach. Говорим: «Для каждого блюда из списка выполни вот эту функцию». dish — это блюда
// (4) Создаём элемент. Делаем новый <p> в памяти. Пока он ещё не на странице.
// (5) Кладём текст. Внутрь <p> записываем название текущего блюда
// (6) Добавляем класс. Чтобы стили применилис .styleParagraph должен быть в CSS.
// (7) Вставляем в DOM. Кладём готовый <p> внутрь mainSection. Всё, он появился на странице.