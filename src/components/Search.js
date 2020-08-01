import React from "react";

export default function Search(props) {
  return (
    <div>
      <form onSubmit={props.ignoreSubmit} className="form-inline">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          className="form-control"
          type="text"
          placeholder="Filter by Last Name"
        />
      </form>
      <button>Filter!</button>
    </div>
  );
}
