import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
          src="/assets/318x180.svg"
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
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExampleCard;
