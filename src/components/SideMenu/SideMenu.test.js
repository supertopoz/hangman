import React from 'react';
import { shallow } from 'enzyme';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import store from "../../../store";

configure({ adapter: new Adapter() });

import { SideMenu } from './SideMenu';

describe('SideMenu', () => {
  const app = shallow(<SideMenu />);
  it('renders the side menu', () => {
    expect(app).toMatchSnapshot();
  });
});