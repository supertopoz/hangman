import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { About } from './About';

describe('About', () => {
  test('is rendered', () => {
 
   const component = render(
     <About/>
    );
    expect(component)
      .toMatchSnapshot();
  });
});