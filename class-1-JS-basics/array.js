// Write a program prints all the even numbers in an array 
let ages = [1, 2, 3, 45, 67, 87, 88, 92, 34, 55, 76, 79];

for (let i = 0; i <= ages.length; i++) {
    if (ages[i] % 2 == 0)
        console.log(ages[i])
}
// Write a program to print the biggest number in an arrya
let max = 0;
let i = 0;
while (i <= ages.length) {
    if (max < ages[i])
        max = ages[i + 1]
    i++;
}
console.log(max)

// Write a program that prints all the male people’s first name given a complex object
const personArray = ["raman", "ajay", "shreya"];
const genderArray = ["male", "male", "female"];

for (let i = 0; i < personArray.length; i++) {
    if (genderArray[i] == "male")
        console.log(personArray[i])
}

// Using objects in JS
const users = [{
    firstName: "raman",
    gender: "male"
}, {
    firstName: "ajay",
    gender: "male"

}, {
    firstName: "shreya",
    gender: "female"
}]

for (let i = 0; i < users.length; i++) {
    if (users[i]["gender"] == "male")
        console.log(users[i]["firstName"])
}
