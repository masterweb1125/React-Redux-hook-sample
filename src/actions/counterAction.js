const increment = () => {
    return {
        type: "INCREMENT"
    }
}


const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    increment,
    decrement
}