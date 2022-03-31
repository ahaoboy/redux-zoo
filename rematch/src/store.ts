import { init, RematchDispatch, RematchRootState } from "@rematch/core";
import { models, RootModel } from "./models";
import selectPlugin from "@rematch/select";

export const store = init({
  models,
  plugins: [selectPlugin<RootModel>()],
});

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel>;
