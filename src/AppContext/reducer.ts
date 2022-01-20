import * as fromActions from "./actions";
import { counterList } from "./counterList";

export interface AppReducerState {
  orderData: any[];
  counterList: any[];
  selectedCounterCode: string;
  dialogOpen: boolean;
}

export const AppInitialState: AppReducerState = {
  orderData: [],
  counterList: counterList,
  selectedCounterCode: "",
  dialogOpen: false,
};

export function AppReducer(state: AppReducerState, action: fromActions.AppActions): AppReducerState {
  switch (action.type) {
    case fromActions.ActionTypes.UpdateOrdersData: {
      return {
        ...state,
        orderData: action.payload,
      };
    }
    case fromActions.ActionTypes.CloseDialog: {
      return {
        ...state,
        dialogOpen: false,
      };
    }
    case fromActions.ActionTypes.SetSelectedCounterCode: {
      return {
        ...state,
        selectedCounterCode: action.payload,
        dialogOpen: true,
      };
    }
    default:
      return state;
  }
}
