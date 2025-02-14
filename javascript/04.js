var map = function (arr, fn) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

function plusone(n) {
  return n + 1;
}

function plusI(n, i) {
  return n + i;
}

console.log(map([1, 2, 3], plusone));
console.log(map([1, 2, 3], plusI));
