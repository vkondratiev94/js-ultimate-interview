// ES5
function tripleAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// ES6
const tripleAdd = (a) => (b) => (c) => a + b + c;

// Task: returns total of all 3 numbers added together
tripleAdd(10)(20)(30);
