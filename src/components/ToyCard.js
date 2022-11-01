import React from "react";

function ToyCard({ toy, onClickDelete, onUpdateToy }) {

  const { name, image, likes, id } = toy

  function deleteToy() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(onClickDelete(toy))
  }
  function handleLikeClick() {
    const updateToy = {
      likes: toy.likes + 1
    }
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateToy)
    })
      .then((r) => r.json())
      .then(onUpdateToy)
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button onClick={handleLikeClick} className="like-btn">Like {"<3"}</button>
      <button onClick={deleteToy} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
