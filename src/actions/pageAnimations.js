export function showLoadingBar(display = false) {
    return {
        type: "SHOW_LOADING_BAR",
        payload: display
    };
}