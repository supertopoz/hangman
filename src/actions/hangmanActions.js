export function addWords(words = '') {	
    return {
        type: "ADD_WORDS",
        payload: words
    };
}

export function reset() {	
    return {
        type: "RESET",
        payload: true
    };
}

export function wordFromList(wordIndex = 0) {	
    return {
        type: "WORD_FROM_LIST",
        payload: wordIndex
    };
}

export function convertWordToDashes(currentWord = '') {	
    return {
        type: "CONVERT_WORD_TO_DASHES",
        payload: currentWord
    };
}

export function getLetter(letter = '') {	
    return {
        type: "GET_LETTER",
        payload: letter
    };
}

export function letterCheckInsert() {	
    return {
        type: "LETTER_CHECK_INSERT",
        payload: true
    };
}