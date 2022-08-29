import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Stays from "./stays/Stays";

function App() {
  return (
    <div className="container">
      <Header />
      <Stays />
    </div>
  );
}

export default App;
