import logo from "./logo.svg";
import "./App.css";
import { ButtonTest } from "@knowfully/hackathon-library.components.button-test";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test of Components</p>
      </header>
      <div>
        <ButtonTest text={"Test from client"}></ButtonTest>
      </div>
    </div>
  );
}

export default App;
