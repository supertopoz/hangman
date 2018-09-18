const studentDetailsReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD_STUDENT_ID":
            state = {
                ...state, 
                studentId: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

export default studentDetailsReducer;

