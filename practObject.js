const company = [
    {
        name:"Tech Innovators Inc",
        location:"San Francisco",
        departments:[
            {
                name:"Engineering",
                manager:"Alice Johnson",
                staff:[
                    {name:"Bob Smith",position:"Developer"},
                    {name:"Emily Davis",position:"Junior Developer"}
                ]
            }
        ]
    },
    {
        name:"Maketing",
        manager:"Micheal Brown",
        staff:[
            {name:"Sara Lee",position:"Specialist"},
            {name:"Tom Wilson",position:"Strategist"}
        ]
    },
    {
        name:"Creative solution Inc",
        location:"New York",
        departments:[
            {
                name:"Design",
                manager:"Kare White",
                staff:[
                    {name:"Leo Carter",position:"Designer"},
                    {name:"Nina Patel",position:"UI/UX Designer"}
                ]
            }
        ]
    },
    {
        name:"Sales",
        manager:"James Green",
        staff:[
            {name:"Olivia Turner",position:"Executive"},
            {name:"Ethan Harris",position:"Manager"}
        ]
    }
]

console.log(company[1].staff[1]["position"])
console.log(company[2].departments[0].staff[0]["name"]);
console.log(company[3].manager);
console.log(company[2].departments[0].staff[1].position);
console.log(company[1].staff[0].position)


// const person = {
//   firstName: 'Asabeneh',
//   age: 250,
//   country: 'Finland',
//   city:'Helsinki',
//   skills: ['HTML', 'CSS', 'JS'],
//   title: 'teacher',
//   address: {
//     street: 'Heitamienkatu 16',
//     pobox: 2002,
//     city: 'Helsinki'
//   },
//   getPersonInfo: function() {
//     return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//   }
// }

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty
// person.DOB = '11-12-1999'
// const copyPerson = Object.assign({}, person)
// console.log("copy person",copyPerson)
// console.log(Object.keys(person.address))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// console.log("original person",person)
// console.log("hasOwnProperty",person.hasOwnProperty('secondName'))

// const person2 = new Object()
// person2.name = "godswill"
// person2.lastname = "chukwuma"
// person2.age = 25
// person2.country = "Nigeria"
// person2.complexion = "fair"
// person2.name = "ibrahim"

// console.log(person2);