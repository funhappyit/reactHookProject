import logo from "./logo.svg";
import "./App.css";
import Info from "./Info";
import { useState } from "react";
import Counter from "./Counter";
import Average from "./Average";

const App = () => {
  /*
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"};
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
  */
  return <Average />;
};

export default App;
