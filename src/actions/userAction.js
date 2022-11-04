import axios from "axios"
export const GET_DATA = 'GET_DATA';

const setUser = (e) => dispatch => {
    axios.get('https://demo1087320.mockable.io/products').then(res => {
        dispatch({
            type: "SET_USER",
            payload: res.data
        })
    }).catch(err => {
        console.log(err);
    })
    console.log("name:", e.name);
}

const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setUser,
    logOut
}