import React, { Component } from "react";
import Row from "./Row";
import axios from "axios";
// import getEmployees from "../utils/Api";
import { Card, CardImg, CardBody, CardTitle, Table } from "reactstrap";

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

  //sortfunction
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  sortOnClick = () => {
    const sorted = this.state.employees.sort((a, b) =>
      a.name.last > b.name.last ? 1 : b.name.last > a.name.last ? -1 : 0
    );
    this.setState({ employees: sorted });
  };

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
                {this.state.employees.map((obj, i) => {
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
  }
}

export default ExampleCard;
