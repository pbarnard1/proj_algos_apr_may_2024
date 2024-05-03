function greetings(name) {
    name = "Hello " + name;
}

let myName = "Adrian";
greetings(myName);
console.log(myName); // We get the original string; it's not updated

function addNumber(arr, newVal) {
    arr.push(newVal);
}
let myArr = [1, 3, 10];
addNumber(myArr, 5);
console.log(myArr); // The value 5 was added and stays there