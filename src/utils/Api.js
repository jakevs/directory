import axios from "axios";

const getEmployees = () => {
  axios.get("https://randomuser.me/api/?results=10").then((res) => {
    return res;
  });
};
export default getEmployees;
// $.ajax({
//     url: 'https://randomuser.me/api/',
//     dataType: 'json',
//     success: function(data) {
//       console.log(data);
//     }
//   });
