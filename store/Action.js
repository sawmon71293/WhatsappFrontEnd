import { BASE_API_URL } from '../config/api';
import {
  LOGIN, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER,
} from './ActionType';

export const register = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      // Handle the case when the response status is not 2xx (success)
      throw new Error('Registration failed');
    }
    const resData = await (res.status === 204 ? null : res.json());
    if (resData.jwt) localStorage.setItem('token', resData.jwt);

    dispatch({ type: REGISTER, payload: resData });
  } catch (error) {
    throw new Error(error);
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();

    dispatch({ type: LOGIN, payload: resData });
  } catch (error) {
    throw new Error(error);
  }
};

export const currentUser = (token) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/users/profile`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,

      },
    });
    const resData = await res.json();
    dispatch({ type: REQ_USER, payload: resData });
  } catch (error) {
    throw new Error(error);
  }
};

export const searchUser = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/users/search?name=${data.keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,

      },
    });
    const resData = await res.json();

    dispatch({ type: SEARCH_USER, payload: resData });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${BASE_API_URL}/users/update/${data.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data.token}`,

      },
    });
    const resData = await res.json();

    dispatch({ type: UPDATE_USER, payload: resData });
  } catch (error) {
    throw new Error(error);
  }
};
