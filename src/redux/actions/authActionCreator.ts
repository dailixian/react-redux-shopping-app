import { Dispatch } from "redux";
import axios from "axios";
import { LOGIN, LOGIN_ERROR, LOGOUT } from "./actionTypes";
import { authUrl } from "../../urls";

export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
    try {
        const resp = await axios.post(authUrl, { email, password });
        dispatch({ type: LOGIN, payload: resp.data });
    }
    catch (err: any) {
        dispatch({ type: LOGIN_ERROR, payload: err.response.data });
    }
};

export const logout = () => ({ type: LOGOUT });