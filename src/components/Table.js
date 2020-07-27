import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Table
} from "reactstrap";

const ExampleCard = (props) => {
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
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>James</td>
                <td>Van Slyke</td>
                <td>@jvs</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Madeline</td>
                <td>Van Slyke</td>
                <td>@girl</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Grayson</td>
                <td>Van Slyke</td>
                <td>@boy</td>
              </tr>
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
