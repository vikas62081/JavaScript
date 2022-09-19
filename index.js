//Check empty array object in javascript
const array = []; // false
const object = {}; // false
//simple function
// const _isEmptyArray = (arr) => {
//   return arr?.length == 0;
// };

// prototype function

Array.prototype._isEmpty = function () {
  return this?.length == 0;
};

// console.log(array._isEmpty());

Object.prototype._isEmpty = function () {
  return Object.keys(this)?.length == 0;
};
console.log(object._isEmpty());
