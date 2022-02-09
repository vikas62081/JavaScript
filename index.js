// How to Flatten Array and Object in JavaScript

//input
const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]]
const obj = {
    name: "Vikas", age: 24,
    address: { flatNo: 32, city: "Chennai", }
}

//output
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// obj = { name: "Vikas", age: 24, flatNo: 32, city: "Chennai" }

//using javascript function
// console.log(arr.flat(Infinity)) //arr.flat(1)

const flattenArray = (arr) => {
    const newArr = [];
    const getFlattenArr = (arg) => {
        arg.forEach(dt => {
            if (Array.isArray(dt)) {
                getFlattenArr(dt)
            } else {
                newArr.push(dt)//pushing new element to array
            }
        })
    }
    getFlattenArr(arr)
    return newArr;
}


// console.log(flattenArray(arr))

// console.log(obj)
const flattenObj = (object) => {
    const newObj = {}
    const getFlattenObj = (obj) => {
        // obj['name']//Vikas
        Object.keys(obj).forEach(key => {
            if (typeof obj[key] == "object") {
                getFlattenObj(obj[key])
            } else {
                newObj[key] = obj[key]// adding new property with value
            }
        })
    }
    getFlattenObj(object)
    return newObj
}


console.log(flattenObj(obj))


