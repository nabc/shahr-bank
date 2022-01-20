import { ParamsModel } from "src/types";
import { getInstance } from "./generalInstance";

const launchesInstance = getInstance();

export const LaunchesService = {
  past(params: ParamsModel) {
    return launchesInstance.get<any, any>("/past", {
      params: { ...params },
    });
  },
  upcoming(params: ParamsModel) {
    return launchesInstance.get<any, any>("/upcoming", {
      params: { ...params },
    });
  },
  latest() {
    return launchesInstance.get<any, any>("/next");
  },
};
