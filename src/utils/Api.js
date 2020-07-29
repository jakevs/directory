// import React from "react";
import axios from "axios";

const getEmployees = () => {
  axios.get("https://randomuser.me/api/?results=10").then((res) => {
    const persons = res.data;
    console.log(persons);

    // this.setState({ persons });
    return res;
  });
};
export default getEmployees;

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
