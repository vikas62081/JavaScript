const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const evenNumbers = numbers.filter((number, index, array) => number % 2 == 0);
// console.log(evenNumbers);

Array.prototype.myFilter = function (func) {
  let filtered = [];
  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      filtered.push(this[i]);
    }
  }
  return filtered;
};

// console.log(numbers.myFilter((num) => num % 2 != 0));

const students = [{ name: "Vikas" }, { name: "Gorge" }];

console.log(students.myFilter((stu) => stu.name == "vikas"));
