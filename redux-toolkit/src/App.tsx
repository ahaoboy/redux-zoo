import { decrement, increment } from "./counter";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";

function App() {
  const count = useSelector((state: RootState) => state.c.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
