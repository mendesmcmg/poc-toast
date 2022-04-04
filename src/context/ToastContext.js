import { createContext, useReducer } from "react";

export const ToastContext = createContext();

export const ToastContextProvider = (props) => {
  const notifications = [];

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_NOTIFICATION":
        return [...state, action.payload];
      case "DELETE_NOTIFICATION":
        const updatedToasts = state.filter(
          (notification, index) => index !== action.payload
        );
        return updatedToasts;
      case "CLEAR_NOTIFICATIONS":
        if (action.payload > 0) {
          return state.filter(
            (notification, index) =>
              index !== action.payload && index !== action.payload - 1
          );
        }
        break;
      default:
        return state;
    }
  }, notifications);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ToastContext.Provider>
  );
};
