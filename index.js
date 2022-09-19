//String sorting in javascript

const names = ["Vikas", "akash", "Ryan"];
const customSort = (a, b) => {
  let firstLetter = a.toUpperCase();
  let secondLetter = b.toUpperCase();
  if (firstLetter > secondLetter) {
    return 1;
  } else if (firstLetter < secondLetter) {
    return -1;
  }
  return 0;
};
console.log(names.sort(customSort));
