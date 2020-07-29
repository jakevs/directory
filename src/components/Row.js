import React from "react";

const Row = (props) => {
  const { id, firstName, lastName, username } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{username}</td>
    </tr>
  );
};

export default Row;
