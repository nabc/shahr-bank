import React, { createContext, useReducer, Dispatch, PropsWithChildren, useContext } from "react";
import * as fromAppActions from "./actions";
import { AppInitialState, AppReducer, AppReducerState } from "./reducer";

const AppContext = createContext<{
  state: AppReducerState;
  dispatch: Dispatch<fromAppActions.AppActions>;
}>({
  state: AppInitialState,
  dispatch: () => null,
});

export interface AppProviderProps {}

function AppProvider({ children }: PropsWithChildren<AppProviderProps>) {
  const init = {
    ...AppInitialState,
  };
  const [state, dispatch] = useReducer(AppReducer, init);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
}

function useApp() {
  const context = useContext(AppContext);

  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
}

export { AppProvider, useApp, fromAppActions };
