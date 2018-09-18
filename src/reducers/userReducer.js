const userReducer = (state = {
    name: "Max",
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            return Object.assign({}, state, { 
                name: action.payload,
            });
            break;
        case "SET_AGE":
            return Object.assign({}, state, { 
                age: action.payload,
            });
            break;
    }
    return state;
};

export default userReducer;