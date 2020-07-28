import axios from "axios";

export default {
  getEmployees: () => {
    return axios.get("https://randomuser.me/api/?results=10");
  }
};
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
