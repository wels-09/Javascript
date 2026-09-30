// let students = ["john", "mary", "peter", "david", "james"];

// for(let student of students) {
//     console.log(student.toUpperCase());
// }

// let sentence = "Javascript is very powerful";

// let words = sentence.split(" ");

// for (let word of words) {
//     console.log(word);
// }

// console.log(words);

// let product = "Samsung Galaxy Phone";
// let search = "gaLaxy";

// if 
// (product.toLowerCase().includes(search.toLowerCase())){
//     console.log("Product found");
// }

// let phone = "08012345678";
// let countryCode = "+234";
// let formatted = countryCode + phone.substring(1);
// console.log(formatted);

// let Students = ["John", "Mary", "Peter", "David"];
// for (let i = 0; i <Students.length; i++) {
//     console.log(Students[i])
// }

// let emails = [
//     "john@gmail.com",
//     "mary@yahoo.com",
//     "peter@gmail.com",
//     "david@hotmail.com"
// ]
// for (let email of emails) {
//     if (email.includes("@gmail.com")) {
//         console.log(`email + is a Gmail address`);
//     }i
// }

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }


// let battery = 20;

// while (battery < 100){
//     console.log('Charging:', battery+"%");
//     battery += 10;
// } console.log ('Battery full!');


// let savings = 5000;  
// let weeks = null;

// let num = 9;

// num % 2 === 0 ?console.log(num, 'even number') 
// :console.log(num,'odd number')

// let Age = 13;
// Age >= 18 ?console.log('Adult') 
// :console.log('minor')

// let Num = 0;
// Num < 0 ?console.log('negative number') :console.log('positive number');



for (let num = 2; num <= 100; num++) {

    let prime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(num);
    }
}




































































