import logo from "./logo.svg";
import "./App.css";
import Header from "./header/Header";
import Stays from "./stays/Stays";
import { StaysProvider } from "./contexts/StaysContext";
function App() {
  return (
    <div className="container">
      <StaysProvider>
        <Header />
        <Stays />
      </StaysProvider>
    </div>
  );
}

export default App;
