var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    console.log(`${init} + ${nums[i]} * ${nums[i]}  = ${fn(init, nums[i])}`);
    init = fn(init, nums[i]);
  }

  return init;
};

let nums = [1, 2, 3, 4];
let fn = (accum, curr) => {
  return accum + curr * curr;
};
let num = 100;

console.log(reduce(nums, fn, num));
