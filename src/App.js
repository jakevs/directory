import React, { useState, useEffect } from "react";
import Example from "./components/Navbar";
import Foot from "./components/Footer";
import ExampleCard from "./components/Table";
import Search from "./components/Search";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);

  //sortfunction
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearch(value);
  };

  const sortOnClick = () => {
    const sorted = this.state.employees.sort((a, b) =>
      a.name.last > b.name.last ? 1 : b.name.last > a.name.last ? -1 : 0
    );
    this.setState({ employees: sorted });
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      let results = res.data.results;
      setResults(results);
      setFilteredArray(results);
    });
  }, []);

  useEffect(() => {
    if (!results) {
      return;
    }
    const filteredArray = results.filter((obj) => {
      console.log(obj.name.first);
      return obj.name.first.toLowerCase().includes(search.toLowerCase());
    });
    if (search === "") {
      setFilteredArray(results);
    } else {
      setFilteredArray(filteredArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="App">
      <Example />
      <ExampleCard results={filteredArray} />
      <Search
        handleInputChange={handleInputChange}
        search={search}
        sortOnClick={sortOnClick}
      />
      <Foot />
    </div>
  );
}

// export default Example;
export default App;
