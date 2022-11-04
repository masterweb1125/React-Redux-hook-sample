const setUser = (userObj) => {
    return {
        type: "SET_USER",
        payload: userObj
    }
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