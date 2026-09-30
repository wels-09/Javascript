// const arr = []
// const arr2 = new Array()

const cars = ["BMW","VOLVO","FERARI","LAMBO"]
console.log(cars[2]);
console.log(cars[3]);
console.log(cars.length);
console.log(cars.toString());


const data = [1,2,3,4,"monday","teusday","wedenesday",false,true,undefined]
console.log(data[0]);
console.log(data[8]);
data[9]= null
console.log(data)
data[6] = "thursday"
// concat
console.log(data.concat(cars))
const num1 =[1,2,3,4]
const num2 = [5,6,7,8,9]
console.log(num1.concat(num2));

// indexOf
const fruits = ["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]

console.log(fruits.indexOf("Potato"));

console.log(fruits.indexOf("Carrot"));

// lastIndexof

const numbers = [1, 2,1, 3,1, 4, 5,1, 3, 1, 2]
console.log(numbers.lastIndexOf(5));
console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(1));

console.log(numbers.indexOf(1));

// includes
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 
console.log(fruits.includes("strawberry"));
console.log(webTechs.includes("CSS"));


// isArray
const today = "friday"
console.log(Array.isArray(webTechs));
console.log(Array.isArray(today));
// 
// join
 
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
] 
console.log(names.join(" # "));
console.log(webTechs1.join(" - ").split());

// slice
const no = [0,1,2,3,4,5,6,7,8,9,10]
console.log(no.slice(0,9));

console.log(webTechs1.slice(0,4));

// splice
console.log(no);

console.log(no.splice(4,3));
console.log(no);

const del = no.splice(4,3)
console.log("deleted:",del);

const add = no.splice(2,5,8,9,0,7,9)
console.log("added:",add);
console.log("remaining:",no);

console.log(no.splice(2,5,8,9,0,7,9));

const fruit = ["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]

console.log(fruit.splice(2,2))
console.log(fruit);

console.log(fruit.splice(3,2))
console.log("fruit:",fruit);

console.log(fruit.splice(2,0,"apple","grape","watermelon"))
console.log(fruit)

// push

console.log(fruit.push("blueberry","cocoa","strawberry"));
console.log(fruit);

let newArr = []
newArr.push("christian","victor","azeem","Nnamdi","Aliamin")
console.log(newArr);


// pop
console.log(newArr.pop());
console.log(newArr.pop());