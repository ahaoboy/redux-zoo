import { model, createStore } from "@modern-js/runtime/model";
import auto from "@modern-js-reduck/plugin-auto-actions";
const countModel = model("count").define({
  state: {
    value: 1,
  },
  actions: {
    add(state) {
      return {
        ...state,
        value: state.value + 1,
      };
    },
    sub(state, p = 2) {
      return {
        ...state,
        value: state.value - p,
      };
    },
  },
});
export const store = createStore({
  // models: [countModel],
  plugins: [auto],
});
export default countModel;
