import produce from "immer";
 
const c = produce(1, (d) => {
  d += 1;
});
// 1
console.log(c)