// const number =  [1,2,3,4,5,6]
// const newNumber = number.map((num) => {
//     return num * num
// })
// const num = number.reduce((a,c)=> {
//    return a + c / number.length
// }, 0)
// console.log(num)
// console.log(newNumber)


// const country = countries.map((el) => {
//     return el.slice(0,3) + " " + el.length
// })
// console.log(country)

//     // const coun = countries.forEach((el) => el.slice(0, 3) 
//     // el.lenght)
// const landCountry = countries.filter((el) => {
//     return el.endsWith("ia")
// })
// console.log(landCountry);

// const land = countries.filter((el) => {
//     return el.length === 7
// })
// console.log(land);

// const countries1 = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "IceLand"];

// const result = countries1.reduce((acc, country) => acc + country + ", ", "");

// console.log(result + "are north European countries");

  


//findlast
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const lastCountry = countries.findLast((coun) =>  coun.includes('land'))
console.log(lastCountry);

