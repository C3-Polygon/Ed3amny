// import { useDispatch, useSelector } from "react-redux";

// import "bootstrap/dist/css/bootstrap.min.css";

// import axios, { Axios } from "axios";

// // import "./" the css

// const [fundRaiserType, setfundRaiserType] = useState([]);
// const getAllFundraiserByType = async (type) => {
//   console.log("type", type);
//   let tokenSave = localStorage.getItem("token");
//   console.log("userIdSave", userIdSave);

//   axios
//     .get(`http://localhost:5000/fundraiser/type/${type}`, {
//       headers: { Authorization: `Bearer ${tokenSave}` },
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// // لتوضيح فقط 1 يعني تعليم
// return (
//   <>
//     <button onClick={getAllFundraiserByType(1)}>Education</button>
//   </>
// );

// export default getAllFundraiserByType;
