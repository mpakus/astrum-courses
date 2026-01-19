import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserCard from "./Components/UserCard";
import picUrl from "./assets/pic-1.png";

const grades = {
  1: { name: "2^0", color: "#FF0000" },
  2: { name: "2^1", color: "#FF7F00" },
  4: { name: "2^2", color: "#FFFF00" },
  8: { name: "2^3", color: "#00FF00" },
  16: { name: "2^4", color: "#00FFFF" },
  32: { name: "2^5", color: "#0000FF" },
  64: { name: "2^6", color: "#8B00FF" },
  128: { name: "2^7", color: "#FF00FF" },
};

function App() {
  let [numbers, setNumbers] = useState([]);
  let [bytes, setBytes] = useState([128, 64, 32, 16, 8, 4, 2, 1]);

  function SummaryNumber() {
    return (
      <div>
        <h1>🗑️ Number: {numbers.reduce((acc, curr) => acc + curr, 0) || 0}</h1>
      </div>
    );
  }

  function checkNumber({ num }) {
    if (numbers.includes(num)) {
      setNumbers(numbers.filter((n) => n !== num));
    } else {
      setNumbers([...numbers, num]);
    }
  }

  function toggleBytesOrder() {
    setBytes((prev) => [...prev].reverse());
  }

  return (
    <>
      <SummaryNumber />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {bytes.map((byte, index) => (
            <li key={`byte_${byte}`} className="check">
              <input
                type="checkbox"
                id={`byte_${byte}`}
                onChange={() => checkNumber({ num: byte })}
              />
              <label htmlFor={`byte_${byte}`}>
                <strong style={{ color: grades[byte]["color"] }}>{byte}</strong>{" "}
                <small>({grades[byte]["name"]})</small>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <p>
        <button onClick={toggleBytesOrder}>← Toggle Order →</button>
      </p>

      <img src={picUrl} alt="Binary Bytes" style={{ width: "100%" }} />
    </>
  );
}

export default App;
