//  declaration function
function functionName(){
    // code goes here
}
functionName()
// calling the function by it's name and with parenthesis

function functionName() {
    // code goes here 
}
// calliing the function by it's name and with parenthesis

function functionName(){
    // code goes here
}
// calling the functon by it's name and with parenthesis

function functionName() {
    // code goes here
}
// calling the function by it's name and with parenthesis

function functionName(){
    // code goes here
}
// calling the function by it's name and with parenthesis

// function square(){
//     let a = 7;
//     let b = a * a;
//     console.log(b)
// }

// square()

// function addTwoNumbers(){
//     let a = 5;
//     let b = 4;
//     let c = a + b;
//     console.log(c);
    
// }
// addTwoNumbers()

// function mutipleTwoNum() {
//     let a = 3;
//     let b = 2;
//     let c = a * b;
//     console.log(c);
// }

// mutipleTwoNum()

// function divisionTwoNum(){
//     let a = 4;
//     let b = 3;
//     let c = a / b;
//     console.log(c);
// }
// divisionTwoNum()

function printFullName(){
    let firstName = "Nnamdi"
    let lastName = "Nwankwo"
    let fullName = firstName + " " + lastName
    return fullName
}
console.log(printFullName());

function square(){
    let a = 2;
    let b = a * a;
    return b
    
}
console.log(square());

function addTwoNumbers(){
    let a = 2;
    let b = 4;
    let c = a + b;
    return c
}
console.log(addTwoNumbers());

function printFullName1(firstName, lastName){
    return firstName + " " + lastName
}
console.log(printFullName('Nnamdi', 'Nwankwo'));

function add(num1, num2){
    return num1 + num2
}
console.log(add(2, 4));

function areaOfACircle(radius){
    return Math.PI * radius * radius
}

console.log(areaOfACircle(8))


// FUNCTION EXPRESSION
// const functionName = function(){

// }

// const square = function(){

// }

// const squareRoot = function(){

// }

// const add = function(){

// }

// const substract = function(){

// }

// const multiple = function(){

// }

// const divide = function(){

// }
// const fullName = function(){

// }

// const email  = function () {

// }

const add1 = function(a, b){

    return a +b
}
console.log(add1(2,3));

const printFullName2 = function(firstName, lastName){
    return firstName + " " + lastName
}
console.log(printFullName2("Ikedi", "Nwankwo"));

const square3 = function(){
    let a = 3
    b = a * a
    return b
}
console.log(square3());

const areaOfCircle = function(radius){
    return Math.PI * radius * radius
}
console.log(areaOfCircle(4));

const addTwoNumber2 = function(a, b){
    return a + b
}
console.log(addTwoNumber2(2, 3)); 
// dafault declaration
function generateFullName(firstName = "Nnamdi", lastName = "Nwankwo"){
    return firstName + " " + lastName
}
console.log(generateFullName())
console.log(generateFullName('Ikedi', 'Obu'))

// const functionName = () => {

// }

const fullName3 = (firstName, lastName) => {
return firstName + " " + lastName
}
console.log(fullName3('Nnamdi', 'Nwankwo'))

const areaOfACircle1 = (radius) => {
    return Math .PI * radius * radius
}
console.log(areaOfACircle1(2));

const addThreeNumber2 = (a, b, c) => {
    return a + b + c
}
console.log(addThreeNumber2(3,8,40));

const square4 = (a) => {
    return a * a
}
console.log(square4(3))