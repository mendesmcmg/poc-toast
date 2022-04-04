import React, { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import "./Toast.css";

function Toast() {
  const { state, dispatch } = useContext(ToastContext);

  function handleClose(id) {
    dispatch({
      type: "DELETE_NOTIFICATION",
      payload: id,
    });
  }
  // problema: quando vai mais de uma, a última a ser criada 
  // é a primeira a ser deletada e a primeira não some

  return (
    <div className="notification-container top-left">
      {state.map((notification) => {
        console.log(notification);
        const index = state.indexOf(notification);
        return (
          <div
            style={{
              backgroundColor: state[index].color,
            }}
            key={index}
            className="notification toast bottom-right"
          >
            <button
              onClick={() => handleClose(index)}
              className="close-button"
            />

              <p className="notification-message">{notification.message}</p>
              {notification.link && (
                <a href={notification.link}>
                  {notification.linkMessage}
                </a>
              )}
          </div>
        );
      })}
    </div>
  );
}

export default Toast;