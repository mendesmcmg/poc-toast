import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

const useToast = () => {
  const { state, dispatch } = useContext(ToastContext);
  function toast(type, message, link) {
    const id = Math.random();
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
    }, 4000);
  }

  return toast;
};

export default useToast;
