import axios from "axios";

export default {
  getEmployees: () => {
    return axios.get("https://randomuser.me/api/?results=20");
  }
};
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
