const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach((el) => console.log(el))
names.forEach((n) => console.log(n))
numbers.forEach((num) => console.log(num))

const Countries = countries.map((co) => console.log(co.toUpperCase()))
const countriesLenght = countries.map((co) => co.length)
console.log(countriesLenght)
const square = numbers.map((num) => num * num)
console.log(square)
const name1 = names.map((n) => n.toUpperCase())
console.log(name1)

const landCountry = countries.filter((co) => 
     co.includes("land"))
console.log(landCountry)
const lenghtCountries = countries.filter((co) => {
    return co.length === 6
})
console.log(lenghtCountries)
const lenghtcountry = countries.filter((co) => {
    return co.length >= 6
})
console.log(lenghtcountry)
const coun = countries.filter((co) => {
    return co.startsWith("E")
})
console.log(coun)

const euroCountries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const country1 = euroCountries.reduce((a, c) => {
    return a + c + ", "
}, '')
console.log(country1 + "are north European Countries")