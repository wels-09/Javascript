// 1
const empty = [];
// 2
const num =[1,2,3,4,5,6,7]
console.log(num.length)
console.log(num[0]);
console.log(num[3]);
console.log(num[6]);

const mixedDataTypes = [1,2,3,4,5,"Red Bull", null]

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple","IBM", "Oracle", "Amazon"]
console.log(itCompanies);
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);
console.log(itCompanies.toString())
console.log(itCompanies.join(" ").toUpperCase().split(" "));
for(i = 0; i < itCompanies.length; i++){
    console.log(`${itCompanies[i]} is a company`)
}

console.log(`${itCompanies.slice(0,-1).join(", ")} and ${itCompanies[itCompanies.length-1]} are big IT companies`)

let company = "Facebook";

if (itCompanies.includes(company)){
    console.log(company)
} else {
    console.log("a company is not found")
}
// console.log(itCompanies.includes("Facebook"));

console.log(itCompanies.sort());
console.log(itCompanies.reverse())

console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice(3,6))
console.log(itCompanies.slice(2,3))
itCompanies.shift()
console.log(itCompanies)
itCompanies.splice(3,1)
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)
itCompanies.splice(0,itCompanies[itCompanies.length-1])
console.log(itCompanies.splice(0,itCompanies[itCompanies.length-1]))
