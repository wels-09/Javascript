// 1
function monthDay(Month){
    let month = Month.toLowerCase()
    if (month === "september" || month === "april" || month === "november" || month === "june"){
       console.log(`${Month} has 30 days`) ;
    } else if (month === "february"){
        console.log(`${Month} has 29 days`) ;
    } else if(month === "january" || month === "march" || month === "may" || month === "july"|| month === "august" || month === "october" || month === "december"){
        console.log(`${Month} has 31 days`) ;
    } else {
        console.log("input correct month")
    }
}

monthDay("March");

// 2
let cart = ["pencil", "pen", "book", "Tea", "Honey"]
cart.unshift("Meat");
console.log(cart);

cart.push("Sugar")
console.log(cart);

cart[4] = "Green Tea"
console.log(cart);
 // 4
let country = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", 
"HUNGARY", "IRELAND", "JAPAN", "KENYA"]
let countries = country.map((el) => {
    return el + ", "+ el.slice(0, 3) + ", " + el.length
})
console.log(countries)
// 5
const findMax = function(a, b, c){
    let max = a
    if (b > max){
        max = b
    }
    if (c > max){
        max = c
    }
    console.log(max)
}

findMax(10,9,7)
// 6
function swapValues(x, y){
   console.log( [x, y]=[y, x])
}
swapValues(3,4)
swapValues(4,5)

// 7.
const users = {
 Alex: {
 email: 'alex@alex.com',
 skills: ['HTML', 'CSS', 'JavaScript'],
 age: 20,
 isLoggedIn: false,
 points: 30
 },
 Asab: {
 email: 'asab@asab.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
 age: 25,
 isLoggedIn: false,
 points: 50
 },
 Brook: {
 email: 'daniel@daniel.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
 age: 30,
 isLoggedIn: true,
 points: 50
 },
Daniel: {
 email: 'daniel@alex.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
 age: 20,
 isLoggedIn: false,
 points: 40
 },
 John: {
 email: 'john@john.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
 age: 20,
 isLoggedIn: true,
 points: 50
 },
 Thomas: {
 email: 'thomas@thomas.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'React'],
 age: 20,
 isLoggedIn: false,
 points: 40
 },
 Paul: {
 email: 'paul@paul.com',
 skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
 age: 20,
 isLoggedIn: false,
 points: 40
 }
}

// count users having greater than equal to 50 points from the following object.
//  Find people who are MERN stack developer from the users object

Object.values(users).forEach((el) => {
    if (el.points >= 50) {
    console.log(`User having greater than equal to 50 points: ${el.email}`)
    }
})

Object.values(users).forEach((el) => {
    if (el.skills.includes('MongoDB', 'Express', 'React', 'Node')){
        console.log(`MERN stack developer: ${el.email}`)
    }
})

const companies = [
 {name:'company One',category:"Fianance",start:"1981",end:"2004"},
 {name:'company Two',category:"Retail",start:"1992",end:"2008"},
 {name:'company Three',category:"Auto",start:"1999",end:"2007"},
 {name:'company Four',category:"Retail",start:"1989",end:"2010"},
 {name:'company Five',category:"Technology",start:"2009",end:"2014"},
 {name:'company Six',category:"Fianance",start:"1987",end:"2010"},
 {name:'company Seven',category:"Auto",start:"1986",end:"1997"},
 {name:'company Eight',category:"Technology",start:"2011",end:"2016"},
 {name:'company Nine',category:"Retail",start:"1981",end:"1989"}
];

// Get companies that started in or after 1980 and ended in or before 2005.
// GET COMPANY NAME AND CATEGORY.

companies.forEach((el) => {
    if (Number(el.start) >= 1980 && Number(el.end) <= 2005){
    console.log(`COMPANY NAME: ${el.name}  and it's category: ${el.category}`)
    }
})

function isPalindrome(str){
    const word = str.toLowerCase()
    const reverseWord = word.split('').reverse().join('')
    if(word === reverseWord){
         console.log(true)
    }else {
        console.log(false)
    }
}

isPalindrome('racecar')

let words = "Nnamdi";
let reverseString = words.split("").reverse().join("")
console.log(reverseString)
