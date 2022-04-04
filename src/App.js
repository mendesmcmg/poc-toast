import "./App.css";
import Toast from "./components/ToastComponent";
import useToast from "./hooks/useToast";

const App = () => {
  const toast = useToast();

  return (
    <div>
      <div className="main-content">
        <button
          className="button button--success"
          onClick={() => toast("success", "oieeee")}
        >
          SUCCESS
        </button>
        <button
          className="button button--error"
          onClick={() => toast("error", "HAHAY")}
        >
          ERROR
        </button>
      </div>
      <Toast />
    </div>
  );
};

export default App;
