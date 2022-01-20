export type AppEssentialsState = "initial" | "pending" | "success" | "fail" | "noData";

export enum ActionTypes {
  UpdateOrdersData = "[App] UpdateOrdersData",
  CloseDialog = "[App] CloseDialog",
  SetSelectedCounterCode = "[App] SetSelectedCounterCode",
}

export interface UpdateOrdersData {
  type: ActionTypes.UpdateOrdersData;
  payload: any[];
}

export interface CloseDialog {
  type: ActionTypes.CloseDialog;
}

export interface SetSelectedCounterCode {
  type: ActionTypes.SetSelectedCounterCode;
  payload: string;
}

export type AppActions = UpdateOrdersData | CloseDialog | SetSelectedCounterCode;

export function updateOrdersData(payload: any[]): AppActions {
  return {
    type: ActionTypes.UpdateOrdersData,
    payload,
  };
}

export function closeDialog(): AppActions {
  return {
    type: ActionTypes.CloseDialog,
  };
}

export function setSelectedCounterCode(payload: string): AppActions {
  return {
    type: ActionTypes.SetSelectedCounterCode,
    payload,
  };
}
