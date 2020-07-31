// import React from "react";
import axios from "axios";
import util from "util";
// const axiosGet = util.promisify(axios.get);

// const getEmployees = () => {
//   axios.get("https://randomuser.me/api/?results=10").then((res) => {
//     const persons = res.data.results;
//     console.log(persons);

//     // this.setState({ persons });
//     return;
//   });
// };

// const getEmployees = async () => {
//   // const employees = await axiosGet("https://randomuser.me/api/?results=10");

//   return employees.data.results;
// };
// export default getEmployees;

// export default class getEmployees extends React.Component {
//   state = {
//     persons: []
//   };

//   componentDidMount() {
//     axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
//       const persons = res.data;
//       this.setState({ persons });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
