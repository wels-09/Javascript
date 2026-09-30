// for (let i = 1; i <= 12; i++) {
//     if (i === 12){
//      break;  
//     } 
//     console.log(i)
// }

// let a = 1
// while (a <= 10){
//     if (a  % 2 === 0){
//         break
//     }
//     console.log(a)
//     a++   
// }

// let b = 3
// do {
//     if (b % 2 === 0){
//         continue
//     }
//     console.log(b)
//     b++
// }while(b <= 10)

let k = 0
while (k <= 100){
    if (k % 2 === 0){
        console.log(k, 'even number')
    } else {
        console.log(k)
    }
    k++
    break
}

for (let i = 0; i <= 15; i++){
    if (i === 6){
        continue;
    }
    console.log(i)
}