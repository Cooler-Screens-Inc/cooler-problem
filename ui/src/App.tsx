import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

const API = "http://localhost:4000";

function App() {
  const [apiMsg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get<{ message: string }>(API)
      .then(({ data }) => setMsg(data.message))
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>{apiMsg}</p>
      </header>
    </div>
  );
}

export default App;
