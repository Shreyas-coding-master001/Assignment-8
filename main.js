var a = "Shreyas";
let b = "Ravindra";
const c = "Patil";

a = 'Updated'
b= 'Updated'
/* c= 'Upadated' -> Error : Uncaught TypeError: Assignment to constant variable.
                            at main.js:7:2
                            (anonymous) @ main.js:7 */

{
    let a = 10;
}
// console.log(a) -> Error: a is not defined

const math = Math; // IN Libraries
const gravity = 9.81;
const pin = 1010122; 

console.log('Shreyas')
console.info('20')
console.warn('Dombivli')

// let usersname = prompt('Enter your name')
// console.log(`Welcome ${usersname}\n`,typeof(usersname))

// let age = prompt("Enter age:");
// console.log(age+5); // Concatination occurs

let msg = "I love Sheryians";
console.log(msg.slice(2,6),
msg.split(" "), // Words : 3
msg.replace('love','study at'),
msg.includes('love'))

let x= 101;let y = 110; // works with semicolon

console.log("Works")
console.error("Errrror") 
console.warn('Warning he bhai')

// Expression and statements in console :
// Expression gives value immediately   
y= (10 + 5) *2;console.log(y)

/* Expression is a complete statment's which need's be stored 
   Statements are complete line of code where expression and storing is also done*/

let age = 25; // Number
let uname = "Shreyas" // String
let isSTudenet = true // Boolean
let skills = ['JS','HTML'] //object
let user = {city : "Bhople"}; //object
x= null; // object
y = undefined; //undefined
z= Symbol('id') //Symbol

console.log(typeof(age),typeof(uname),typeof(isSTudenet),typeof(skills),typeof(user),typeof(x),typeof(y),typeof(z))

console.log(1/0) //infinty
console.log(0/0) //NaN
console.log(Number('abc'),undefined + 1) //NaN

//Use Null when we know value we are going to give
//Use Undefined when we don't know if value changes or not

