import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ containerArray, onClickDelete, onUpdateToy }) {
  const toyCardMap = containerArray.map((toy) => (
    <ToyCard key={toy.id} toy={toy} onClickDelete={onClickDelete} onUpdateToy={onUpdateToy} />
  )
  )

  return (
    <div id="toy-collection">{toyCardMap}</div>
  );
}

export default ToyContainer;
