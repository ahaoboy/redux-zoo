import { createMachine, interpret } from "xstate";
import { proxy } from "valtio";

export const store = proxy({
  a: 0,
  b: 0,
});
export interface ToggleContext {
  a: number;
  b: number;
}

export const toggleMachine = createMachine<ToggleContext>({
  id: "toggle",
  initial: "inactive",
  context: store,
  states: {
    inactive: {
      on: { TOGGLE: "active" },
      entry: (ctx) => {
        ctx.b++;
      },
    },
    active: {
      entry: (ctx) => {
        ctx.a++;
      },
      on: { TOGGLE: "inactive" },
    },
  },
});
const service = interpret(toggleMachine);
service.onTransition((state) => {
  console.log("onTransition", state, state.value);
});
service.start();
export { service };
