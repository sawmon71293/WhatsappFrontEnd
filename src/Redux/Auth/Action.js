import { BASE_API_URL } from '../../config/api';
import { LOGIN, LOGOUT, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from './ActionType';

export const register = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json();
        if (resData.accessToken) {

            localStorage.setItem("token", resData.accessToken);
        }
        console.log("register", resData);
        dispatch({ type: REGISTER, payload: resData });
    } catch (error) {
        throw new Error(error);
    }
}


export const login = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json();
        if (resData.accessToken) {

            localStorage.setItem("token", resData.accessToken);
        }
        console.log("LoginData", res);
        dispatch({ type: LOGIN, payload: resData });
    } catch (error) {
        throw new Error(error);
    }
}



export const currentUser = (token) => async (dispatch) => {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "Accept": "text/plain, */*, application/json", // Set the Accept header with multiple media types
        };

        const res = await fetch(`${BASE_API_URL}/api/users/profile`, {
            method: "GET",
            headers: headers

        })
        const resData = await res.json();
        console.log("current user", resData);
        dispatch({ type: REQ_USER, payload: resData });
    } catch (error) {
        throw new Error(error);
    }
}

export const searchUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users/search?name=${data.keyword}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
            },
        })
        const resData = await res.json();
        console.log("Register", resData);
        dispatch({ type: SEARCH_USER, payload: resData });
    } catch (error) {
        throw new Error(error);
    }
}

export const updateUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users/update/${data.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data.token}`
            },
        })
        const resData = await res.json();
        console.log("Register", resData);
        dispatch({ type: UPDATE_USER, payload: resData });
    } catch (error) {
        throw new Error(error);
    }
}

export const logoutAction = () => async (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT, payload: null });
    dispatch({ type: REQ_USER, payload: null });
}