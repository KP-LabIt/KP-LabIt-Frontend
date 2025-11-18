import "./App.css";
import kpLogo from "./images/kpLogo.jpg";
import AddTest from "./components/AddTest";

function App() {
  return (
    <>
      <div className="appContainer">
        <h1 className="titleTest">Test Stránka</h1>
        <AddTest />
      </div>
    </>
  );
}

export default App;
