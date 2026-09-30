// Quadratic equation is calculated as follows: ax2 + bx + c = 0. 
// Write a function which calculates value or values of a quadratic equation, 
// solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// Quadratic Equation:
// x = -b (+/-) * sqrt(b * b - 4 * a * c)/ (2 *a)
function solveQuadraticEquation(a,b,c) {
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant < 0){
        return [];
        // complex number (no real roots) 
    }

    if (discriminant === 0) {
        const root = -b / (2 * a)
        return [root === -0 ? 0 : root]; 
        // Array with 1 element
    }
    // discriminant > 0
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2]
    // Array with 2 element
}

console.log(solveQuadraticEquation());
console.log(solveQuadraticEquation(1, 4, 4));
console.log(solveQuadraticEquation(1, -1, -2));
console.log(solveQuadraticEquation(1, 7, 12));
console.log(solveQuadraticEquation(1, 0, -4)); 
console.log(solveQuadraticEquation(1, -1, 0));

// a simple calculator

function calculator(num1, operator, num2) {
    if (operator === "+") {
        return num1 + num2;
    } 
    else if (operator === "-") {
        return num1 - num2;
    } 
    else if (operator === "*") {
        return num1 * num2;
    } 
    else if (operator === "/") {
        if (num2 === 0) {
            return "Cannot divide by zero";
        }
        return num1 / num2;
    } 
    else {
        return "Invalid operator";
    }
}

console.log(calculator(10, "+", 5)); 
console.log(calculator(10, "-", 5)); 
console.log(calculator(10, "*", 5)); 
console.log(calculator(10, "/", 5)); 