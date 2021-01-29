import { STORE_DATA, USER_LOGIN} from '../actionTypes';
import { Dispatch } from "redux";
import axios from "axios";

// export const signUp = (username, email, password) => async (dispatch) => {
//     // console.log(username, email, password )
//     try {
//         await axios.post(`http://localhost:8000/auth/users/`, { name: username, password: password, email: email })

//             .then((result) => {
//                 console.log("axios", result)
//                 dispatch({ type: STORE_USER, payload: { username: result.data.name, email: result.data.email, status: result.status, id: result.data.id } })
//                 window.location.href = "/usertype"

//             })
//             .catch((err) => {
//                 console.error("err===== =>", err);
//             })
//     }
//     catch (e) {
//         console.log("action error", e)
//     }
// }

export const logIn = (username) => async (dispatch) => {
    // console.log(username, email, password )
    dispatch({ type: USER_LOGIN, payload: { username} })
}

