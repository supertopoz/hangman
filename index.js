import React from 'react';
import { render } from 'react-dom';
import store from "./store";
import { Provider } from "react-redux";
import PropTypes from 'prop-types'
import App from './src/containers/App';
import './src/containers/index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Root = ({store}) => (
	    <Provider store={store} >	
	    <Router>
	      <Route path="/" component={App}></Route>	     
	    </Router>
	    </Provider>
)

Root.propTypes = {
	store: PropTypes.object.isRequired
}

render(<Root store={store}/>, document.getElementById('root'));