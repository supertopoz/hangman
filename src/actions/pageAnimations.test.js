import * as actions from "./pageAnimations";

describe('page actions', () => {
  it('should create an action to test if device is a mobile', () => {
    const expectedAction = { type: 'IS_MOBILE', payload: true}
    expect(actions.isMobile(true)).toEqual(expectedAction)
  })
})
