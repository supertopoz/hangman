import React from 'react';
import { shallow } from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import store from "../../../store";

configure({ adapter: new Adapter() });

import Search from './Search';

describe('Header', () => {
  const app = shallow(<Provider store={store}><Search /></Provider>);
  it('renders the title', () => {
    expect(app).toMatchSnapshot();
  });
});