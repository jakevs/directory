import React from "react";
import Row from "./Row";
import getEmployees from "../utils/Api";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Table
} from "reactstrap";

const ExampleCard = async () => {
  // const data = await getEmployees;
  let data = [];
  data = getEmployees();
  console.log(data);

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
          <CardTitle>Employee Directory</CardTitle>
          <Table dark>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {data.map((obj, i) => {
                return (
                  <Row
                    key={i}
                    id={obj.id}
                    firstName={obj.firstName}
                    lastName={obj.lastName}
                    username={obj.username}
                  />
                );
              })}
            </tbody>
          </Table>
          <CardText>
            Use the search button to find information about individual employees
            at our company!
          </CardText>
          <Button>Search Directory</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExampleCard;
