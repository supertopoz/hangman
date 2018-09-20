import hangman from './hangmanReducer';


const initialState = {
        word: '',
        wordList : [],
        currentLetter: '',
        semiCompleteWord: '',
        incorrectLetters: [],
      }

 const targetStateAddWords = {
        word: '',
        wordList : ['APPLES', 'PEARS'],
        currentLetter: '',
        semiCompleteWord: '',
        incorrectLetters: [],
      } 


describe('hangman reducer', () => {
  it('should return the initial state', () => {
    expect(hangman(undefined, {})).toEqual(initialState)
  })
  it('should handle ADD_WORD', () => {
    expect(
      hangman(initialState, {
        type: 'ADD_WORDS',
        payload: ['APPLES', 'PEARS']
      })
    ).toEqual(targetStateAddWords)
  })
  
  it('should handle WORD_FROM_LIST', ()=>{
    const initialState = { word: '', wordList: ['APPLES', 'PEARS']};
    const targetState = { word: 'PEARS', wordList: ['APPLES', 'PEARS']};

    expect( hangman( initialState, { type: 'WORD_FROM_LIST', payload: 1}))
    .toEqual(targetState)
  });

  it('should handle CONVERT_WORD_TO_DASHES', ()=>{
    const initialState1 = { word: 'PEARS', semiCompleteWord: ''};
    const targetState1 = { word: 'PEARS', semiCompleteWord: '-----'};
    const initialState2 = { word: 'HAPPY COUPLE', semiCompleteWord: ''};
    const targetState2 = { word: 'HAPPY COUPLE', semiCompleteWord: '----- ------'};

    expect( hangman( initialState1, { type: 'CONVERT_WORD_TO_DASHES', payload: true } ))
    .toEqual(targetState1)    

    expect(hangman(initialState2, { type: 'CONVERT_WORD_TO_DASHES',payload: true } ))
    .toEqual(targetState2)
  });
  it('should handle GET_LETTER', ()=>{
    const initialState = {
      currentLetter: '',
    }
    const targetState = {
      currentLetter: 'A',
    }
    expect( hangman( initialState, { type: 'GET_LETTER', payload: 'A' } ))
    .toEqual(targetState)  

  });
  it('should handle LETTER_CHECK', ()=>{
    const initialState1 = {
        word: 'HAPPY COUPLE',
        currentLetter: 'A',
        semiCompleteWord: '----- ------',
        incorrectLetters: [],
    }

    const targetState1 = {
        word: 'HAPPY COUPLE',
        currentLetter: 'A',
        semiCompleteWord: '-A--- ------',
        incorrectLetters: [],
    }

    const initialState2 = {
      word: 'HAPPY COUPLE',
      currentLetter: 'X',
      semiCompleteWord: '-A--- ------',
      incorrectLetters: [],
    }

    const targetState2 = {
      word: 'HAPPY COUPLE',
      currentLetter: 'X',
      semiCompleteWord: '-A--- ------',
      incorrectLetters: ['X'],
    }
    expect( hangman( initialState1, { type: 'LETTER_CHECK_INSERT', payload: true } ))
    .toEqual(targetState1)

    expect( hangman( initialState2, { type: 'LETTER_CHECK_INSERT', payload: true } ))
    .toEqual(targetState2)  

  });
    it('should handle RESET', ()=>{
    expect(
      hangman(targetStateAddWords, {
        type: 'RESET',
        payload: true
      })
    ).toEqual(initialState)
  });
})