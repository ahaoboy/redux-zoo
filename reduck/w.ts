import { createWasm,useCCall,useCWrap } from "u-wasm";
import { readFileSync } from "fs";
export async function load() {
  const buf = readFileSync("./math.wasm");
  const cwrap = useCWrap();
  const ccall = useCCall();
  const w = await createWasm(buf);
  const wasm = w.use(cwrap).use(ccall);
  console.log(wasm.ccall("add", 1, 1));
  const fib = wasm.cwrap("fib");
  console.log(fib(10));
  return wasm;
}
load();
