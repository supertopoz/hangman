import pageAnimations from './pageAnimationsReducer';


const initialState = {
    loadingBar: false,
    sideMenu: false,
    tab: '',
    isMobile: false
}

describe('pageAnimation reducer', () => {
  it('should return the initial state', () => {
    expect(pageAnimations(undefined, {})).toEqual(initialState)
  })
  it('should handle SHOW_LOADING_BAR', () => {
    const initialState = {
        loadingBar: false,
    } 
    const targetState = {
        loadingBar: true,
    } 
    expect(
      pageAnimations(initialState, {
        type: 'SHOW_LOADING_BAR',
        payload: true
      })
    ).toEqual(targetState)
  })
  it('should handle SHOW_SIDE_MENU', () => {
    const initialState = {
        sideMenu: false,
    } 
    const targetState = {
        sideMenu: true,
    } 
    expect(
      pageAnimations(initialState, {
        type: 'SHOW_SIDE_MENU',
        payload: true
      })
    ).toEqual(targetState)
  })
  it('should handle SET_TABS', () => {
    const initialState = {
        tab: '',
    } 
    const targetState = {
        tab: 'game',
    } 
    expect(
      pageAnimations(initialState, {
        type: 'SET_TABS',
        payload: 'game'
      })
    ).toEqual(targetState)
  })
  it('should handle IS_MOBILE', () => {
    const initialState = {
        isMobile: false,
    } 
    const targetState = {
        isMobile: true,
    } 
    expect(
      pageAnimations(initialState, {
        type: 'IS_MOBILE',
        payload: true
      })
    ).toEqual(targetState)
  })
})