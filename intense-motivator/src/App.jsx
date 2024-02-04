import "./App.css";
import Quote from "./components/Quote";

function App() {
  return (
    <>
      <h1 className="title">Quote Generator</h1>
      <div className="card">
        <Quote />
      </div>
    </>
  );
}

export default App;
