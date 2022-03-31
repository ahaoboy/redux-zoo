type Fn = (...args: any[]) => any;
type State = Record<string, any>;
type Actions = Record<string, Fn>;

type Store<S, A extends Record<string, Fn>> = {
  dispatch: (
    ...[action, payload]: {
      [k in keyof A]: {
        type: k;
        payload: A[k] extends (...args: infer Arg) => any ? Arg : never;
      };
    }[keyof A]
  ) => void;
  ac: A;
  st: S;
};

// declare function addDispatch: <F extends Fn>(
//     name: string,
//     fn: (state: S, ...args: any[]) => Partial<S>
//   ) => void;
//   declare function  removeDispatch: (name: string) => void;

type Model<S, A> = {
  state: S;
  actions: {
    [k in keyof A]: A[k] extends (...args: infer P) => any
      ? (state: S, ...args: P) => Partial<S>
      : any;
  };
};
declare function defineStore<S, A>(
  c: Model<S, A>
): Store<S, Model<S, A>["actions"]>;

const store = defineStore({
  state: { count: 1 },
  actions: {
    add(state, payload = 1) {
      return { count: state.count += payload };
    },
  },
});
const st = store.st;
const ac = store.ac;

store.dispatch("add", 1);

store.addDispatch("sub", (state, payload = 1) => {
  return { count: state.count -= payload };
});

store.dispatch("sub", 1);
store.removeDispatch("sub");
