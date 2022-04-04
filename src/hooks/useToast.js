// useToast: trigger toast with type (success or error) and message
// useToast code is below:
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

const useToast = () => {
  const { state, dispatch } = useContext(ToastContext);
  function toast(type, message) {
    const id = state.length;
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id,
        type,
        message,
        color: type === "success" ? "#4BB543" : "#E74C3C",
      },
    });
    setTimeout(() => {
      dispatch({
        type: "DELETE_NOTIFICATION",
        payload: id,
      });
    }, 3000);
  }

  return toast;
};

export default useToast;
