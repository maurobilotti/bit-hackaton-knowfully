import logo from "./logo.svg";
import "./App.css";
import { ButtonTest } from "@knowfully/hackathon-library.components.button-test";
// import IconPicker from "@knowfully/hackathon-library.components.icon-picker";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Test of Components</p>
      </header>
      <div>
        <ButtonTest
          text={"Test from client"}
          style={{ backgroundColor: "yellow" }}
        ></ButtonTest>
      </div>
      <div>
        {/* <IconPicker
          value="fab fa-accessible-icon"
          onChange={(value: string) => console.log(value)}
        /> */}
      </div>
    </div>
  );
}

export default App;
