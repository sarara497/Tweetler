
import axios from 'axios';
import { UserActionTypes } from './userTypes'


export const load_user = () => async dispatch => {

    if (localStorage.getItem('access')) {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        }
        const res = await fetch(`http://127.0.0.1:8000/auth/users/me/`, requestOptions)
        const data = await res.json()
        // console.log(data)
        if (data.id) {
            dispatch({
                type: UserActionTypes.USER_LOADED_SUCCESS,
                payload: data
            })
        } else {
            dispatch({
                type: UserActionTypes.USER_LOADED_FAIL
            })
        }
        // console.log(err)
    }
    else {
        dispatch({
            type: UserActionTypes.USER_LOADED_FAIL
        })
    }
}
export const login = (email, password) => async dispatch => {
    // console.log('here')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ email, password })
    try {
        const res = await axios.post(`http://localhost:8000/auth/jwt/create/`, body, config)
        dispatch({
            type: UserActionTypes.LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(load_user())
    } catch (err) {
        dispatch({
            type: UserActionTypes.LOGIN_FAIL
        })
    }
}

export const register = (name, email, password, image) => async dispatch => {
    // console.log('clicked')
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({ name, email, password, image })
    try {
        const res = await axios.post(`http://localhost:8000/auth/users/`, body, config)
        console.log(res)
        dispatch(login(email, password))
    } catch (err) {
        dispatch({
            type: UserActionTypes.LOGIN_FAIL
        })
    }
}