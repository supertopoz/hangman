const pageAnimations = (state = {
    loadingBar: false,
    sideMenu: false,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "SHOW_LOADING_BAR":
            state = {
                ...state, 
                loadingBar: action.payload,
                lastValues: [...state.lastValues, action.payload]
            } 
            break;       
        case "SHOW_SIDE_MENU":
            state = {
                ...state, 
                sideMenu: action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
};

export default pageAnimations;

