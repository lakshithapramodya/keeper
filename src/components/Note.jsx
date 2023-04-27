import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="note h1">{props.title}</h1>
      <p className="note p">{props.content}</p>
      <button className="note button" onClick={handleClick}>
        <TrashIcon />
      </button>
    </div>
  );
}

export default Note;
