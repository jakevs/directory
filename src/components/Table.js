import React, { Component } from "react";
import Row from "./Row";
import axios from "axios";
// import getEmployees from "../utils/Api";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Table
} from "reactstrap";

class ExampleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=10").then((res) => {
      let results = res.data.results;
      console.log(results);
      this.setState({ employees: results });
    });
  }

  render() {
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
                {this.state.employees.map((obj, i) => {
                  return (
                    <Row
                      key={obj.login.uuid}
                      id={obj.login.uuid}
                      firstName={obj.name.first}
                      lastName={obj.name.last}
                      username={obj.login.username}
                    />
                  );
                })}
              </tbody>
            </Table>
            <CardText>
              Use the search button to find information about individual
              employees at our company!
            </CardText>
            <Button>Search Directory</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ExampleCard;
