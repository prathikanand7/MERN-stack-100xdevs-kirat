console.log("hello world");
// console.log(a);

const a = 1;
// a = 100;
console.log(a);

// Write the program to greet a person given their first name and age
let firstName = "Ajay";
let age = 18;
let isMarried = false;

console.log("this person's name is " + firstName + " and their age is " + age)

// Write a program that greets a person based on their maritial status.
if (isMarried) 
    console.log(firstName + " is not married");
else
{    console.log(firstName + " is married");}

// Write a program that counts from 0 - 100 and prints the sum of it
let answer = 0;
for(let count=0; count<=100;count++){
    answer+=count;
}
console.log(answer);