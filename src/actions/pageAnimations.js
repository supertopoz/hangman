export function showLoadingBar(display = false) {
    return {
        type: "SHOW_LOADING_BAR",
        payload: display
    };
}

export function showSideMenu(display = false) {
    return {
        type: "SHOW_SIDE_MENU",
        payload: display
    };
}