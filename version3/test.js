// Version 3

/*
1.
Write a function that:
- Makes an API call using the Fetch API
- Uses the following URL: https://randomuser.me/api?results=5
- Makes use of async/await syntax
- Display the "name", "email" and "city" of the first person inside an unordered list.
*/
async function fetchJSON(URL) {
  const response = await fetch(URL);
  const data = await response.json();
  const ul = document.createElement('ul');
  const body = document.body;
  body.appendChild(ul);
  data.results.forEach((element, index) => {
    const li = document.createElement('li');
    li.innerHTML = `<li>${element.name.first}</li>
    <li>${element.email}</li>
    <li>${element.location.city}</li>`;
    ul.appendChild(li);
  });
}
fetchJSON("https://randomuser.me/api?results=5");


/*
2. 
a) Implement the following JavaScript library: https://www.chartjs.org/
- Get a Bar chart working
- You may use the example data from the docs

b) Explain in 100 words or less your approach for implementing the library
*/
// to use this library we have to use js file of the library or we have to install it by "npm install chart.js --save"
//  then I add the script src 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js' to My HTML doc. 
// at the end of body element.
// Then I create canvas with "myChart" id on my HTML file
// Then I defined new Chart variable to display my Bar chart.
// Then I can use the details on my HTML file. 

/*
3.
a) Create a class, called Car, that includes:
- A constructor method
- "model", "color", "seats" properties
- 1 additional method, called "getModel", which returns the model


b) Instantiate the class, and give it the name and attributes of a random animal

c) Explain how this class relates Object-Oriented Programming (OOP) in 100 words or less:
answer : 
Object Oriented Programming (OOP) stand for using self-contained pieces of code to develop applications. 
known as these self-contained pieces of code objects.
There are many ways to create a new object in JavaScript like : 
 object literal,
 factory functions,
 constructor functions
 and classes.
then creat constructor method to add properties of Car class.
then create a getter method to return the model property.
finally we lunch the class, This process called instantiation 


*/
class Car {
  constructor(model, color, seats) {
    this._model = model;
    this.color = color;
    this.seats = seats;
  }

  get model() {
    return this._model;
  }
}
const animalCar = new Car("TESLA model X", "red", 4);
/*
4.
Write a function that:
- Takes in an array of strings as an argument
- Sorts the array alphabetically
- Adds

Example: ["Zebra", "Cookie", "Flower"]
Expected output: ["Cookies", "Flowers", "Zebras"]

Make use of the following array:
*/

function sortedFruit() {
  const fruits = ['Strawberry', 'Apple', 'Tangerine', 'Banana', 'Melon', 'Pear'];
  fruits.sort();
  console.log(fruits);
}
sortedFruit();


/*
5.
Using JavaScript only (adding HTML to index.html is NOT allowed), create a function that:
- Creates a button element (with text "click me!")
- Creates an empty <img> and add it to the document.
- When the button is clicked, inserts an image URL into the <img> tag and remove the button
- Uses the following image URL: https://avatars3.githubusercontent.com/u/20858568?s=200&v=4
*/
const body = document.body;
const button = document.createElement('button');
body.appendChild(button);
button.innerText = "click me!";
const img = document.createElement('img');
body.appendChild(img);
const url = "https://avatars3.githubusercontent.com/u/20858568?s=200&v=4";
img.setAttribute('src', url);
img.style.display = "none";

function showImageByClick() {
  if (img.style.display === "none") {
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }
}
button.addEventListener("click", showImageByClick);
/*
6.
Answer the following questions:
- What is an Application Programming Interface (API)?

// An API stand for (Application Programming Interface) which is any software that contains a part that's can be accessible from an outside source open to requests from the client. That part that's accessible is the "interface" of that software. called the API and there is two types (public API) and (private API : witch is commonly used).

- How does this relate to your HackYourRepo project?
//
I have used github api in HackYourRepo project.
I recieved the responses from it by using AJAX. Then I HAVE displayed the details in my HTML file dynamically.

Explain each in 200 words or less.
*/
