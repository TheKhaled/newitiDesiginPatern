import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RunIterators from "./assets/src/compents/runIterators";
import Toasts from "./assets/src/Toast/Toasts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      look at consle please
      <RunIterators></RunIterators>
      if you want to run toast tasek remove the comment
      {/* <Toasts></Toasts> */}
    </>
  );
}

export default App;
