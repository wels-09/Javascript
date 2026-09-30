// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight (m, g){
  return m * g
}
console.log(weight(4, 9.81));

// // Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function oF (oC){
  return (oC * 9/5) +  32
}
console.log(oF(23));

// // Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. 
// Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.

// // The same groups apply to both men and women.
// // Underweight: BMI is less than 18.5
// // Normal weight: BMI is 18.5 to 24.9
// // Overweight: BMI is 25 to 29.9
// // // Obese: BMI is 30 or more

function BMI (weight, height){
  let bmi = weight / (height * height)
  if (bmi < 18.5){
    return "Underweight"
  } else if (bmi >= 18.5 && bmi <= 24.9){
    return "Normal weight"
  } else if (bmi >= 25 && bmi <= 29.9){
    return "Overweight"
  } else if (bmi > 30){
    return "Obese"
  } else {
    return"Input Correct Information"
  }
}

console.log(BMI(90, 1))

// // Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month){
  let monthOfTheYear = month.toLowerCase()
  if(monthOfTheYear === 'march' || monthOfTheYear === 'april' || monthOfTheYear == 'may'){
    return "Spring"
  } else if (monthOfTheYear === 'june' || monthOfTheYear === 'july' || monthOfTheYear === 'august'){
    return "summer"
  } else if (monthOfTheYear === 'september' || monthOfTheYear === 'october' || monthOfTheYear === 'november'){
    return "Autumn"
  } else if (monthOfTheYear === 'december' || monthOfTheYear === 'january' || monthOfTheYear === 'february'){
    return "Winter"
  } else{
    return "Input Correct Information="
  }
}

console.log(checkSeason('JANUary'))

// // Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// function findMax(num1, num2, num3){
//   return Math.max(num1, num2,num3)
// }
// console.log(findMax(0, 10, 5));
// console.log(findMax(0, -10, -2));

function maxNum(num1, num2, num3) {
  let max = num1
  if (num2 > num1){
    max = num2
  }
  if (num3 > num1){
    max = num3
  }
  return max
}

console.log(maxNum(90.89,2728))