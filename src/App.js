import React from "react";
import Example from "./components/Navbar";
import Foot from "./components/Footer";
import ExampleCard from "./components/Table";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Example />
      <ExampleCard />
      <Search />
      <Foot />
    </div>
  );
}

// export default Example;
export default App;
