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
        style={{ backgroundColor: checked ? "gray" : buttonColor }}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
      <input
        id="disable-checkbox"
        type="checkbox"
        onChange={(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="disable-checkbox">Disable button</label>
    </div>
  );
}

export default App;
