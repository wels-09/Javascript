let person = {
    name: "Ibrahim",
    age: 22,
    city: "Dubai"
}
console.log(person.name)
console.log(person.city)
console.log(person.city)

let a = "10"
console.log(typeof a);
console.log(typeof Number(a));

let b = 20
console.log(typeof b)
console.log(typeof String(b))
console.log(typeof (a + b))

const car = {
    brand: "Toyota",
    model: "corolla",
    year: 2022,
    isElectric: false
}
let key = "brand"
console.log(car[key]);

let info = {"full name" : "Amine Bello"};
console.log(info["full name"])
console.log(info.nnnnnnfullname)

// adding, substracting and updating

const car1 = {
    brand: "Toyota",
    year: 2026,
    receipt: 12000000000,
    liscence: "New"
}

car1.color = "blue"
car1.brand = "GLE 53 AMG"
console.log(car1);

car1.year = 2026;
car1.liscence =  2092026

delete car1.color

console.log(car1);

const student1 = {
    name : "christian",
    month: "3rd",
    introduce: function() {
        console.log(`Hi, I'm ${this.name} and I'm in the ${this.month} month of my Front-End course`)
    }
}
student1.introduce();

const student2 = {
    name: "Amina",
    introduce(){
        console.log(`Hi, I'm ${this.name}`)
    }
}
student2.introduce()
const student = {
    name: "Amina",
    address: {
        city: "Lagos",
        country: "Nigeria"
    },
    subjects : ["Math", "Biology", "English", "Further-Maths", "chemistry", "Psychology"]
}

console.log(student.address.city)

student.address.cities= student.address.city.split(',').concat(['kano', 'kaduna', 'jos']);
delete student.address.city
console.log(student.address.cities)
console.log(student)

let name = "Amina"
let age = 16

const student3 = { name: name, age: age}

const student4 = { name, age};

let field = "score";
const result = {
    [field]: 9905
}
console.log(result.score)

const car2 = {brand: "Toyota"}
console.log("brand " in car);
console.log("color" in car);


const user = { name: "Alice", age: 25, city: "Lagos" };

// Traditional way
const name3 = user.name;
const age3 = user.age;

// With destructuring
const { name4, age, city } = user;

console.log(name4); // "Alice"
console.log(city); // "Lagos"

const student56 = { name: "Amina"};
console.log(student56.address?.city)


const student6 = {
    name: "John",
    age: "20",
    course: "computer science",
    level: "500LVL"
}


const book = {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1858,
    isAvailable: true
}


console.log(book.title);
console.log(book.author);
console.log(book.year)
console.log(book.isAvailable)


const book1 = {
    title: "Good to Great",
    author: "Jim Collins",
    year: 1980,
    isAvailable: true,
    describe(){
        console.log(`${this.title} was written by ${this.author} in ${this.year }`)
    }
}

book1.describe()

book1.isAvailable = false
delete book1.year
console.log(book1)
const library = {
    book2: {
        title: "The Mythical Man-Month",
        author: "Frederick P. Brooks Jr."
    },
    book3: {
        title: "The One Minute Manager",
        author: "Ken Blanchard and Spencer Johnson "
    },
    book4: {
        title: "In Search of Excellence",
        author: "Tom Peters and Robert H. Waterman Jr."
    }
}
console.log(Object.values(library))
Object.values(library).forEach(el => {
    console.log(el.title)
});

for (const key in library){
    console.log(library[key].title)
}

[
  {
    title: 'The Mythical Man-Month',
    author: 'Frederick P. Brooks Jr.'
  },
  {
    title: 'The One Minute Manager',
    author: 'Ken Blanchard and Spencer Johnson '
  },
  {
    title: 'In Search of Excellence',
    author: 'Tom Peters and Robert H. Waterman Jr.'
  }
]

const cart = {
    item1: {
        itemName: "Fab",
        quantity: 4,
        price: 500  
        },
    item2: {
        itemName: "padlock",
        quantity: 2,
        price: 1000
    },
    item3: {
        itemName: "shoe",
        quantity: 3,
        price: 3000
    }    
}

const totalPrice = Object.values(cart).reduce((a,c)  => {
    return a + (c.price * c.quantity)
}, 0)
    
console.log(totalPrice);


