const initialState = {
    word: '',
    wordList : [],
    currentLetter: '',
    semiCompleteWord: '',
    incorrectLetters: [],
}

const addWords = (state, action) => {
  return { ...state, wordList: action.payload}
}

const reset = (state, action) => { 
  return { ...initialState }
}

const wordFromList = (state, action) => { 
  return { ...state, word: state.wordList[action.payload] }
}

const convertWordToDashes = (state) => {
  let newWord = '';
  state.word.split('').map(item => (item === ' ')? newWord += ' ':newWord += '-' )
  return { ...state, semiCompleteWord: newWord }
}

const getLetter = (state, action) => {
  return { ...state, currentLetter: action.payload }
}

const sliceInletters = (target, current, letter) => {
  let newCurrent = current.split('')
  target.split('').map((item, index) => (item === letter)? newCurrent[index] = letter : '')
  return newCurrent.join('');
}

const letterCheckInsert = (state) => {
  let newWord = sliceInletters(
    state.word, 
    state.semiCompleteWord, 
    state.currentLetter
  );
  
  if(state.word.indexOf(state.currentLetter) < 0){
    return { ...state, incorrectLetters : [...state.incorrectLetters, state.currentLetter]}
  }

  return { ...state, semiCompleteWord : newWord }
}



const hangman = (state = initialState , action) => {
    switch (action.type) {
        case "ADD_WORDS": return addWords(state, action)        
        case "RESET": return reset(state, action)        
        case "WORD_FROM_LIST": return wordFromList(state, action)        
        case "CONVERT_WORD_TO_DASHES": return convertWordToDashes(state, action)        
        case "GET_LETTER": return getLetter(state, action)        
        case "LETTER_CHECK_INSERT": return letterCheckInsert(state, action)        
        
        break;
    }
    return state;
};

export default hangman;