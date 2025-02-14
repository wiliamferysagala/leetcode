var createCounter = function (init) {
  let chache = init;
  return {
    increment: () => {
      return ++chache;
    },
    reset: () => {
      return (chache = init);
    },
    decrement: () => {
      return --chache;
    },
  };
};

const counter = createCounter(5);

console.log("1 " + counter.increment());
console.log("2 " + counter.decrement());
console.log("3 " + counter.increment());
console.log("4 " + counter.increment());
console.log("5 " + counter.reset());
console.log("6 " + counter.decrement());
console.log("7 " + counter.decrement());
console.log("8 " + counter.reset());
