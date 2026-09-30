// for (let num = 2; num <= 100; num++) {
//     let prime = true;
//     for (let i = 2; i < num; i++){
//         if (num % i === 0){
//             prime = false
//             break;
//         }
//     }
//     if (prime){
//         console.log(num)
//     }
// }

let Email = '       NNNNNNwannon@gmail.com   ';

console.log(Email.trim().toLowerCase())

let pin = '1028383801100109';
let lastFour = pin.slice(-4);
let maskedCard = lastFour.padStart(pin.length, '*')
console.log(maskedCard);

let link = 'http: //zninfii.com';

console.log(link.startsWith('http: //') && link.endsWith('.com')||link.endsWith('.ng'));

let sentence = 'javascript string methods are fun';
let TitleCased = sentence
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1))
.join(" ")
console.log(TitleCased);

let censorWord = 'The secret code is secret';
console.log(censorWord.replaceAll('secret',"Redacted"))