import { useState } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [checked, setChecked] = useState(false);
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        style={{ backgroundColor: buttonColor }}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
    </div>
  );
}

export default App;
