import useStore, { useStore2 } from "./store";
import Show1 from "./components/Shwo1";
import Show2 from "./components/Show2";
import "./App.css";

function App() {
  const { count } = useStore();
  const { count2 } = useStore2();

  return (
    <div style={{ textAlign: "center", margin: "1rem" }}>
      <h1>Global</h1>
      <h1>count1: {count}</h1>
      <h1>count2: {count2}</h1>
      <hr />
      <Show1 />
      <hr />
      <Show2 />
    </div>
  );
}

export default App;
