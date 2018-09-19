const hangman = (state = {
    word: '',
    wordList : [],
    currentLetter: '',
    semiCompleteWord: '',
    incorrectLetters: [],
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD_WORDS":
        console.log(action.payload)
            const arr = state.wordList
            arr.push(action.payload)
            state = {
                ...state, 
                wordList: arr,
                lastValues: [...state.lastValues, action.payload]
            } 
            break;
    }
    return state;
};

export default hangman;