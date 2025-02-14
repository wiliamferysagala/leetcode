function expect(val) {
  return {
    toBe: function (val1) {
      if (val === val1) {
        return { value: true };
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: function (val1) {
      if (val !== val1) {
        return { value: true };
      } else {
        throw new Error("Equal");
      }
    },
  };
}

function testFunc(func) {
  try {
    return func();
  } catch (error) {
    return { error: error.message };
  }
}

console.table(testFunc(() => expect(4).toBe(3)));
console.table(testFunc(() => expect(4).toBe(4)));
console.table(testFunc(() => expect(4).notToBe(4)));
console.table(testFunc(() => expect(4).notToBe(null)));
