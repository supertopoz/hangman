import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Home } from './Home';

describe('Home', () => {
  test('is rendered', () => {
 
   const component = render(
     <Home/>
    );
    expect(component)
      .toMatchSnapshot();
  });
});