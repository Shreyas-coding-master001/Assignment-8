//            --- Assignemnt - 3 ---
// Question 7
/*
let age = prompt("Enter Age: ");
if(age === null){
    console.warn("You Entered cancel");
}else if(parseInt(age.trim())){
    age > 18? console.log("Eligible"):console.log("Not Eligible");
}else{
    console.error("Invalid Number");
}
*/
// Question 8
console.log("   --- Table -> 5 ---")
for(let i=1;i<=10;i++){
    console.log(`5 x ${i} = ${5*i}`);
}
console.log("   --- End ---")

// Question 9
for(let i = 1;i<16;i++){
    if(i > 8){
        console.log(`${i} is greater then 8`)
    }
}

// Question 10
let userspassword = prompt("Create a password: ");
let password = prompt("Enter Password: ");
if(userspassword === password) console.log("Correct Password");
else console.log("Enter wrong password.");

//Question 11

let i = 0,access=false;
do{
    let check = prompt("Enter password: ");
    if(check === userspassword) {
        console.log("Correct password.\n Login Successfull");
        break;
    }else console.log(`Wrong password ${3- i} try's left`);
    i++;
}while(i < 4);


//Question 12

let typed = null,count = 0;
while(true){
    typed = prompt("Type yes or stop");
    if(typed === "")console.log("Please Write Something");
    else if(typed === null) console.error("You pressed cancel");
    else{
        typed = typed.trim().toLowerCase();
        if(typed === "stop") break;
        else if(typed === "yes") count++;
        else console.error("Please type yes or no");
    }
}

console.log(`Yes count ${count}`);



// Question 13 
// only used this onces ok 👍
let sum = 0;
for(let i = 7;i<51;i+=7){
    console.log(`${i} is divisible by 7`);
    sum += i;
}


//Question 14
sum= 0;
for(let i=0;i<31;i++){
    if(i%2 !== 0) sum += i;
}
console.log(`Sum of odd ${sum}`);

//Question 15

do{
    let num = prompt("Enter a number: ");
    if(num === "") console.warn("Entered nothing");
    else{
        num = parseInt(num.trim());
        if(!num) console.error("Enter a number please");
        else if(num % 2 === 0) break;
    } 
}while(true)

//Question 16
let start= prompt("Enter Starting value: ");
let end = prompt("Enter a Ending: ");

if(start === "" || end === "") console.warn("Empty values entered");
else if(start === null || end === null) console.warn("Press cancel");
else {
    start = parseInt(start);end = parseInt(end);
    if(isNaN(start) || isNaN(end)) console.log("Please enter number"); 
    else {
        if(start > end){
            let temp = start;
            start = end;
            end = temp;
        }
        for(let i = start;i<end;i++){
            console.log(i);
        }
    }
}

//Question 17
count = 0;
for(let i=1;i<20;i++){
    if(i%2 !== 0){
        count++;
        if(count > 3) break;
    }   
}

//Question 18
count = 0;
let asked = 0
while(asked !== 5){
    let num = prompt("Enter a number: ");
    if(num === "") console.error("Enter Blank OK");
    else if(num === null) console.warn("Pressed cancel")
    else {
        num = parseInt(num.trim());
        if(num){
            if(num > 0) count++;
            asked++;
        }
        else console.error("Please enter a number...") 
    }
}
console.log(`Postive number entered ${count} and negative are ${5-count}`)

//Question 19 

let balance = 1000,valid= false;
asked = 0;
while(asked <= 3){
    let amount = prompt("Enter withdrawal amount...");
    if(amount === null || amount === "") console.log("Nothing withdraw");
    else{ 
        amount = parseInt(amount.trim());
        if(amount){
            if(amount > balance) console.log("YE BHIK MANGYA..ITNA PAISA NAHI HE TERE PASS");
            else{
                balance -= amount;
                console.log("Amount Withdrawn");
            }
            valid = true;
            break;
        }
        else console.error("Invalid number!!!")
    }
    asked++;
}
if(valid) console.log(`Current Balance: ${balance}`);
else console.error("Account locked!!")