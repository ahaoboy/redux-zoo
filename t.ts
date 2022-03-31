const state = {
  data: 1,
};

function useA<T>(n: T): asserts n is T & { a: number } {}

console.log(state.data);

useA(state);
console.log(state.a)