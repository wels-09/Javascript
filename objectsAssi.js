const book1 = {
    title: "Good to Great",
    author: "Jim Collins",
    year: 1980,
    isAvailable: true,
    describe(){
        console.log(`${this.title} was written by ${this.author} in ${this.year }`)
    }
}
book1.isAvailable = false
delete book1.year
console.log(book1);

const library = {
    book1: {
        title: "The Origins of Business, Money, and Markets",
        author: "Keith Roberts",
        quantity: 2,
        price: 2000
    },
    book2: {
        title: "The Everything Start Your Own Business Book",
        author: "Judith B. Harrington", 
        quantity: 3,
        price: 3000
    },
    book3: {
        title: "Launch",
        author: "Jeff Walker",
        quantity: 4,
        price: 2500
    }
}

Object.values(library).forEach((el) => 
    console.log(el.title)

)

// exercise 5
console.log( Object.values(library))
const totalPrice = Object.values(library).reduce((a,c) =>{
    return a + (c.price * c.quantity)
},0)
console.log(totalPrice);

// exercise 6
const user = {
    name: "Nnamdi",
    email: "nwankwon100@gmail.com",
    address: {
        street: "prince fadina",
        area: "Olodi-Apapa",
        city: "lagos"
    }
}

const {name, email} = user
console.log(name);
console.log(email)
const {street, area, city} = user.address
console.log(city)

// exercise 7
const a = { value: 30};
const  b = a;
b.value = 100;
console.log(a)

const car = {
    brand: "honda"
}
const copy = { ...car}
car.brand = "toyota";
console.log(car) ;
console.log(copy);

const contactCard = {
    name: "Ikedi",
    phone: 874828732873,
    email: "ndwiewinw@gmail.com",
    sendMessage(text){
        console.log(`Sending ${text} to ${this.name}`)
    }
}
contactCard.sendMessage("hi")
Object.freeze(contactCard);
contactCard.phone = 83456593458
console.log(contactCard);