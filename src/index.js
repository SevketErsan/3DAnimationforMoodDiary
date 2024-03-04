import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <>
    <h2 style={{ textAlign: "center" }}>3D Animation for Mood Diary</h2>
    <p style={{ textAlign: "center" }}>Touch your mood!</p>
    <App />
  </>
);
