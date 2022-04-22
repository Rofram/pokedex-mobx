import { createContext, useContext } from "react";
import AppStore from "./AppStore";

const store = {
  app: AppStore()
}

export const StoreContext = createContext(store);

export const useStore = () => useContext(StoreContext);

export default store;