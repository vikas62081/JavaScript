// Nested Object Destructuring in JavaScript
const person = {
    name: "Vikas", age: 24,
    address: {
        permanent: { flatNo: 23, city: "Chennai" },
        temporary: { flatNo: 34, city: "Delhi" }
    },
    phone: [987654345, 879846527]
}
person.name//Vikas
person.age//24
const { name: userName, age,
    address: { permanent: { city: homeTown }, temporary }, phone } = person
console.log(homeTown)//Chennai
console.log(userName)
const [mobileNumber, telephone] = phone
console.log(mobileNumber)//987654345