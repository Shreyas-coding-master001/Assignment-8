//            --- Assignemnt - 4 ---
console.log("\t --- Easy Questions --- ");
// Question 1
function SayHello(){
    console.log("Hello Javascript");
}

SayHello();
//Question 2
function sum(a,b){
    result = a+b;
    console.log(result);
    return result;
}

let ans = sum(5,10);
//Question 3
function Name(name="Guest"){
    console.log(`Hello ${name}`);
}

Name();
// Question 1+3=4 
function Add(...num){
    let sum = num.reduce((acc,val)=>{
        return acc + val; 
    },0);
}

console.log(Add(5,10,15,20,100,120,22,33,55));

//Question 1+4=5
(function(){
    console.log("I run instantly!");
}());

//Question 1+5=6
function ouuer(){
    let a = "Ouuer(Upar wale function) se aya hu";
    function inner(){
        console.log(a);
    }
    inner();
}
ouuer();

//Question 1+6=7
arr= ["apple", "banana", "grapes", "mango", "orange"];

let removeFruit = arr.pop();
arr.unshift(removeFruit);

//Question 1+7=8
// Thodi checting chalti he 😅😅
arr.forEach( val => console.log(val) );

//Question 1+8 =9
let person = {
    name: "John",
    age: 69,
    city: "Dholakpur",
};

console.log(Object.keys(person));

//Question 1+9=10 

setTimeout(()=>{
    console.error("2's but no instructions!")
}, 5000);


console.log("\t --- Level-2 Questions --- ");
// Question 1
function runTwicwe(fn){
    fn();
    fn();
}
runTwicwe(()=>{console.log("Running twice!")});

// Question 2
let gobal = 4;
function pure(input){
    return input * 2;
}

function impure(){
    gobal++;
    console.log(gobal);
}

// Question 3
function Distructure({name,age}){
    console.log(`Name is ${name} and age is ${age}`);
}

Distructure({name: "John", age: 30});

// Question 4
let obj = {
    fun1: function(){
        console.log(this);
        () => console.log(this);
    },
    fun2:() => {console.log(this); },
}

obj.fun1();
obj.fun2();


// Question 5
arr = [1,2,3,4,5,6];
arr = arr.map(val => val**2);
console.log(arr);

// Question 6
let arr2 = arr.filter(val => val%2 === 0);
console.log(arr2);

// Question 7
arr = [1000,2000,3000];
sum = arr.reduce((acc,val)=>acc + val,0);
console.log(`The Total salary is ${sum}`);

// Question 8
let username = ["alice", "bob", "charlie", "dave"];

// username= ['yes','no','ok'];
if(username.some(val => val.length > 3)){
    console.log("In name array some are more than 3 characters");
}else{
    console.log("All names are 3 or less than 3 characters");   
}

if(username.every(val => val.length > 3)){
    console.log("In name array all are more than 3 characters");
}else{
    console.log("Some names are 3 or less than 3 characters");   
}

// Question 9
obj = {
    name: "Alen Waker",
    age: 40,
    city: "New York"
}

console.log(Object.keys(obj));

// Question 10

setTimeout(()=>console.warn("TimeUp"),2000);
