import { useModel } from "@modern-js/runtime/model";
import countModel from "./models/count";

function Counter() {
  const [state, actions] = useModel(countModel);
  return (
    <div>
      <div>counter: {state.value}</div>
      <button onClick={() => actions.add()}>add</button>
      <button onClick={() => actions.sub(10)}>sub</button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}

