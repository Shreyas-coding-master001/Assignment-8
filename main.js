  
// Question 1
let a =10,b=3;
console.log("Addition: ",a+b,"\nSubutraction",a-b,"\nMultiplication: ",a*b,"\nDivision: ",a/b,"\nModulus: ",a%b)

// Question 2
let x = 5;x=x+3
console.log("X:",x,"-> += :",x += 3,"-= :",x -=3,"*= :",x *= 3,"/= :",x /= 3);

// Question 3
let count = 5;
console.log("   --- Count -> 5 ---")
console.log("Before:",count++,"After:",count)
console.log("Before:",count--,"After:",count)

// Question 4
if (5 == '5') console.log("Same number different DataType notstrickly");
if(5 === "5") console.log("Same number different DataType strickly");
else console.log('Need to Number("5")');

//Question 5
if(a>5 && a<20 && a == 10) console.log("  -- Q5: True  ---")
else console.log("False")

//Qestion 6
console.log(`T && F : ${true && false}`)
console.log(`T || F : ${true || false}`)
console.log(`!T : ${!true}`)

// Question 7
console.log(" --- Q7: Both true: ",(5 > 3 && 10 > 8),(5 > 3 || 10 < 8))

/*
//Question 8

*/

console.log(bb)
var bb = 10;


console.log("Q1. undefined\nQ2. Error(not initialization)\nQ3.Hello\nQ4.Error(TYpeError)\nQ5.Able to use variable before declaration. (b)let\n ")


let age = Number(prompt("Enter Age: "))
if(age >= 18)console.log("Adult");
else console.log("Minor");

let marks = prompt('Enter your Marks: ')
if (marks >= 90 ) console.log("A grade");
else if (marks >= 75) console.log("“B grade”");
else if (marks >= 50) console.log("“C grade”");
else console.log("“Fail”");

let city = "Bhopal";
if (city == 'Bhopal') console.log("MP");
else if (city == 'Delhi') console.log("Capital");
else console.log("Unkown city");

let score = 40;
(score >35)? console.log("Pass"):console.log("Fail")

let temperature = 27;
(temperature > 30)?console.log("HOt"):console.log("PLeasant")

let day=5;
switch (day){
    case 1 :console.log("Monday");break;
    case 2 :console.log("Tuesday");break;
    case 3 :console.log("Webnesday");break;
    case 4 :console.log("Thusday");break;
    case 5 :console.log("Friday");break;
    case 6 :console.log("Saturday");break;
    case 7 :console.log("Sunday");break;
    default: console.log("Invalid Number")
}

let country = 'india';
if(age>18 && country == 'india')console.log("Eligible for Vote");
else console.log("Not Eligible");