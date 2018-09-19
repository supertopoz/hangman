export function addWords(words = '') {	
    return {
        type: "ADD_WORDS",
        payload: words
    };
}