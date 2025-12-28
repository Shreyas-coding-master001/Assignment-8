//            --- Assignemnt - 4 ---
console.log("\t --- OOPS --- ");
// Question 1
/* // This is Normally
let user = {
    name: "Shreyas",
    email: "shreyas@gmail.com",
    login: function(){
        console.log("USer Logged in");
        
    }
}
let user1 = {
    name: "Shreyas",
    email: "shreyas@gmail.com",
    login: function(){
        console.log("USer Logged in");
        
    }
}
let user2 = {
    name: "Shreyas",
    email: "shreyas@gmail.com",
    login: function(){
        console.log("USer Logged in");
        
    }
}
let user3 = {
    name: "Shreyas",
    email: "shreyas@gmail.com",
    login: function(){
        console.log("USer Logged in");
        
    }
}
let user4 = {
    name: "Shreyas",
    email: "shreyas@gmail.com",
    login: function(){
        console.log("USer Logged in");
        
    }
}
*/

//This is using classes
// class User{
//     constructor(){
//         this.name = "Name"
//         this.email = "email"
//     }
//     login(){
//         console.log("User Logged in"); 
//     }
// }

// const user1 = new User();
// const user2 = new User();
// const user3 = new User();
// const user4 = new User();
// const user5 = new User();


let Product = {
    name: "shirt",
    price: 1000,
    finalPrice: function(discount){
        return this.price - discount
    }
}

let user1 =  Product.finalPrice(200);
console.log(user1);

let user2 =  Product.finalPrice(500);
console.log(user2);

//Question-2
class Car{
    constructor(brand,speed){
        this.brand = brand
        this.speed = speed
    }
    drive(){
        console.log(this.brand, this.speed);
    }
}

let car1 = new Car("Bugati",600)
let car2 = new Car("Audi",400)
/* Answer: With large Projects writing each values would take months😂 with objects, but classes helps to reduce it */

//Question-3
class Student{
    constructor(name,roll){ 
        this.name = name
        this.roll = roll
    }

    introduce(){
        console.log(`Hello, Myself ${this.name} and my roll number is ${this.roll}`);
        console.log(this);
    }
    
    introduceName = ()=>{
        console.log(`Hello, Myself ${this.name} `)
        console.log(this);
    }
}

let student1 = new Student("Yash",14);
let student2 = new Student("Kaivalya",24);

//Question-4
function User(){
    // this.login = () =>{
    //     console.log("Logged In");
    // }       
}

User.prototype.login = function(){
    console.log("Logged In");
}

user1 = new User();
user2 = new User();

//True for prototype and false for methods

//Question-5
function Employee(a,b,c){
    console.log(this.name);
    console.log(this.id);
    console.log(a,b,c);
    this.Work();
}

let obj = {
    name : "Yash",
    id : 12345,
    type : "Employee",
    Work : function(){  
        console.log("Working");
    }
}

let emp1 = Employee.bind(obj,1,2,3);
emp1();

console.log("\t ---Separate Using Call ---");

Employee.call(obj,1,2,3);