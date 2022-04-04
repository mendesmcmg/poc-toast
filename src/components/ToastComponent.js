import React, { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import "./Toast.css";

function Toast() {
  const { state } = useContext(ToastContext);

  return (
    <div className="notification-container bottom-right">
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

              <span className="notification-message">{notification.message}</span>
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