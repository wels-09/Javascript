// // 1.Write a loop that makes the following pattern using console.log():

// //     #
// //     ##
// //     ###
// //     ####
// //     #####
// //     ######
// //     #######
// for (let i = 1; i <= 7; i++){
//     console.log('#'.repeat(i));
// }

// // 2.Use loop to print the following pattern:

// // 0 x 0 = 0
// // 1 x 1 = 1
// // 2 x 2 = 4
// // 3 x 3 = 9
// // 4 x 4 = 16
// // 5 x 5 = 25
// // 6 x 6 = 36 
// // 7 x 7 = 49
// // 8 x 8 = 64
// // 9 x 9 = 81
// // 10 x 10 = 100

// for (let i = 0; i <=10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// // 3.Using loop print the following pattern

// //  i    i^2   i^3
// //  0    0     0
// //  1    1     1
// //  2    4     8
// //  3    9     27
// //  4    16    64
// //  5    25    125
// //  6    36    216
// //  7    49    343
// //  8    64    512
// //  9    81    729
// //  10   100   1000

// for (let i = 0; i <= 10; i++){
//     console.log(`${i} ${i**2} ${i**3}`)
// }

// 4.Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++){
    if (i % 2 === 0){
    console.log(i, 'even number')}
}

// // 5.Use for loop to iterate from 0 to 100 and print only odd numbers
// for (let i = 0; i <= 100; i++){
//     if (i % 2 === 1){
//         console.log(i, 'odd number')   
//     }
// }


// // 6.Use for loop to iterate from 0 to 100 and print only prime numbers
// for (let i = 2; i <= 100; i++){
//     let prime = true; 
//     for (let k = 2; k < i; k++){
//         if (i % k === 0){
//             prime = false;
//             break;
//         }
//     }
//     if (prime){
//         console.log(i)
//     }
// }

// // 7.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for (let i = 0; i <= 100; i++){
//     sum = sum + i
    
// }
// console.log('The sum is', sum );