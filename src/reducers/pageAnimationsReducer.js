const pageAnimations = (state = {
    loadingBar: false,
    sideMenu: false,
    tab: '',
    isMobile: false
}, action) => {
    switch (action.type) {
        case "SHOW_LOADING_BAR":
            state = {
                ...state, 
                loadingBar: action.payload,
            } 
            break;       
        case "SHOW_SIDE_MENU":
            state = {
                ...state, 
                sideMenu: action.payload,
            }
            break;
        case "SET_TABS":
        state = {
            ...state, 
            tab: action.payload,
        }
        break;
        case "IS_MOBILE":
        state = {
            ...state, 
            isMobile: action.payload,
        }
        break;
    }
    return state;
};

export default pageAnimations;
