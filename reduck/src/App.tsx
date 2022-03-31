import { useModel } from "@modern-js/runtime/model";
import countModel, { store, useStore } from "./models/count";

function Counter() {
  const [state, actions] = store.use(countModel);
  // const [state, actions] = useModel(countModel);
  console.log("store2", state, actions.setValue);
  console.log(actions.setValue);
  console.log(Object.keys(countModel));
  // actions.setValue(1)

  return (
    <div>
      <div>counter: {state.value}</div>
      <button onClick={() => actions.add()}>add</button>
      <button onClick={() => actions.sub(10)}>sub</button>
      <button onClick={() => actions.setValue(1)}>sub</button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}

declare function eq<T>(x: readonly any[]): x is T[];

function g(y: any) {
  const x = 1;
  const v = [y, x];
  if (eq<number>(v)) {
    const z = v[0] + v[1];
  }
}
