var filter = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = fn(arr[i], i);
    if (element) {
      result.push(arr[i]);
    }
  }

  return result;
};

function greaterThan10(n) {
  return n > 10;
}

function firstIndex(n, i) {
  return i === 0;
}

function plusOne(n) {
  return n + 1;
}

let arr = [-2, -1, 0, 1, 2];

console.log(filter(arr, plusOne));
