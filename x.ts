import produce from "immer";

const baseState = [
  {
    title: "Learn TypeScript",
    done: true,
  },
  {
    title: "Try Immer",
    done: false,
  },
];

const nextState = produce(baseState, (draftState) => {
  draftState.push({ title: "Tweet about it" });
  draftState[1].done = true;
});
console.log(nextState);

const a = { a: 1 };
const b = produce({ a: 1 }, (d) => {
  d.a = 2;
});

console.log(a, b, a === b);
const c = produce({ a: 1 }, (d) => {
  d.a = 1;
});
console.log(a, c, a === c);