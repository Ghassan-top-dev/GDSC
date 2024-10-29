// 4. Represent all this in an Objects
let person = {

    name: "Ghassan", 
    age: 18,
    isAdult: true,
    colors: ["red","blue","green","cyan", "yellow"]
};

// 1a. Variables are containers for storing data values.
// Try to use const, then let, then var

w = 7;
var x = 8;
let y = 9;
const z = 10; 

// 1b Experiment with the different variable notations. 

document.getElementById("demo").innerHTML = w; 




// 2. Data Types

// Strings
// Numbers
// Booleans
// Arrays


let name = "Ghassan"; 
let age = 18;
let isAdult = true; 
let colors = ["red","blue","green","cyan", "yellow"]; 

// 2a. Using multiple variables

document.getElementById("info").innerHTML = "Hi my name is " +person.name+ ", I am " +person.age+ " years old"

// 3. Change the color of the info tag
// 3a. setInterval is a function that runs a function every x milliseconds
let i = 0; 
setInterval(() => {

    if (i == colors.length) {
        i = 0; 
    }
    document.getElementById("info").style.color = colors[i];
    i++;



},100) 




// 3b. Use Arrow Functions

// 5. Display date when we click button using event handlers

function displayDate() {

    document.getElementById("date").innerHTML = Date();

}

// 6. List your projects in an object

let projects = {

    project1: {
        name: "Portfolio",
        description: "Used HTML, CSS, and JS to build a website",
        url: "https://github.com/Ghassan-top-dev/SDL"
    },

    project2: {
        name: "SDL Window",
        description: "Used HTML, CSS, and JS to build a website",
        url: "https://github.com/Ghassan-top-dev/SDL"
    },

    project3: {
        name: "Tic Tac Toe",
        description: "Used HTML, CSS, and JS to build a website",
        url: "https://github.com/Ghassan-top-dev/SDL"
    }

};

// 6a. Display the projects in a list

let projectsList = document.getElementById("projects"); 

for(let project in projects){

    let varvar = document.createElement("li");
    varvar.innerHTML = projects[project].name;
    projectsList.appendChild(varvar); 
}                    

                                                
