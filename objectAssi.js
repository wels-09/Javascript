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
// console.log(Object.values(library))
// Object.values(library).forEach(el => {
//     console.log(el.title)
// });

for (const key in library){
    console.log(library[key].title)
}


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

const user = {
    name: "Nnamdi",
    email: "nwankwon100@gmail.com",
    address: ["Prince Fadina Street", "Olodi-Apapa", "lagos"] 
}

const {name, email, address} = user
console.log(name);
console.log(email)
console.log(address[1])

const car = {
    brand: "toyota",
    model: {value: "Camry"},
    year: 2022
}

const vehicle = car
console.log(vehicle)
vehicle.brand = "Honda"
console.log(vehicle)
vehicle.model.value = "civic";
console.log(vehicle);

const motorCycle = {
    brand: "honda"
}

const copy = { ...motorCycle}
motorCycle.brand = "toyota";
console.log(motorCycle)
console.log(copy);

const contactCard = {
    name: "Nnamdi",
    phone: "93891289",
    sendMessage(text){
        console.log(`Sending ${text} to ${this.name}`) 
    }
}

contactCard.sendMessage("hi")
Object.freeze(contactCard)
contactCard.phone = 39339032;
console.log(contactCard)