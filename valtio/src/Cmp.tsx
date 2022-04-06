import { proxyWithComputed } from "valtio/utils";
import { proxy, useSnapshot } from "valtio";

const storeA = proxy({ a: 1 });


const storeB = proxyWithComputed(
  { b: 1 },
  {
    c(s) {
      return storeA.a + s.b;
    },
  }
);
function App() {
  const { c } = useSnapshot(storeB);
  // const { a } = useSnapshot(storeA);
  return (
    <div>
      <h2>
        {/* a:{a} */}
        c:{c}
      </h2>
      {/* don't render */}
      <button onClick={() => storeA.a++}>incA</button>
      {/* render */}
      <button onClick={() => storeB.b++}>incB</button>
    </div>
  );
}
export default App;
