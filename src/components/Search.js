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
          placeholder="Type Here!"
        />
      </form>
      <button
        className="btn"
        type="button"
        id="sortBtn"
        onClick={this.sortOnClick}
      >
        Search
      </button>
    </div>
  );
}
