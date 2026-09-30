//switch(caseValue){
//    case 1:
        // code
//        break
//    case 2:
        // code
//    case 3:
        // code
//        break
//        default:
        //code
//}

let Grade = 90
switch (true) {
    case Grade >= 80 && Grade <= 100:
        console.log('A');
        break;
    case Grade >= 70 && Grade <= 79:
        console.log('B');   
        break;
    case Grade >= 60 && Grade <= 69:
        console.log('C');
        break;
    case Grade >= 50 && Grade <= 59:
        console.log('D');
        break;
    case Grade >= 0 && Grade <= 49:
        console.log('F');
        break;
    default:
        console.log('Input Correct Grade');
        break;
}


