import { STORE_USER, STORE_DATA, USER_LOGIN } from '../../actions/actionTypes';

const initState = {
    user: null,
}

const usersReducer = (state = initState, action) => {
    // console.log("actiontype", action.type)
    switch (action.type) {
        case USER_LOGIN:

            return { ...state, user: action.payload }

        // case USER_LOGIN:
        //     return { ...state, user: action.payload }

        // case STORE_DATA:
        //     return { ...state, user: action.payload }

        // case ADD_ROLE:
        //     return { ...state, role: action.payload }

        default:
            return state
    }

}

export default usersReducer;