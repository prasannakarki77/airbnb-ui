import "./App.scss";
import Header from "./header/Header";
import Stays from "./stays/Stays";
import { StaysProvider } from "./contexts/StaysContext";
import SearchBar from "./searchBar/SearchBar";
import { useState } from "react";
function App() {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const handleOnClose = () => setOpenSearchBar(false);
  return (
    <div className="container">
      <StaysProvider>
        <Header />
        <Stays />
        <SearchBar onClose={handleOnClose} visible={openSearchBar} />
      </StaysProvider>
    </div>
  );
}

export default App;
