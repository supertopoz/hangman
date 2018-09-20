import * as actions from "./hangmanActions";

describe('add words', () => {
  it('should create an action to add new words', () => {
    const words = ['apple', 'banana']
    const expectedAction = { type: 'ADD_WORDS', payload: words}
    expect(actions.addWords(words)).toEqual(expectedAction)
  })
})