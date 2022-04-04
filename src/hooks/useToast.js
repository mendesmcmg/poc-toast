import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

const useToast = () => {
  const { state, dispatch } = useContext(ToastContext);
  function toast(type, message, link) {
    const id = state.length;
    dispatch({
      type: "ADD_NOTIFICATION",
      payload: {
        id,
        type,
        message,
        link,
        linkMessage: "Learn more",
        color: type === "success" ? "#4BB543" : "#EF5350"
      },
    });
    setTimeout(() => {
      dispatch({
        type: "DELETE_NOTIFICATION",
        payload: id,
      });
    }, 3000);
    setTimeout(() => {
      dispatch({
        type: "CLEAR_NOTIFICATIONS",
        payload: id,
      });
    }, 5000);
  }

  return toast;
};

export default useToast;
