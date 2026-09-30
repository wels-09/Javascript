// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

const areaOfRectangle = (l, w) => {
    return  l * w
}
console.log(areaOfRectangle(7, 9));

function areaOfRectangle1 (l, w){
    return l * w
}
console.log(areaOfRectangle1(7, 9));

const addOfRectangle2 = function(L,W){
    return L * W
}
console.log(addOfRectangle2(7, 9))

// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const perimeterOfRectangle = (l,w) => {
    return 2 * l * w
}
console.log(perimeterOfRectangle(7,9));

function perimeterOfRectangle1 (l,w){
    return 2 * l* w
}
console.log(perimeterOfRectangle1(7,9))

const perimeterOfRectangle2 = function(L,W){
    return 2 * L * W
}
console.log(perimeterOfRectangle2(7,9));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.


const volumeOfPrism = (l, w, h) => {
    return l * w * h
}
console.log(volumeOfPrism(2,3,4))

function volumeOfPrism1 (l, w, h) {
    return l * w * h
}
console.log(volumeOfPrism1(2,3,4));

const volumeOfPrism2 = function(l, w, h){
    return l * w * h
}
console.log(volumeOfPrism2(2,3,4));

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle = (r) => {
    return 2 * Math.PI * r
}
console.log(circumOfCircle(4))

function circumOfCircle1 (r) {
    return 2 * Math.PI * r
}
console.log(circumOfCircle1(4));

const circumOfCircle2 = function(r){
    return 2 * Math.PI * r
}
console.log(circumOfCircle2(4));

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density= (m, v) => {
    return m / v
}
console.log(density(4,3));

function density1 (m, v) {
    return m / v 
}
console.log(density1(4,3));

const density2 = function(m, v){
    return m / v
}
console.log(density2(4, 3));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

const distance = (s, t) => {
    return s * t
}
console.log(distance(6,2));

function distance1 (s, t) {
    return s * t
}
console.log(distance1(6,2));

const distance2 = function(s, t){
    return s * t
}
console.log(distance2(6, 2));
