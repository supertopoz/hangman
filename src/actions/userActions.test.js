import * as actions from './userActions'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const age = 1;
    const expectedAction = {
      type: "SET_AGE",
      payload: 1
    }
    expect(actions.setAge(age)).toEqual(expectedAction)
  })
})