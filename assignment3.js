// 1.​ 1 to 10 Print
// Write a loop that prints all integers from 1 to 10 in ascending order.

for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}

// 2.​ Sum of N Numbers
// Write a loop that calculates the total sum of all numbers from 1 up to a given number n.

let n = 10;
let sum = 0
for(let i = 1; i <= n; i++) {
    sum += n;
    console.log(sum);
    
}


// 3.​Even Numbers Printer
// Write a loop that prints all even numbers between 1 and 20.

for (let i = 1; i <= 20; i++) {
     console.log(i);  
    } 


// 4.​Countdown Timer
// Write a loop that counts down from 10 to 1, and then prints "Liftoff!" once the loop finishes.

for (let i = 10; i >= 0; i--){
    if(i === 0){
        console.log("Liftoff")
    }else{
        console.log(i)
    }
}

// 5.​Multiplication Table
// Given a number (for example, 5), use a loop to print its multiplication table from 1 to 10 (e.g., 5 x 1 = 5, 5 x 2 = 10, etc.).

for (let i = 0; i <= 10; i++) {
    let j = 3;
    console.log(`${j} * ${i} = ${j*i}`)
}

let word = "apple";
let target = 'p'
let count = 0;
for (let i = 0; i < word.length; i++) 
    ; {
    if (word[i] === target) {
        count++;
        
    }
}
console.log(count);

let f = 5;
let result = 1;
for(let i = 1; i <= f; i++){
    result *= i;
}
console.log(result);

let word1 = "world";
let reserved = '';

for (let i = word1.length - 1; i >=  0; i--){
    reserved += word1[i];
}
console.log(reserved);