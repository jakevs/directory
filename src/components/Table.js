import React from "react";
import Row from "./Row";
// import getEmployees from "../utils/Api";
import { Card, CardImg, CardBody, CardTitle, Table } from "reactstrap";

const ExampleCard = ({ results }) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://cdn.iveybusinessjournal.com/wp-content/uploads/2006/03/iStock_000012204568_Large.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle id="employees">Employee Directory</CardTitle>
          <Table dark>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {results &&
                results.map((obj, i) => {
                  return (
                    <Row
                      key={obj.login.uuid}
                      id={obj.location.street.number}
                      firstName={obj.name.first}
                      lastName={obj.name.last}
                      username={obj.login.username}
                      cityName={obj.location.city}
                    />
                  );
                })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExampleCard;
