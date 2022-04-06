import { store, service } from "./store";
import { useSnapshot } from "valtio";
function A() {
  console.log("A");
  const { a } = useSnapshot(store);
  return <h1>a:{a}</h1>;
}
function B() {
  console.log("B");
  const { b } = useSnapshot(store);
  return <h1>b:{b}</h1>;
}
function App() {
  console.log("app");
  return (
    <>
      <A></A>
      <B></B>
      <button
        onClick={() => {
          service.send("TOGGLE");
        }}
      >
        TOGGLE
      </button>
    </>
  );
}

export default App;
