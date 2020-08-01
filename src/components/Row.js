import React from "react";

const Row = (props) => {
  const { id, firstName, lastName, username, cityName } = props;
  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{username}</td>
      <td>{cityName}</td>
    </tr>
  );
};

export default Row;
