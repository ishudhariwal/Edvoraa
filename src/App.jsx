import "./App.scss";
import Filter from "./components/filter/Filter";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Rides from "./components/rides/Rides";

import EdvoraState from "./context/edvora/EdvoraState";

function App() {
  return (
    <EdvoraState>
      <div className="App">
        <Navbar />
        <Header />
        <Filter />
        <Rides />
      </div>
    </EdvoraState>
  );
}

export default App;
