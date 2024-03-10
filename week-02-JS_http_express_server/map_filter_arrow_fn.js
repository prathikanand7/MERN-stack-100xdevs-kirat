//*******Arrow Functions*******

//both are same only difference is how they get binded
function sum(a, b) {
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}


//both are same
app.get("/", (req, res) => {
    
});

app.get("/", function (a, b) {
    
});

const ans = sum(1, 2);
console.log(ans);

//------------------------------------------------------//

//*******Maps*******

//given an array and give me back a new array in which every value is multiplied
// by 2

const input = [1, 2, 3, 4, 5];

//common solution
const newArray = [];

for (let i = 0; i < input.length; i++){
    newArray.push(input[i] * 2);
}
console.log(newArray);

//cleaner solution
function transform(i) {
    return i * 2;
}
const ans1 = input.map(transform);

//or we can put the function directly into the line
const an2 = input.map(function (i) {
    return i * 2;
});
console.log(ans);

//------------------------------------------------------//

//*******Filters*******

//given an array and give me back a new array
//with all the even values from it

const arr = [1, 2, 3, 4, 5];

//simple ans
const newArray2 = [];
for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
        newArray2.push(arr[i]);
    }
}
console.log(newArray2);


//using filtering logic
function filteringLogic(n) {
    return n % 2 == 0;
}

const arr3 = arr.filter(filteringLogic);
console.log(arr3);

//or make an anonymous function
const arr4 = arr.filter(function (n) {
    return n % 2 == 0;
});
console.log(arr4);

//string problems
const users = ["ajay", "john", "raman"];
const arr5 = users.filter(function (n) {
    return n.startsWith("a");
});
console.log(arr5);