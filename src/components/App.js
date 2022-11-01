import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toyArray, setToyArray] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((res) => res.json())
      .then(setToyArray)
  }, [])

  console.log(toyArray)

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleNewToy(newToy){
    setToyArray([...toyArray, newToy])
  }

  function handleDelete(deletedToy){
    const updatedToyArray = toyArray.filter((toy) => toy.id !== deletedToy.id)
    setToyArray(updatedToyArray)
  }

  function handleUpdatedToy(updatedToy){
    const updatedToyArray = toyArray.map((toy) => 
    toy.id === updatedToy.id ? updatedToy : toy)
    setToyArray(updatedToyArray)
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm onAddToy={handleNewToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer containerArray={toyArray} onClickDelete={handleDelete} onUpdateToy={handleUpdatedToy}/>
    </>
  );
}

export default App;
