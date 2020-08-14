import {
  GET_TOKEN_SUCCESFUL,
  GET_TOKEN_FAILURE,
  GET_TOKEN_PENDING,
} from "../constants/actionTypes";

// export const getToken = () => {
//   return (dispatch) => {
//     dispatch(_getTokenStarted());

//     return axios
//       .get(`http://www.mocky.io/v2/5daca80c30000092002987ad`)
//       .then((res) => {
//         dispatch(_getTokenSuccess(res));
//       })
//       .catch((error) => {
//         console.log(error);
//         dispatch(_getTokenFailed(error));
//       });
//   };
// };

// const _getTokenSuccess = (res) => {
//   return {
//     type: GET_TOKEN_SUCCESFUL,
//     data: res.data,
//     tokenID: idToken.rawIdToken,
//   };
// };

// const _getTokenFailed = (error) => {
//   return {
//     type: GET_TOKEN_FAILURE,
//     error,
//   };
// };

// const _getTokenStarted = () => {
//   return {
//     type: GET_TOKEN_PENDING,
//   };
// };
